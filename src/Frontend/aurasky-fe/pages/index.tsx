import Head from "next/head";
import HomePage from "./home";
import contractAddress from "../helpers/connectMetamask/abicontract";
import { useEffect } from "react";

declare let window: any;

declare global {
  var defaultAccount: string;
  var balance: string;
}
global.balance = "";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AuraSky</title>
        <link
          rel="icon"
          href="https://i.imgur.com/32dfx1.png"
          type="image/x-icon"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.3/css/all.min.css"
        />
      </Head>
      <HomePage />
    </div>
  );
}
