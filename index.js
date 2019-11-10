import Link from "next/link"; // Link implements client side navigation
import Head from "next/head";
import Layout from "../components/layout";

const Index = () => (
  <Layout
    mainTitle="My Home Page built with Next.js"
    footer={`Copyright ${new Date().getFullYear()}`}
  >
    <Head>
      <title>Home Page</title>
    </Head>

    <h2>Hello from Next JS</h2>
    <Link href="/about">
      <a>About</a>
    </Link>

    <p>
      This is a test, this is only a test... Testing 123. This is a test, this
      is only a test... Testing 123. This is a test, this is only a test...
      Testing 123. This is a test, this is only a test... Testing 123.
    </p>
  </Layout>
);

export default Index;
