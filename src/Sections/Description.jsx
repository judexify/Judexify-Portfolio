import { motion as Motion } from "framer-motion";

function Description() {
  return (
    <Motion.section
      className='pt-20 md:pt-32 px-5 md:px-25 bg-textColor pb-20'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <span className='text-[120px] md:text-[180px] leading-none text-primary font-serif block'>
        "
      </span>

      <p className='mb-8'>
        Hello, I'm{" "}
        <span className='text-primary font-semibold'>
          JUDE OLUWADUNSI - (JUDEXIFY)
        </span>
        , a digital product builder focused on helping{" "}
        <span className='text-primary font-semibold'>businesses</span>,{" "}
        <span className='text-primary font-semibold'>organizations</span>, and{" "}
        <span className='text-primary font-semibold'>founders</span> create
        useful online systems. The goal is not just a good-looking page. It is a
        website or product that explains the business clearly, earns trust, and
        helps people take the next step.
      </p>

      <hr className='border-primary mb-8' />

      <p className='mb-8'>
        I start by understanding what the business needs to improve: more
        credible presentation, clearer customer information, easier bookings,
        better content updates, smoother operations, or a workflow that should
        not stay trapped in chats and spreadsheets.
      </p>

      <hr className='border-primary mb-8' />

      <p className='mb-8'>
        Whether it is a{" "}
        <span className='text-primary font-semibold'>business website</span>,{" "}
        <span className='text-primary font-semibold'>organization website</span>,{" "}
        <span className='text-primary font-semibold'>booking flow</span>, or{" "}
        <span className='text-primary font-semibold'>custom web system</span>, I
        care about making it clear, practical, trustworthy, and easy for real
        people to use.
      </p>

      <span className='text-[120px] md:text-[180px] leading-none text-primary font-serif block text-right'>
        "
      </span>
    </Motion.section>
  );
}

export default Description;
