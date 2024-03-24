import Image from "next/image";
import OpenAI from "openai";
import TopNav from "@/app/ui/topnav";
export default async function Home() {
  return (
    <div>
      <header>
        <TopNav></TopNav>
      </header>
    </div>
  );
}
