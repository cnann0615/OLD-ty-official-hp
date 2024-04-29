import Layout from "@/components/layouts/Layout";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    tempErrors.name = formData.name ? "" : "名前を入力してください。";
    tempErrors.email = formData.email
      ? /^\S+@\S+\.\S+$/.test(formData.email)
        ? ""
        : "有効なメールアドレスを入力してください。"
      : "メールアドレスを入力してください。";
    tempErrors.message = formData.message
      ? ""
      : "問い合わせ内容を入力してください。";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("フォームが送信されました", formData);
      // 送信処理のロジックをここに追加（API呼び出し等）
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Layout>
      <main className="bg-white shadow-md rounded-lg mx-auto my-8 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                errors.name && "border-red-500"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                errors.email && "border-red-500"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={14}
              className={`mt-1 block w-full h-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                errors.message && "border-red-500"
              }`}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 focus:ring-offset-violet-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              送信
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
}
