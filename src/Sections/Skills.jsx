import { FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiSolana, SiSupabase } from "react-icons/si";
import { TbDatabase, TbLayersIntersect } from "react-icons/tb";
import { motion as Motion } from "framer-motion";

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build fast, modern websites and web apps that work smoothly on any device.",
    featured: true,
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "UI Implementation",
    description:
      "I turn designs into real, working websites that look exactly as intended  down to the smallest detail.",
    featured: false,
    icon: <MdDesignServices />,
  },
  {
    id: 3,
    title: "CMS Integration",
    description:
      "I set things up so clients can update their own website content no coding needed on their end.",
    featured: false,
    icon: <TbDatabase />,
  },
  {
    id: 4,
    title: "State & Data Management",
    description:
      "I make sure data flows correctly through an app, so everything stays fast, accurate, and in sync.",
    featured: false,
    icon: <TbLayersIntersect />,
  },
  {
    id: 5,
    title: "Backend & Database",
    description:
      "I handle logins, user accounts, and secure data storage behind the scenes.",
    featured: false,
    icon: <SiSupabase />,
  },
  {
    id: 6,
    title: "Web3 & Blockchain",
    description:
      "I build crypto and blockchain-based websites  including wallet tools, token pages, and community platforms.",
    featured: false,
    icon: <SiSolana />,
  },
];
function Skills() {
  const baseCard =
    "relative flex p-4 flex-col gap-4 items-center justify-center border rounded-md mb-4 transition-colors duration-300 before:absolute before:inset-0 before:top-full before:z-[-1] before:transition-all before:duration-300 hover:before:-translate-y-full active:before:-translate-y-full";

  const featuredCard =
    "bg-primary-light text-bg hover:bg-textColor hover:text-bg active:bg-textColor active:text-bg before:bg-bg";

  const defaultCard =
    "hover:text-bg hover:bg-primary-light active:text-bg active:bg-primary-light before:bg-textColor";

  return (
    <section className="pt-5 md:pt-32 px-5 md:px-25 bg-textColor pb-20">
      <h2 className="font-semibold text-2xl text-center leading-12.5 underline underline-offset-4 mb-10">
        I SPECIALIZE IN A RANGE OF SKILLS, THAT YOU NEED FOR YOUR SERVICES.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
        {skills.map((skill, index) => (
          <Motion.div
            key={skill.id}
            className={`${baseCard} ${skill.featured ? featuredCard : defaultCard}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="text-4xl">{skill.icon}</span>
            <span className="font-semibold">{skill.title}</span>
            <p className="text-center">{skill.description}</p>
          </Motion.div>
        ))}
        `
      </div>
    </section>
  );
}

export default Skills;
