import HomePage from "./homePage";
import config from "../config/products.json";
export default function Home() {
  console.log("home");

  return (
    <main>
      <HomePage items={config} />
    </main>
  );
}
