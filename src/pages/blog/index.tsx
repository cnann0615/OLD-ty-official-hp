import React from "react";
import Link from "next/link";
import Image from "next/image";

import { client } from "../../../libs/client";
import Layout from "@/components/layouts/Layout";
import { formatDate } from "..";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};


export default function blog ({ blog }: any) {
  return (
    <Layout>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {blog.map((blog: any) => (
            <article key={blog.id} className="bg-yellow-300 text-black shadow-lg rounded-lg overflow-hidden h-auto border-4 border-black  hover:border-yellow-500">
              <Link href={`blog/${blog.id}`}>
                <div className="relative">
                  <img src={blog.photo.url} alt={blog.title} className="w-full h-64 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-600">{formatDate(blog.publishedAt)}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};
