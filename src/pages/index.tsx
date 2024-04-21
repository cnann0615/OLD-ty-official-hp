import Layout from "@/components/layouts/Layout";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      {/* Main */}
      <main className="container my-0 mx-auto">
        <div className="text-center">
          <div className="relative w-full flex justify-center items-center mb-6">
            <Image
              src="/images/top-main-img.jpeg"
              alt="Athlete"
              layout="responsive"
              width={500} // 画像の実際の幅
              height={333} // 画像の実際の高さ
            />
          </div>

          <p className="text-xl mb-4">"Perseverance is the key to success"</p>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-bold mb-4 text-red-500">
            Recent Blog Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4">Blog Post 1</div>
            <div className="bg-gray-700 p-4">Blog Post 2</div>
            <div className="bg-gray-700 p-4">Blog Post 3</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
