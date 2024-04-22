import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import { client } from "../../libs/client";

import { TwitterTimelineEmbed } from "react-twitter-embed";
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

export default function Home({ blog }: any) {
  return (
    <Layout>
      {/* Main */}
      <main className="container mx-auto px-4">
        <div className="text-center">
          <div className="relative w-full flex justify-center items-center mb-6">
            <Image
              src="/images/top-main-img.jpeg"
              alt="Athlete"
              layout="responsive"
              width={500}
              height={333}
            />
          </div>

          <p className="text-xl mb-4">Perseverance is the key to success</p>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-bold mb-4">Recent Blog Posts</h3>
          <div className="">
            {blog.map((blog: any) => (
              <Link href={`blog/${blog.id}`} key={blog.id}>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                  <div className="bg-gray-200 shadow-md rounded-lg p-4 hover:bg-gray-300 transition duration-300 ease-in-out">
                    <h2 className="text-lg font-bold">{blog.title}</h2>
                    <p className="text-sm text-gray-600">
                      {new Date(blog.date).toLocaleDateString()}
                    </p>
                    <p className="bg-gray-200 text-gray-800 mt-2">
                      {blog.body.length > 100 ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: `${blog.body.substring(0, 100)}...`,
                          }}
                        ></span>
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{ __html: blog.body }}
                        ></span>
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="w-full md:w-1/2 p-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Dodgers"
              options={{ height: 800 }}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="DodgersNation"
              options={{ height: 800 }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
