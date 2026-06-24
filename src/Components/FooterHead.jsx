import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

function FooterHead() {
  const navigate = useNavigate();

  return (
    <Motion.div
      className='bg-bg flex flex-col items-center justify-center gap-8 py-24 px-5'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h3 className='text-[48px] md:text-[72px] lg:text-[90px] font-bold text-textColor text-center leading-tight'>
        LET'S WORK
        <br />
        T
        <img
          src='/pfp.jpeg'
          alt="Judexify's image"
          className='inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover align-middle mx-1'
        />
        GETHER
      </h3>

      <button
        onClick={() => navigate("/contact-me")}
        className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center text-2xl text-bg hover:bg-primary-dark transition-colors'
      >
        ↗
      </button>
    </Motion.div>
  );
}

export default FooterHead;
