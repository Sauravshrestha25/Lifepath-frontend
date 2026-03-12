"use client";

import { ArrowRight } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#rocket", {
        motionPath: {
          path: "#spacePath",
          align: "#spacePath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <section className="min-h-screen w-full mx-auto px-4 md:px-0 pt-18 md:pt-0 overflow-hidden bg-white">
      <div className="max-w-11/12 mx-auto md:h-screen flex md:items-center md:justify-center  md:pt-16">
        {/* Left Content */}
        <div className="space-y-4 z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-blue-700 mb-4">
              Find Your Lifepath
            </h1>
            <p className="text-sm md:text-xl font-medium text-zinc-700 leading-relaxed">
              We help you understand yourself, choose a career that fits your
              personality, and get job-ready skills that companies actually
              need.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-start gap-3 pt-2">
            <Link href="/personality-test">
              <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-xl shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 flex items-center justify-center gap-2 cursor-pointer group">
                Discover Your Career Path
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
            <Link href="/job-training">
              <button className="w-full bg-white sm:w-auto px-8 py-4 border-2 border-zinc-300 text-blue-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer">
                Explore Job Training
              </button>
            </Link>
          </div>
        </div>

        <div
          ref={containerRef}
          className="md:flex h-[200vh] hidden md:w-1/2 md:items-start md:justify-start relative overflow-visible"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1003 1003"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              id="spacePath"
              d="M303.796 31.0776C561.426 -66.1406 755.454 87.7946 820.268 176.915L819.459 177.502C754.796 88.5892 561.2 -64.9864 304.149 32.0132C175.554 80.5397 100.782 142.697 57.6543 200.646C14.5581 258.552 3.0374 312.285 1.00684 344.075C10.1079 383.98 31.1727 443.469 79.9111 492.384C128.664 541.314 205.153 579.709 325.202 577.284C400.245 575.768 478.702 558.026 554.538 536.782C630.342 515.547 703.585 490.794 768.062 475.312C832.532 459.832 888.425 453.568 929.562 469.412C950.153 477.342 967.038 490.806 979.442 511.392C991.841 531.968 999.749 559.635 1002.44 595.955C1004.73 626.816 995.482 651.51 977.678 671.673C959.888 691.82 933.574 707.421 901.747 720.166C838.104 745.651 752.215 759.791 667.845 775.907C583.428 792.031 500.535 810.132 442.725 843.511C413.83 860.195 391.237 880.677 377.846 906.603C364.458 932.522 360.241 963.934 368.188 1002.53L367.208 1002.74C359.224 963.952 363.447 932.3 376.957 906.144C390.463 879.995 413.224 859.391 442.225 842.646C500.206 809.168 583.271 791.043 667.657 774.924C752.089 758.797 837.847 744.676 901.375 719.237C933.134 706.519 959.285 690.991 976.928 671.011C994.555 651.048 1003.71 626.618 1001.44 596.028C998.759 559.806 990.878 532.307 978.586 511.908C966.3 491.518 949.593 478.197 929.203 470.344C888.382 454.622 832.766 460.804 768.295 476.285C703.83 491.763 630.697 516.486 554.808 537.745C478.951 558.994 400.395 576.764 325.223 578.283C204.927 580.713 128.165 542.231 79.2021 493.09C30.2533 443.964 9.13186 384.233 0.0166016 344.226L0 344.155L0.00488281 344.083C2.03333 312.136 13.5926 258.175 56.8516 200.049C100.112 141.923 175.052 79.66 303.796 31.0776Z"
              fill="#E5E7EB"
              opacity="0.5"
            />
          </svg>
          <svg
            id="rocket"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="absolute transform -rotate-90"
            style={{ willChange: "transform" }}
          >
            <g fill="none">
              <path
                fill="#020202"
                d="M23.997 2.486a1.94 1.94 0 0 0-.5-1.311a2.56 2.56 0 0 0-2.003-.24q-1.833.405-3.613 1c-.61.18-1.211.391-1.802.621c-.88.33-1.742.711-2.612 1.091A49 49 0 0 0 8.782 6a26.6 26.6 0 0 0-4.284 3.003l-3.433 3.073l-.791.79a1.7 1.7 0 0 0-.25.34a.4.4 0 0 0 0 .271a.68.68 0 0 0 .4.5c.387.132.792.2 1.201.2c.44 0 1.221 0 1.892.1c.34-.01.678.038 1 .14l.191 2.233c.06.64.09 1.141.09 1.612c0 .75-.1 2.052-.1 3.073a.34.34 0 1 0 .68 0c0-1.001.13-2.323.14-3.073c0-.49 0-1.001-.07-1.672c-.07-.67-.07-1.511-.15-2.002s-.09-.76-1.34-1c-.741-.091-1.762-.141-2.313-.171l-.55-.08l.58-.57l3.453-3.004a24.8 24.8 0 0 1 4.144-2.912a50 50 0 0 1 4.595-2.183c.85-.36 1.712-.71 2.572-1a32 32 0 0 1 5.646-1.522c.9.39.77.73.75 1a7.2 7.2 0 0 1-.27 1.492l-1.29 4.365c-.261.87-.541 1.681-.832 2.472c-.71 1.912-1.491 3.704-2.212 5.776q-.254.706-.6 1.371c-.37.7-.791 1.371-1.182 2.002q-.165.306-.38.58l-.1.12l-.06-.09l-1.001-1.571a25 25 0 0 0-1.582-1.952a21 21 0 0 0-1.791-1.782c-.43-.36-1.642-1.36-2.002-.64c-.1.13-.21.38-.27.45L8.09 17.441l-1.18 2.092c-.421.73-.922 1.421-1.372 2.152c-.19.32-.38.65-.54 1.001a.3.3 0 0 0 .14.4s.28.23.69-.08s.53-.39.76-.57c.231-.18.762-.55 1.132-.811c.37-.26.67-.45 1.001-.68l1.521-1.062c.801-.57 1.572-1.16 2.323-1.791l.17.19a27 27 0 0 1 1.491 1.912l.901 1.541q.139.256.31.49a.55.55 0 0 0 .45.17c.238-.038.46-.142.642-.3c.284-.275.53-.589.73-.93c.41-.631.861-1.322 1.251-2.002q.405-.719.691-1.492c.74-2.062 1.562-3.834 2.282-5.725c.32-.821.611-1.652.881-2.543l1.301-4.404a8 8 0 0 0 .33-2.513M9.102 19.283q-.519.334-1 .72c-.341.27-.661.55-1.002.851l-.75.77c.39-.59.8-1.16 1.16-1.76l1.242-2.003l1.151-1.651c.05-.06.2-.31.26-.41s.2.13.31.21s.451.41.581.52c.34.31.68.66 1.001 1c-.95.632-1.982 1.142-2.953 1.753"
              />
              <path
                fill="#0c6fff"
                d="M13.687 9.673c-.53.58-1.001 1.191-1.522 1.822a29 29 0 0 0-1.631 2.202c-.11.16-.21.33-.31.49c-.26.792.11.671.8.08l.09-.14c.56-.71 1.191-1.38 1.782-2.001c.95-1.091 2.002-2.092 3.003-3.083L18.12 6.95a135 135 0 0 0 3.253-3.113C22.996.995 18.582 4.998 16.2 7.17c-.87.83-1.711 1.621-2.512 2.502m-.401-3.062a68 68 0 0 0-4.074 3.003l-3.164 2.573c-.2.18-.43.37-.66.56c-.48.6-.41.821.68.34c.16-.11.32-.22.45-.33l3.304-2.362l8.228-5.675c.81-.551 1.592-1.102 2.403-1.632c.19-.67-1.232-.2-2.403.49l-.53.32c-1.422.892-2.853 1.762-4.234 2.713"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
