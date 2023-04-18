import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ChatContainer from "./components/ChatContainer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container mx-auto">
        <Analytics />
        <h2 className="text-4xl text-center">AI: movie to emoji😃🤩🤗🤣</h2>
        <div className="bg-slate-200 rounded-3xl shadow-2xl mx-auto max-w-3xl">
          <ChatContainer />
        </div>
      </div>
    </main>
  );
}
