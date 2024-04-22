import React from "react";
import { client } from "../../../libs/client";
import Link from "next/dist/client/link";
import Layout from "@/components/layouts/Layout";

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
      <div>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </div>
    </Layout>
  );
};
