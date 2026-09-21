import { motion as Motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiSanity,
  SiReactquery,
  SiRedux,
  SiSupabase,
  SiSolana,
} from "react-icons/si";
import { TbLayersIntersect } from "react-icons/tb";

const tools = [
  { name: "Business Websites", icon: <FaReact /> },
  { name: "Booking Systems", icon: <RiNextjsFill /> },
  { name: "Customer Portals", icon: <SiTypescript /> },
  { name: "Internal Dashboards", icon: <SiJavascript /> },
  { name: "Content Management", icon: <SiVite /> },
  { name: "Donation Flows", icon: <SiTailwindcss /> },
  { name: "Digital Menus", icon: <SiHtml5 /> },
  { name: "Service Pages", icon: <FaCss3 /> },
  { name: "Team Updates", icon: <SiSanity /> },
  { name: "Data Sync", icon: <SiReactquery /> },
  { name: "Customer Records", icon: <SiRedux /> },
  { name: "Workflow Tools", icon: <TbLayersIntersect /> },
  { name: "Secure Access", icon: <SiSupabase /> },
  { name: "Automation Ideas", icon: <SiSolana /> },
];

const rowOne = tools.slice(0, 7);
const rowTwo = tools.slice(7);

function MarqueeRow({ items, direction, speed }) {
  const looped = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <Motion.div
        className="flex gap-10 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {looped.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-textColor/10 bg-white/5 whitespace-nowrap"
          >
            <span className="text-2xl text-textColor">{tool.icon}</span>
            <span className="text-textColor font-medium">{tool.name}</span>
          </div>
        ))}
      </Motion.div>
    </div>
  );
}

function ToolsMarquee() {
  return (
    <section className="bg-bg mb-10 py-20 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-textColor underline underline-offset-4 text-center mb-10">
        DIGITAL SYSTEMS YOUR BUSINESS CAN USE
      </h2>

      <MarqueeRow items={rowOne} direction="left" speed={28} />
      <MarqueeRow items={rowTwo} direction="right" speed={24} />
    </section>
  );
}
export default ToolsMarquee;
