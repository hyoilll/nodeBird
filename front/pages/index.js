import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NodeBird | Home</title>
      </Head>
      <AppLayout>
        <div>Hello, world</div>
      </AppLayout>
    </div>
  );
};

export default Home;
