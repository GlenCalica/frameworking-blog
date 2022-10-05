import Link from "next/link";

export default function Navbar() {
   return (
      <>
         <div className="px-12 py-4 flex justify-between">
            <h1 className="text-2xl">Frameworking Ministries</h1>
            <ul className="flex">
               <li className="px-2">
                  <Link as={"../articles"} href={"../pages/articles"}>
                     Articles
                  </Link>
               </li>
               <li className="px-2">
                  <Link as={"../about"} href={"../pages/about"}>
                     About
                  </Link>
               </li>
               <li className="px-2">
                  <Link as={"../give"} href={"../pages/give"}>
                     Give
                  </Link>
               </li>
            </ul>
         </div>
      </>
   );
}
