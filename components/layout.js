import React from "react";
import { motion } from "framer-motion";

// Layouts
import Navbar from "./navbar/Navbar";

function Layout({ children }) {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar/>
      {children}

      {/* Background  */}
      <img
        src="/Image/halfLogo.svg"
        alt="halfLogo leftSide"
        className="h-screen fixed top-0 right-0 -z-20"
      />
      <div className="w-72 h-72 md:w-[500px] md:h-[500px] fixed right-0 top-1/4 bg-red-950 opacity-20 rounded-full blur-3xl -z-10"></div>
    </motion.div>
  );
}

export default Layout;
