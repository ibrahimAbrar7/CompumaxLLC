"use client";

import React  from "react";
import { ThemeProvider } from "next-themes";
import Confirmation from "../Components/Confirmation";

const Home = () => {

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
        <main>
        <Confirmation />
        </main>
    </ThemeProvider>
  );
};

export default Home;
