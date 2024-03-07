import { client } from "../../../lib/createClient";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import RichText from "../../components/richText";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export const generateStaticParams = async () => {
  const query = groq`*[_type =='post']{
        slug
    }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug.current);
  return slugRoutes.map((slug) => ({
    params: { slug }, // Return the slug directly within the params object
  }));
};

async function SlugPage({ params: { slug } }) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug] {
      _id,
      _createdAt,
      title,
      description,
      "mainImage": mainImage.asset->url,
      body,
      author-> {
        ..., // Include all fields of the author
        "image": image.asset->url
      },
      "slug": slug.current,
      categories[]->
    } | order(_createdAt desc) [0]
  `;

  const post = await client.fetch(query, { slug });
  console.log(post);
  return (
    <div className="mb-10 bg-gray-300   min-h-screen">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={post.mainImage}
            width={500}
            height={500}
            alt="main image"
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={post.author.image}
            width={200}
            height={200}
            alt="author image"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-2xl text-[#5442ae]  font-semibold">
            {post.author.name}
          </p>
          <p className="text-center tracking-wide text-black text-sm">
            {post.author.description}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-[#3e5b98] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-yellow-600">
        <PortableText value={post.body} components={RichText} />
      </div>
    </div>
  );
}

export default SlugPage;
