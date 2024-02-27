import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import UploadModal from "@/components/UploadModal";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Instagram App</title>
        <meta name="description" content="Created By Mirfozil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <UploadModal />
    </div>
  );
}
