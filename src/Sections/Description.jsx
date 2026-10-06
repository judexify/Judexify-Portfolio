import { motion as Motion } from "framer-motion";

function Description() {
  return (
    <Motion.section
      className="pt-20 md:pt-32 px-5 md:px-25 bg-textColor pb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <span className="text-[120px] md:text-[180px] leading-none text-primary font-serif block">
        "
      </span>

      <p className="mb-8">
        I’m{" "}
        <span className="text-primary font-semibold">
          JUDE OLUWADUNSI (JUDEXIFY)
        </span>
        , and I help{" "}
        <span className="text-primary font-semibold">businesses</span>,{" "}
        <span className="text-primary font-semibold">organizations</span>, and{" "}
        <span className="text-primary font-semibold">founders</span> build an
        online presence that works for their business. Not just a website that
        looks good, but one that clearly communicates what they do, builds
        trust, and makes it easier for people to take action.
      </p>

      <hr className="border-primary mb-8" />

      <p className="mb-8">
        I also believe a website should not become a problem the moment it goes
        live. That’s why I build websites that businesses can actually keep{" "}
        <span className="text-primary font-semibold">updating</span> and
        managing, without having to call a developer every time something
        changes.
      </p>

      <hr className="border-primary mb-8" />

      <p className="mb-8">
        And when a business needs more than a website, I can build the systems
        behind it too:{" "}
        <span className="text-primary font-semibold">booking flows</span>,{" "}
        <span className="text-primary font-semibold">dashboards</span>,{" "}
        <span className="text-primary font-semibold">databases</span>, and{" "}
        <span className="text-primary font-semibold">
          connected web systems
        </span>
        . The goal is simple: use technology to make the business easier to
        understand, easier to operate, and easier to grow.
      </p>

      <span className="text-[120px] md:text-[180px] leading-none text-primary font-serif block text-right">
        "
      </span>
    </Motion.section>
  );
}

export default Description;
