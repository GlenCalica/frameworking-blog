import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
   return (
      <div>
         <Navbar />
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <h2>More Stories</h2>
            <div>
               {allPosts.map((post) => (
                  <p key={post.slug}>{post.title}</p>
               ))}
            </div>
         </main>

         <Footer />
      </div>
   );
}

export const getStaticProps = async () => {
   const allPosts = getAllPosts([
      "title",
      "date",
      "slug",
      "author",
      "coverImage",
      "excerpt",
   ]);

   return {
      props: { allPosts },
   };
};
