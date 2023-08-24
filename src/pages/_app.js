import "../../app/globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
};

export default MyApp;
