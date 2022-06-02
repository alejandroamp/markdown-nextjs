import "../styles/globals.css";
import "../styles/Markdown.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <script
          defer
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        ></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
