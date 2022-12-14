import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
   return (
      <div>
         <Navbar />
         <Head>
            <title>Frameworking Ministries</title>
            <meta
               name="description"
               content="Putting your values in the framework of the Gospel"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="px-36 py-12">
            <div>
               {allPosts.map((post) => (
                  <p key={post.slug}>
                     <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                        <a>{post.title}</a>
                     </Link>
                  </p>
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
