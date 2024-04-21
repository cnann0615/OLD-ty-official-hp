import React from 'react'
import { client } from "../../../libs/client";
import Link from "next/dist/client/link";

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};


const blog = ({ blog }: any) => {
  return (
    <div>
      {blog.map((blog: any) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default blog