"use client";

import Image from "next/image";
import PageTitle from "../ui/PageTitle";

const steps = [
  {
    step: "Step 01",
    title: "Know Yourself Deeply",
    description:
      "Science-backed assessments reveal how you think, what energizes you.",
    image: "/heroImages/self.png",
    variant: "wide",
  },
  {
    step: "Step 02",
    title: "Choose the Right Path",
    description:
      "Match your personality and interests to careers that truly fit you.",
    variant: "small",
  },
  {
    step: "Step 03",
    title: "Build Real Life Skills",
    description:
      "Hands-on projects, real tools, and mentorship that keep you moving.",
    variant: "small",
  },
  {
    step: "Step 04",
    title: "From Learning to Earning",
    description:
      "Finish ready for paid work, freelancing, or a confident career.",
    image: "/heroImages/life3.png",
    variant: "wideBottom",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <PageTitle
          title="From self-discovery to paid work, no guesswork, just momentum"
          subtitle="Discover your strengths, choose the right path, and take confident steps toward a fulfilling career."
          titleClassName="text-3xl md:text-5xl font-semibold text-blue-600 mb-3"
          subtitleClassName="text-base md:text-lg text-zinc-700"
          containerClassName="text-center max-w-3xl mx-auto"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-14  h-auto">
          {/* Top Left Wide Card */}
          <HoverCard
            step={steps[0].step}
            title={steps[0].title}
            description={steps[0].description}
            image={steps[0].image}
            className="md:col-span-1"
            darkOverlay
          />

          {/* Top Right Small Card */}
          <HoverCard
            step={steps[1].step}
            title={steps[1].title}
            description={steps[1].description}
            className="md:col-span-1 bg-blue-800"
            textDark
          />

          {/* Bottom Left Small Card */}
          <HoverCard
            step={steps[2].step}
            title={steps[2].title}
            description={steps[2].description}
            className="md:col-span-1 bg-blue-700"
            textLight
          />

          {/* Bottom Right Wide Card */}
          <HoverCard
            step={steps[3].step}
            title={steps[3].title}
            description={steps[3].description}
            image={steps[3].image}
            className="md:col-span-1"
            greenOverlay
          />
        </div>
      </div>
    </section>
  );
}

type HoverCardProps = {
  step: string;
  title: string;
  description: string;
  image?: string;
  className?: string;
  darkOverlay?: boolean;
  greenOverlay?: boolean;
  textDark?: boolean;
  textLight?: boolean;
};

function HoverCard({
  step,
  title,
  description,
  image,
  className = "",
  darkOverlay = false,
  greenOverlay = false,
  textDark = false,
  textLight = false,
}: HoverCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] min-h-120 ${className}`}
    >
      {/* Background image */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Overlay */}
      {image && (
        <div
          className={`absolute object-contain inset-0 transition-all duration-500 ${
            darkOverlay
              ? "bg-blue-900 group-hover:bg-blue-500/80"
              : greenOverlay
                ? "bg-blue-600 group-hover:bg-blue-500/80"
                : "bg-black/30"
          }`}
        />
      )}

      {/* Default content */}
      <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between z-10">
        <span
          className={`text-sm font-semibold tracking-wide ${
            textDark
              ? "text-white"
              : textLight
                ? "text-white"
                : "text-white"
          }`}
        >
          {step}
        </span>

        <div className="transition-all duration-500 group-hover:-translate-y-20">
          <h3
            className={`text-2xl md:text-3xl pb-3 font-semibold leading-tight max-w-[14ch] ${
              textDark ? "text-white" : "text-white"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Hover details */}
      <div className="absolute inset-0 z-20 flex items-end p-6 md:p-7 pointer-events-none">
        <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div
            className={`w-12 h-px mb-4 ${
              textDark ? "bg-white" : "bg-white"
            }`}
          />
          <p
            className={`text-sm md:text-base leading-6 max-w-[30ch] ${
              textDark ? "text-white" : "text-white"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
