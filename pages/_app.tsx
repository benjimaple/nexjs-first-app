import "../styles/globals.css";
// import { UserContext } from "@lib/context";
import Navbar from "../components/Navbar";
import React from "react";

// require('dotenv').config()

function MyApp({ Component, pageProps }) {
  // const userData = userData(); /

  return (
    // <UserContext.Provider value={userData}>
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
