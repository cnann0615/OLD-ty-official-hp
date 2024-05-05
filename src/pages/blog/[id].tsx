import Layout from "@/components/layouts/Layout";
import { client } from "../../../libs/client";

// SSG
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }: any) {
  return (
    <Layout>
      <main className="bg-white shadow-md rounded-lg mx-auto my-8 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
        <div className="text-black prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.body }}></div>
      </main>
    </Layout>
  );
}
