import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ChatContainer from "./components/ChatContainer";
import { Analytics } from "@vercel/analytics/react";
import HomeScreen from "./components/HomeScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-row h-screen max-w-full flex-1">
      <HomeScreen />
      <Analytics />
      {/* Analytics is a React component, would break when running at local*/}
    </div>
  );
}
