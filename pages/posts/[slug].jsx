import Head from "next/head";
import ErrorPage from "next/error";
import markdownStyles from "../../styles/markdown-styles.module.css";

import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Post({ post }) {
   const router = useRouter();
   if (!router.isFallback && !post?.slug) {
      return <ErrorPage statusCode={404} />;
   }
   return (
      <>
         <Navbar />
         {router.isFallback ? (
            <h1>Loading...</h1>
         ) : (
            <>
               <article>
                  Test
                  <Head>
                     <title>{post.title}</title>
                     <meta property="og:image" content={post.ogImage.url} />
                  </Head>
                  <p>{post.title}</p>
                  <p>{post.coverImage}</p>
                  <p>{post.date}</p>
                  <p>{post.author.name}</p>
                  <p>{post.author.picture}</p>
                  <div
                     className={markdownStyles["markdown"]}
                     dangerouslySetInnerHTML={{ __html: post.content }}
                  />
               </article>
            </>
         )}
         <Footer />
      </>
   );
}

export async function getStaticProps({ params }) {
   const post = getPostBySlug(params.slug, [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
   ]);
   const content = await markdownToHtml(post.content || "");

   return {
      props: {
         post: {
            ...post,
            content,
         },
      },
   };
}

export async function getStaticPaths() {
   const posts = getAllPosts(["slug"]);

   return {
      paths: posts.map((post) => {
         return {
            params: {
               slug: post.slug,
            },
         };
      }),
      fallback: false,
   };
}
