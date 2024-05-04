import dynamic from 'next/dynamic';
import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { client } from "../../libs/client";
import Link from "next/link";

// アニメーションコンポーネントをクライアントサイドでのみ読み込む
const FadeIn = dynamic(() => import('@/components/FadeIn').then(mod => mod.FadeIn), { ssr: false });
const SlideInLeft = dynamic(() => import('@/components/FadeIn').then(mod => mod.SlideInLeft), { ssr: false });
const SlideInRight = dynamic(() => import('@/components/FadeIn').then(mod => mod.SlideInRight), { ssr: false });

// SSG
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
        <div className="relative w-full justify-center items-center mb-6">
        <Image
            src="/images/top/img6.jpeg"
            alt="Athlete"
            layout="responsive"
            width={500}
            height={240}
          />
          <div className="absolute bottom-0 w-full flex items-end p-4">
            <div className="animate-slide-in-left">
              <h1 className="text-white text-4xl lg:text-8xl font-bold underline italic">
                夢を持ち、
              </h1>
              <h1 className="text-white text-4xl lg:text-8xl font-bold underline italic">
                実現に向け一歩踏み出す勇気
              </h1>
            </div>
          </div>
        </div>

        {/* 紹介 */}
        <div>
          <h1 className="text-2xl text-violet-950 font-bold mb-4">
            Perseverance is the key to success
          </h1>
          <div>
            <div className="flex mb-4">
              <div className="w-1/2">
                <SlideInLeft>
                <Image
                  src="/images/top/img1.jpeg"
                  alt="Athlete"
                  layout="responsive"
                  width={250}
                  height={120}
                ></Image>
                </SlideInLeft>
              </div>
              <div className="w-1/2 pl-4">
                <SlideInRight>
                  <h1>タイトル1</h1>
                  <p>テキスト内容1</p>
                </SlideInRight>
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 pl-4">
                <SlideInRight>
                  <h1>タイトル2</h1>
                  <p>テキスト内容2</p>
                </SlideInRight>
              </div>
              <div className="w-1/2">
                <SlideInLeft>
                <Image
                  src="/images/top/img2.jpeg"
                  alt="Athlete"
                  layout="responsive"
                  width={250}
                  height={120}
                ></Image>
                </SlideInLeft>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2">
                <SlideInLeft>
                <Image
                  src="/images/top/img3.jpeg"
                  alt="Athlete"
                  layout="responsive"
                  width={250}
                  height={120}
                ></Image>
                </SlideInLeft>
              </div>
              <div className="w-1/2 pl-4">
                <SlideInRight>
                  <h1>タイトル3</h1>
                  <p>テキスト内容3</p>
                </SlideInRight>
              </div>
            </div>
          </div>
        </div>

        {/* ブログとX */}
        <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="w-full p-4">
            <h3 className="text-2xl text-violet-950 font-bold mb-4">
              Recent Blog Posts
            </h3>
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blog.slice(0, 8).map((blog: any) => (
                  <article
                    key={blog.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden h-auto"
                  >
                    <Link href={`blog/${blog.id}`}>
                      <div className="relative">
                        <img
                          src={blog.photo.url}
                          alt={blog.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {formatDate(blog.publishedAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DodgersNation"
            options={{ height: 775 }}
          />
        </div>
      </main>
    </Layout>
  );
}
