// import { UserContext } from "@lib/context";
// import { userContext } from "react";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  //   const { user, username } = userContext(UserContext);
  //   const router = useRouter();
  //   const sigOut = () => {
  //     auth.signOut();
  //     router.reload();
  //   };
  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/", "home"],
          ["About", "/about", "about"],
          ["Login", "/login", "login"],
        ].map(([title, url, key]) => (
          <Link
            key={key}
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
