import Layout from "@/components/layouts/Layout";
import Image from "next/image";


import { TwitterTimelineEmbed } from "react-twitter-embed";
import { client } from "../../libs/client";
import Link from "next/link";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

// 日付をフォーマットするヘルパー関数
export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(new Date(dateString));
};

export default function Home({ blog }: any) {
  return (
    <Layout>
      {/* メイン */}
      <main className="container mx-auto px-4 h-auto">
        <div className="text-center">
          <div className="relative w-full flex justify-center items-center mb-6">
            <Image
              src="/images/top/img17.jpg"
              alt="Athlete"
              layout="responsive"
              width={500}
              height={270}
            />
          </div>
        </div>

        {/* 紹介 */}
        <div>
          <h1 className="text-2xl text-violet-950 font-bold mb-4">
            Perseverance is the key to success
          </h1>

        </div>

        {/* ブログとX */}

        <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl text-violet-950 font-bold mb-4">
              Recent Blog Posts
            </h3>
            <div className="space-y-4">
              {blog.slice(0, 6).map((blog: any) => (
                <li
                  className="bg-gray-50 h-20 flex items-center pl-4 list-none"
                  key={blog.id}
                >
                  <Link href={`blog/${blog.id}`}>
                    <div className=" text-sm ">{formatDate(blog.publishedAt)}</div>
                    <div className=" text-lg font-bold">{blog.title}</div>
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="DodgersNation"
              options={{ height: 620 }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
