import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/createClient";

function BlogContent({ posts }) {
  function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
      return text;
    }
    const words = text.split(" ");
    const truncatedText = words.slice(0, maxLength).join(" ");
    return truncatedText + "...";
  }

  console.log(posts);
  return (
    <div className="bg-gray-200 py-20 px-10 flex-col gap-10  ">
      <span className="text-black font-extrabold text-2xl">Trending Posts</span>
      {posts &&
        Array.isArray(posts) &&
        posts.map((post) => (
          <Link href="/" key={post._id}>
            <div className="flex flex-col md:flex-row gap-10   mt-2  bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
              <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
                <Image
                  src={post.mainImage}
                  width={500}
                  height={500}
                  className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
                  alt="main blog image"
                />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
                <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
                  <p className="text-lg font-semibold">click to read</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {post.categories &&
                      post.categories.map((item) => (
                        <p className="text-green-600 text-xs" key={item?._id}>
                          {item.title}
                        </p>
                      ))}
                  </div>

                  <h2 className="text-black font-semibold text-2xl hover:text-red-600 duration-200 cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-gray-500">
                    {truncateText(post.description, 50)}
                  </p>

                  <p className="text-gray-500 text-sm font-semibold">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <div className="flex flex-row gap-5">
                    <div>
                      <Image
                        src={post?.author.image}
                        width={200}
                        height={200}
                        alt="author image"
                        className="rounded-full object-cover h-10 w-10"
                      />
                    </div>
                    <div>
                      <p className="text-red-600 text-sm font-semibold mt-2">
                        By: {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default BlogContent;
