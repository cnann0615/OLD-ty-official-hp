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
      <div>
        {blog.map((blog: any) => (
          <article key={blog.id}>
            <section>
            <Link href={`blog/${blog.id}`}>
                <div>
                  <img src={blog.photo.url} alt={""}></img>
                </div>
                <div>
                  <h3>{blog.title}</h3>
                </div>
                <div>{formatDate(blog.publishedAt)}</div>
                </Link>
            </section>
          </article>
        ))}
      </div>
    </Layout>
  );
};
