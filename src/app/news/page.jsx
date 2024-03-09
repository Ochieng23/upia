import { createClient, groq } from "next-sanity";
import { client } from "../../lib/createClient"; // Assuming `client` is exported correctly from `createClient`
import React from "react";
import BlogContent from "../components/blogContent";

const query = groq`*[_type == 'post'] {
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
  "slug": slug.current, // Accessing the current property of the slug field
  categories[]->
} | order(_createdAt desc)
`;

export default async function Posts() {
  try {
    const posts = await client.fetch(query); // Corrected variable name from `post` to `posts`

    return (
      <div className="min-h-screen ">
        <header>
          <h1>Sanity + Next.js</h1>
        </header>
        <main>
          <h2 className="text-red-200">UPIA</h2>
          <BlogContent posts={posts} />
         
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null; // or display an error message
  }
}
