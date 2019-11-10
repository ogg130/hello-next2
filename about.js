import Link from "next/link"; // Link implements client side navigation
import Head from "next/head";
import Layout from "../components/layout";

const myStyle = { color: "red", borderLeft: "5px solid black", padding: "5px" };
const About = () => (
  <Layout
    mainTitle="My About Page built with Next.js"
    footer={`This is built by Robert`}
  >
    <Head>
      <title>Home Page</title>
    </Head>

    <h2>About</h2>
    <Link href="/">
      <a style={myStyle}>Home</a>
    </Link>

    <p>
      This is a test, this is only a test... Testing 123. This is a test, this
      is only a test... Testing 123. This is a test, this is only a test...
      Testing 123. This is a test, this is only a test... Testing 123.
    </p>

    {/* Scoped CSS... eww... */}
    <style jsx>{`
      p {
        color: indigo;
        font-size: 20px;
      }
    `}</style>
  </Layout>
);

export default About;
