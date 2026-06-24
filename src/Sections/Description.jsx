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
        Hello! I'm{" "}
        <span className='text-primary font-semibold'>
          JUDE OLUWADUNSI - (JUDEXIFY)
        </span>
        , a passionate{" "}
        <span className='text-primary font-semibold'>Front-End Developer</span>{" "}
        focused on building modern,{" "}
        <span className='text-primary font-semibold'>responsive</span>, and{" "}
        <span className='text-primary font-semibold'>user-friendly</span> web
        experiences. I enjoy transforming ideas into functional, visually
        appealing websites that help businesses and individuals establish a
        strong online presence.
      </p>

      <hr className='border-primary mb-8' />

      <p className='mb-8'>
        With a solid foundation in{" "}
        <span className='text-primary font-semibold'>JavaScript</span>,{" "}
        <span className='text-primary font-semibold'>React</span>, and modern
        web development practices, I strive to create{" "}
        <span className='text-primary font-semibold'>clean</span>,{" "}
        <span className='text-primary font-semibold'>scalable</span>, and{" "}
        <span className='text-primary font-semibold'>accessible</span>{" "}
        interfaces that deliver real value to users. I'm constantly learning,
        improving my craft, and exploring new technologies to stay at the
        forefront of web development.
      </p>

      <hr className='border-primary mb-8' />

      <p className='mb-8'>
        Whether it's a{" "}
        <span className='text-primary font-semibold'>landing page</span>,{" "}
        <span className='text-primary font-semibold'>business website</span>,{" "}
        <span className='text-primary font-semibold'>portfolio</span>, or{" "}
        <span className='text-primary font-semibold'>web application</span>, I
        approach every project with attention to{" "}
        <span className='text-primary font-semibold'>detail</span>,{" "}
        <span className='text-primary font-semibold'>performance</span>, and{" "}
        <span className='text-primary font-semibold'>user experience</span> in
        mind.
      </p>

      <span className='text-[120px] md:text-[180px] leading-none text-primary font-serif block text-right'>
        "
      </span>
    </Motion.section>
  );
}

export default Description;
