import Layout from "@/components/layouts/Layout";
import Image from "next/image";

import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Home() {
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

          <p className="text-xl mb-4">"Perseverance is the key to success"</p>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-bold mb-4">
            Recent Blog Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4">Blog Post 1</div>
            <div className="bg-gray-200 p-4">Blog Post 2</div>
            <div className="bg-gray-200 p-4">Blog Post 3</div>
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
