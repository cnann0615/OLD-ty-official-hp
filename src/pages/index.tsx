import dynamic from "next/dynamic";
import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { client } from "../../libs/client";
import Link from "next/link";

// アニメーションコンポーネントをクライアントサイドでのみ読み込む
const TimeFadeIn = dynamic(
  () => import("@/components/FadeIn").then((mod) => mod.TimeFadeIn),
  { ssr: false }
);
const FadeIn = dynamic(
  () => import("@/components/FadeIn").then((mod) => mod.FadeIn),
  { ssr: false }
);
const SlideInLeft = dynamic(
  () => import("@/components/FadeIn").then((mod) => mod.SlideInLeft),
  { ssr: false }
);
const SlideInRight = dynamic(
  () => import("@/components/FadeIn").then((mod) => mod.SlideInRight),
  { ssr: false }
);

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

// 日付をフォーマットする関数
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
          <FadeIn>
            <Image
              src="/images/top/img6.jpeg"
              alt="Athlete"
              layout="responsive"
              width={500}
              height={240}
              className="rounded-2xl border-4 border-black"
            />
          </FadeIn>
          <div className="absolute bottom-0 w-full flex items-end p-4">
            <TimeFadeIn>
              <div className="animate-slide-in-left">
                <h1 className="text-white text-4xl lg:text-8xl font-bold underline italic decoration-yellow-500 decoration-16">
                  夢を持ち、
                </h1>
                <h1 className="text-white text-4xl lg:text-8xl font-bold underline italic decoration-yellow-500 decoration-16">
                  実現に向け一歩踏み出す勇気。
                </h1>
              </div>
            </TimeFadeIn>
          </div>
        </div>

        {/* 紹介 */}
        <div className=" text-gray-100 font-bold">
          <FadeIn>
            <h1 className=" my-32 text-center text-6xl text-white font-bold">
              ”人はいつからでも、何にでもなれる。”
            </h1>
          </FadeIn>

          <div>
            <div className="flex flex-col md:flex-row mb-28 gap-7">
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <Image
                    src="/images/top/img1.jpeg"
                    alt="Athlete"
                    layout="responsive"
                    width={250}
                    height={120}
                    className="rounded-xl border-4 border-black"
                  ></Image>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2 pl-4 flex items-center">
                <SlideInLeft>
                  <h1 className="text-4xl md:text-6xl leading-snug md:leading-normal">
                    2028年<br /><span className="text-yellow-500">LAオリンピック</span>を
                    <br />
                    目指して、カナダ挑戦中。
                  </h1>
                </SlideInLeft>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-28 gap-7">
              <div className="w-full md:w-1/2 pl-4 flex items-center">
                <SlideInRight>
                  <h1 className="text-4xl md:text-6xl leading-snug md:leading-normal">
                    目標達成に向けて
                    <br />
                    <span className="text-yellow-500">挑戦する姿</span>、
                    <span className="text-yellow-500">成長</span>や
                    <span className="text-yellow-500">思考</span>、
                    <span className="text-yellow-500">環境が変化する過程</span>
                    を発信
                  </h1>
                </SlideInRight>
              </div>
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <Image
                    src="/images/top/img2.jpeg"
                    alt="Athlete"
                    layout="responsive"
                    width={250}
                    height={120}
                    className="rounded-xl border-4 border-black"
                  ></Image>
                </FadeIn>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-28 gap-7">
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <Image
                    src="/images/top/img3.jpeg"
                    alt="Athlete"
                    layout="responsive"
                    width={250}
                    height={120}
                    className="rounded-xl border-4 border-black"
                  ></Image>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2 pl-4 flex items-center">
                <SlideInLeft>
                  <h1 className="text-4xl md:text-6xl leading-snug md:leading-normal">
                    テキスト
                    <br />
                    <span className="text-yellow-500">テキストテキスト</span>
                    テキストテキストテキスト
                  </h1>
                </SlideInLeft>
              </div>
            </div>
          </div>
        </div>

        {/* ブログとX */}
        <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="w-full p-4">
            <SlideInLeft>
              <div className="flex gap-10  mb-6 ">
              <h3 className="text-4xl text-white font-bold underline underline-offset-8 decoration-yellow-500 decoration-8">
                Recent Blog Posts
              </h3>
              <Link href="/blog" className="rounded-lg py-2 px-4 text-2xl font-bold bg-black hover:bg-yellow-500 hover:text-black">
                View More　　→
              </Link>
              </div>
            </SlideInLeft>
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blog.slice(0, 8).map((blog: any) => (
                  <article
                    key={blog.id}
                    className=" bg-yellow-300 text-black shadow-lg rounded-lg overflow-hidden h-auto border-4 border-black"
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
        {/* <div className="w-full md:w-1/2 p-4">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DodgersNation"
            options={{ height: 775 }}
          />
        </div> */}
      </main>
    </Layout>
  );
}
