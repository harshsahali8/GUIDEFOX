"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledToHeight, setIsScrolledToHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollTop >= windowHeight) {
        setIsScrolledToHeight(true);
      } else {
        setIsScrolledToHeight(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50  border-b  bg-[#FEFEFF] w-screen flex justify-center items-center ${
        isScrolled && "border-b"
      }`}
    >
      <header className={`  w-10/12 py-4 flex justify-between `}>
        {/* logo */}
        <Link href={"/"} className="flex flex-row  justify-center items-center">
          <img src={"/newlogo.png"} alt="foxy" className="h-10 w-auto" />
          <h1 className="font-extrabold   text-2xl  border-[#59CC03] text-[#59CC03] uppercase">
            GUIDEFOX
          </h1>
          {/* <GiFoxTail className="h-10 w-10 text-[#59CC03] mt-4" /> */}
        </Link>
        {/* nav links */}
        <nav className="flex space-x-16 font-semibold text-[#868686] text-lg justify-center items-center">
          <Link href={"/mentors"}>Explore Mentors</Link>
          <Link href={"/find-institution"}>College/Uni</Link>
          <Link href={"/career-library"}>Career Library</Link>
        </nav>
        {/* lanquage and get started call to action btn */}
        <div className="flex justify-center items-center">
          {isScrolledToHeight ? (
            <button
              className="border-[#E4E4E5] border-2  bg-[#59CC03] text-white rounded-md px-6 py-2 font-bold capitalize"
              style={{
                boxShadow: "0 4px 0 0 #E4E4E5",
                borderRadius: "6px",
              }}
            >
              get started
            </button>
          ) : (
            <div className="hidden md:flex">
              <SignedOut>
                <Link
                  href={
                    "https://informed-seahorse-16.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
                  }
                  className="border-[#E4E4E5] border-2  bg-white text-[#59CC03] rounded-md px-6 py-2 font-bold capitalize"
                  style={{
                    boxShadow: "0 4px 0 0 #E4E4E5",
                    borderRadius: "6px",
                  }}
                >
                  Sign In
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

function getRandomFoxyExpression(): string {
  const foxyExpression: string[] = [
    "/foxy-expression/attitude.png",
    "/foxy-expression/calm.png",
    "/foxy-expression/closed-eye.png",
    "/foxy-expression/crying.png",
    "/foxy-expression/dark.png",
    "/foxy-expression/happy.png",
    "/foxy-expression/in-love.png",
    "/foxy-expression/planning-something-bad.png",
    "/foxy-expression/scared.png",
    "/foxy-expression/sleepy.png",
  ];
  const randomIndex = Math.floor(Math.random() * foxyExpression.length);
  return foxyExpression[randomIndex];
}

//https://informed-seahorse-16.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F
