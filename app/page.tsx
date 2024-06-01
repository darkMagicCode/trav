import Image from "next/image";
import HomePage from "./homePage";
import config from "../config/products.json";
export default function Home() {
  console.log('home');
  
  return (
    <main className="">
      
      <HomePage items={config} />
    </main>
  );
}
