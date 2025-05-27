import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [showContent, setShowContent] = useState(false);

  const scrollToBottom = () => {
    const bottomSection = document.getElementById("bottompage");
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2,
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      console.log(xMove);
      gsap.to(".main .text", {
        x: xMove * 1.7,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.2,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-10 h-[4px] bg-white"></div>
                  <div className="line w-6 h-[4px] bg-white"></div>
                  <div className="line w-3 h-[4px] bg-white"></div>
                </div>
                <h3 className="text-2xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                src="./sky.png"
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
              />
              <img
                src="./bg.png"
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 translate-x-1/20 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[7rem] leading-none -ml-55">grand</h1>
                <h1 className="text-[7rem] leading-none -ml-20">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-55">auto</h1>
              </div>
              <img
                src="./girlbg.png"
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
              />
            </div>
            <div
              className="bottombar text-white absolute bottom-0 left-0 w-full cursor-pointer px-6 py-10 bg-gradient-to-t from-black to-transparent"
              id="bottombar"
              onClick={scrollToBottom}
            >
              <div className="flex gap-2 items-center">
                <i className="-mb-4 text-3xl ri-arrow-down-line"></i>
                <h3 className="-mb-4 text-l font-sans">Scroll Down</h3>
              </div>
              <img
                src="./ps5.png"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]"
              />
            </div>
          </div>
          <div
            className="w-full h-screen flex items-center justify-center bg-black"
            id="bottompage"
          >
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full ">
                <img
                  className="absolute scale-[0.8] -top-1/4 left-1/2 -translate-x-1/2 -trnaslate-y-1/2"
                  src="./imag.png"
                />
              </div>
              <div className="rg w-[35%] py-10">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-8 font-sans text-sm">
                  GTA VI brings Vice City back to life with stunning detail and
                  a world that feels alive at every corner. From chaotic street
                  chases to building your underground empire, the game gives you
                  the freedom to rise, rule, or rebel — all on your terms.
                </p>
                <p className="mt-7 font-sans text-sm">
                  Step into a rich storyline filled with unpredictable missions,
                  intense action, and characters you won’t forget. In GTA VI,
                  your choices shape your journey — whether you're chasing
                  power, pulling heists, or surviving the streets.
                </p>
                <p className="mt-7 font-sans text-sm">
                  Designed for the next generation, GTA VI offers
                  ultra-realistic graphics, smarter AI, and a city that evolves
                  as you play. With new mechanics, seamless multiplayer, and
                  endless exploration, it’s the most ambitious Grand Theft Auto
                  yet.
                </p>
                <a href="https://www.rockstargames.com/VI">
                  <button className="bg-yellow-500 px-6 py-6 text-2xl text-black mt-10 cursor-pointer">
                    Coming Soon - 26th May 2026
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
