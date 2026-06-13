import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./components/WordsPullUpMultiStyle";

const featureCards = [
  {
    type: "video",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
    title: "Your creative canvas.",
  },
  {
    type: "info",
    number: "01",
    title: "Project Storyboard.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Visual timeline management",
      "Collaborative moodboarding",
      "Asset version control",
      "Direct client feedback",
    ],
  },
  {
    type: "info",
    number: "02",
    title: "Smart Critiques.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "AI-driven visual analysis",
      "Automated creative notes",
      "Professional tool integrations",
    ],
  },
  {
    type: "info",
    number: "03",
    title: "Immersion Capsule.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Notification silencing",
      "Ambient soundscapes",
      "Schedule syncing",
    ],
  },
];

const FeatureCard = ({ card, index }: { card: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="relative rounded-2xl overflow-hidden bg-[#212121] h-[480px] flex flex-col"
    >
      {card.type === "video" ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={card.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[#E1E0CC] text-xl font-medium">{card.title}</h3>
          </div>
        </>
      ) : (
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <img
              src={card.icon}
              alt={card.title}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
            />
            <span className="text-gray-500 text-sm">{card.number}</span>
          </div>
          <h3 className="text-primary text-xl font-medium mb-6">{card.title}</h3>
          <ul className="flex flex-col gap-3 mb-auto">
            {card.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <Check size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-gray-400 text-sm leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity mt-6 group">
            Learn more
            <ArrowRight size={16} className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section className="min-h-screen bg-black relative py-24 px-4 md:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-left justify-start"
            segments={[
              {
                text: "Studio-grade workflows for visionary creators.",
                className: "text-primary block w-full",
              },
              {
                text: "Built for pure vision. Powered by art.",
                className: "text-gray-500 block w-full",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {featureCards.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
