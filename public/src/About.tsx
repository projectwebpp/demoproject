import { WordsPullUpMultiStyle } from "./components/WordsPullUpMultiStyle";
import { ScrollRevealText } from "./components/ScrollRevealText";

export const About = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-[2rem] p-8 md:p-16 text-center flex flex-col items-center gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-bold">
            Visual arts
          </span>
          <WordsPullUpMultiStyle
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-primary"
            segments={[
              { text: "I am Marcus Chen,", className: "font-normal" },
              { text: "a self-taught director.", className: "font-serif italic" },
              {
                text: "I have skills in color grading, visual effects, and narrative design.",
                className: "font-normal",
              },
            ]}
          />
        </div>

        <ScrollRevealText
          text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        />
      </div>
    </section>
  );
};
