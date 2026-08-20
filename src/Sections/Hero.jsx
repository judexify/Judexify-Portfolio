import { MdWavingHand } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

const socials = [
  { socialName: "tw", link: "https://x.com/judexify" },
  // { socialName: "ln", link: "https://linkedIn.com/jude-oluwadunsi" },
  {
    socialName: "tk",
    link: "https://tiktok.com/@judexify?_r=1&_t=ZS-97YI2WFQ1vW",
  },
];

function useTypewriter(text, speed = 50, delay = 0) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return displayed;
}

function Hero() {
  const navigate = useNavigate();

  const typed1 = useTypewriter("FRONTEND DEV.", 80);
  const typed2 = useTypewriter("🔥Crafting Fast, Clean", 80, 1400);
  const typed3 = useTypewriter("BEAUTIFUL UI's.", 80, 3200);

  return (
    <section className="pt-20 md:pt-32 px-5 md:px-25 bg-bg pb-20">
      <Motion.div
        className="w-64 h-72 bg-primary rounded-2xl overflow-hidden mx-auto mb-4 rotate-3"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/pfp-r.png"
          className="w-full h-full object-cover scale-125"
        />
      </Motion.div>

      {/* Socials */}
      <div className="flex flex-col items-center mb-8">
        <span className="font-semibold text-textColor mb-2">
          Follow Me || Contact Me
        </span>
        <div className="flex gap-5">
          {socials.map((social, index) => (
            <Motion.a
              key={social.socialName}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-current text-textColor text-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {social.socialName}
            </Motion.a>
          ))}
        </div>
      </div>

      <div className="leading-[1.1] mb-4">
        <span className="text-[48px] md:text-[72px] lg:text-[100px] text-left font-semibold block text-textColor">
          {typed1}
        </span>
        <br />
        <span className="text-[48px] md:text-[72px] lg:text-[100px] text-right font-semibold uppercase block text-textColor">
          {typed2}
        </span>
        <br />
        <span className="text-[48px] md:text-[72px] lg:text-[85px] text-left font-semibold block text-textColor">
          {typed3}
        </span>
      </div>

      <Motion.p
        className="text-xl/7 mb-7 text-textColor w-full md:w-108"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a frontend developer who loves building clean, fast, and
        user-friendly web experiences — from landing pages to full-scale apps.
      </Motion.p>

      <Motion.div
        className="flex items-center gap-9"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => navigate("/contact-me")}
          className="flex items-center justify-center px-2 py-1 md:py-3.5 md:px-5 gap-2 bg-primary rounded-4xl"
        >
          <span className="bg-textColor flex items-center justify-center p-1 rounded-4xl">
            <MdWavingHand size={24} />
          </span>
          <span className="font-semibold">Let's Talk</span>
        </button>
        <div className="flex items-center cursor-pointer">
          <button className="bg-primary p-2 rounded-[50%] h-10 w-10 flex items-center justify-center -mr-3 z-3">
            &rarr;
          </button>
          <div className="h-10 w-10 border border-textColor rounded-[50%] z-0"></div>
          <span className="ml-3 text-textColor">
            <Link to="/my-project">View My Projects</Link>
          </span>
        </div>
      </Motion.div>
    </section>
  );
}

export default Hero;
