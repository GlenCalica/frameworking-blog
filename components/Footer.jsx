import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-neutral-800">
         <div className="px-36 py-12">
            <h1 className="text-white text-3xl">Frameworking Ministries</h1>
            <p className="text-white text-sm py-2">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Deleniti recusandae consectetur, commodi suscipit modi et
               voluptatum voluptates doloribus autem similique.
            </p>
            <div className="flex justify-between">
               <ul>
                  <li className="text-white">
                     <Link as={"../articles"} href={"../pages/articles"}>
                        Articles
                     </Link>
                  </li>
                  <li className="text-white">
                     <Link as={"../about"} href={"../pages/about"}>
                        About
                     </Link>
                  </li>
                  <li className="text-white">
                     <Link as={"../give"} href={"../pages/give"}>
                        Give
                     </Link>
                  </li>
               </ul>
               {/* For Socials Later */}
               {/* <ul>
                  <li>image</li>
                  <li>image</li>
                  <li>image</li>
               </ul>
               <ul></ul> */}
            </div>
            <p className="text-white text-center pt-4">
               © 2022 Frameworking Ministries
            </p>
         </div>
      </footer>
   );
}
