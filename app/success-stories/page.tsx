import Image from "next/image";
import NewsletterCTA from "../components/home/NewsletterCTA";
import PageTitle from "../components/ui/PageTitle";

type Story = {
  name: string;
  role: string;
  company: string;
  before: string;
  after: string;
  quote: string;
  story: string;
  img: string;
};

const stories: Story[] = [
  {
    name: "Alish Maharjan",
    role: "Creative Designer",
    company: "Logolab",
    before: "Confused between design and marketing",
    after: "Landed his first Creative Designing role in 4 months",
    quote:
      "Lifepath helped me focus on Creative Designing and build a portfolio that got me hired.",
    story:
      "He followed the clarity roadmap, practiced weekly design challenges, and refined her case studies with mentor feedback until her portfolio felt confident and cohesive. She also learned how to present her process clearly, which helped her stand out during interviews and communicate value to hiring teams.",
    img: "/students/Alish.jpeg",
  },
  {
    name: "Krishma Maharjan",
    role: "UI/UX Designer",
    company: "WebX Nepal",
    before: "Started with zero coding background",
    after: "Now building production web apps",
    quote: "The step-by-step roadmap made learning feel simple and achievable.",
    story:
      "She built small projects every week, learned Git collaboration, and shipped a capstone app that helped her stand out in interviews. By documenting her learning journey and showcasing real features, she could explain her decisions with clarity and confidence.",
    img: "/students/krishma.jpeg",
  },
  {
    name: "Saurav Shrestha",
    role: "Web Developer",
    company: "WebX Nepal",
    before: "Learned skills but no direction",
    after: "Got a marketing internship in 2 months",
    quote: "I finally knew what to learn and why. That changed everything.",
    story:
      "He focused on campaign planning, content calendars, and analytics, then used real results from a mock campaign in his interviews. The structured practice helped his explain strategy, creative choices, and performance outcomes in a way employers valued.",
    img: "/students/Saurav.jpeg",
  },
  {
    name: "Aayush Shrestha",
    role: "Graphic Designer",
    company: "Adspire Nepal",
    before: "Struggled to build a strong portfolio",
    after: "Now freelancing with recurring clients",
    quote: "The feedback loops and portfolio reviews were game-changing.",
    story:
      "He polished his brand projects, improved presentation skills, and built a portfolio that earned consistent freelance referrals. After refining client communication and feedback loops, he started getting repeat work and stronger word-of-mouth recommendations.",
    img: "/students/Aayush.jpeg",
  },
  {
    name: "Sujan Theng",
    role: "Social Media Manager",
    company: "Adspire Nepal",
    before: "Unsure how to start a career path",
    after: "Managing 5+ brand accounts",
    quote: "Lifepath gave me clarity and confidence to take action.",
    story:
      "He created structured content systems, learned paid social basics, and now leads social growth for multiple brands. By tracking engagement trends and iterating weekly, he gained the confidence to pitch and manage larger accounts.",
    img: "/students/Sujan.jpeg",
  },
  {
    name: "Sijan Bartaula",
    role: "Full Stack Developer",
    company: "WebX Nepal",
    before: "Did random courses without outcome",
    after: "Moved into a product design role",
    quote: "The career mapping helped me choose the right path fast.",
    story:
      "He mapped his skills to product roles, built a UX case study from scratch, and demonstrated a clear product mindset during interviews. The additional focus on problem framing and user insights made his portfolio feel professional and job‑ready.",
    img: "/students/Sijan.jpeg",
  },
  {
    name: "Smile Moktan",
    role: "Brand Developer",
    company: "Leaders Club",
    before: "Overwhelmed by tools and dashboards",
    after: "Now delivering weekly KPI reports",
    quote: "The structured path helped me finally connect data to decisions.",
    story:
      "She learned SQL fundamentals, built clear dashboards, and showcased a reporting portfolio that landed her a data role. Presenting insights with simple visuals and business context helped her communicate impact to hiring managers.",
    img: "/students/smile.jpeg",
  },
  {
    name: "Binam Shrestha",
    role: "Web Developer",
    company: "WebX Nepal",
    before: "Unsure how to break into tech",
    after: "Now testing live web releases",
    quote: "The hands-on projects made QA feel real and practical.",
    story:
      "He practiced test cases, bug reporting, and automation basics, then used a QA project log to impress recruiters. By demonstrating structured thinking and attention to detail, he proved he could handle real product releases.",
    img: "/students/binam.jpeg",
  },
  {
    name: "Umesh B.K.",
    role: "Social Media Manager",
    company: "Lifepath",
    before: "Did random courses without outcome",
    after: "Moved into a product design role",
    quote: "The career mapping helped me choose the right path fast.",
    story:
      "He mapped his skills to product roles, built a UX case study from scratch, and demonstrated a clear product mindset during interviews. The additional focus on problem framing and user insights made his portfolio feel professional and job‑ready.",
    img: "/students/umesh.jpeg",
  },
];

const page = () => {
  return (
    <section className="bg-zinc-100">
      {/* Banner */}
      <section className="bg-linear-to-l from-blue-600 to-black text-white mt-16">
        <div className="max-w-6xl mx-auto py-8">
          <PageTitle
            title="Lifepath students who found clarity and careers"
            subtitle="Real outcomes from learners who followed the Lifepath clarity framework."
            titleClassName="text-2xl md:text-4xl font-bold text-white mb-4"
            subtitleClassName="text-lg text-blue-100"
            containerClassName="text-center max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Cards */}
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-0">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((data) => {
            return (
              <div
                key={data.name}
                className="flex h-full flex-col border border-zinc-200 bg-white p-6"
              >
                <div className="mt-auto flex flex-col items-center gap-3">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border border-zinc-200">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-zinc-900 uppercase tracking-wide text-center">
                      {data.name}
                    </div>
                    <div className="text-sm text-zinc-600">
                      {data.role} • {data.company}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="">
                    <div className="text-xl flex items-center justify-center gap-1  text-yellow-500 tracking-[0.2em]">
                      ★★★★★
                    </div>

                    <p className="mt-4 text-lg font-semibold text-zinc-900 leading-relaxed">
                      {data.quote}
                    </p>

                    <p className="mt-3 text-sm text-zinc-700 leading-relaxed min-h-30">
                      {data.story}
                    </p>
                  </div>

                  <div className="mt-8 flex gap-4 border-t border-zinc-200 text-xs text-zinc-600 pt-2">
                    <div>
                      <div className="text-base font-semibold text-zinc-900">
                        Before
                      </div>
                      <div className="mt-1">{data.before}</div>
                    </div>
                    <div className="w-px h-full bg-zinc-200" />
                    <div>
                      <div className="text-base font-semibold text-zinc-900">
                        After
                      </div>
                      <div className="mt-1">{data.after}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NewsletterCTA
        btnText="Join Class Today"
        title="Ready to take the next step in your career?"
        description="Enroll in our job training programs and unlock your potential."
        imageSrc="/heroImages/woman2.png"
      />
    </section>
  );
};

export default page;
