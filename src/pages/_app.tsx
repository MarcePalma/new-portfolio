import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navigation/Menu";
import HeroChatbot from "@/components/herochatbot/heroChatBot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <HeroChatbot />

    </div>
  )
}
