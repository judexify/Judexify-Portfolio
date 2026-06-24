import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projects } from "../data";

function MyProjects() {
  const navigate = useNavigate();

  return (
    <section className='pt-5 md:pt-32 px-5 md:px-25 bg-textColor pb-20 flex flex-col items-center'>
      <h2 className='text-2xl leading-12.5 underline underline-offset-4 mb-10 text-center font-bold w-full'>
        HERE's A SNEAK OF EXCITING PROJECTS I'VE DONE.
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12'>
        {projects.slice(0, 2).map((project, index) => (
          <Motion.div
            key={project.uid}
            className='border border-gray-200 rounded-xl overflow-hidden flex flex-col'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className='w-full h-52 overflow-hidden'>
              <img
                src={project.image}
                alt={project.alt}
                className='w-full h-full object-cover'
              />
            </div>

            <div className='p-4 flex flex-col gap-3 flex-1'>
              <span className='text-xs font-semibold text-primary tracking-widest'>
                {project.category}
              </span>

              <p className='text-sm text-bg leading-6'>{project.description}</p>

              <div className='flex gap-2 flex-wrap'>
                {project.tag.map((t) => (
                  <span
                    key={t}
                    className='text-xs border border-bg text-bg px-3 py-1 rounded-full'
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className='flex items-center gap-2 mt-auto pt-2'>
                <span className='text-sm font-medium text-bg'>
                  View Project
                </span>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-sm transition-colors ${
                    project.latest
                      ? "bg-primary text-bg border-primary"
                      : "border-bg text-bg"
                  }`}
                >
                  &rarr;
                </a>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>

      <button
        onClick={() => navigate("/my-project")}
        className='bg-primary px-4 py-2 rounded-4xl flex gap-6 items-center'
      >
        <span className='text-base font-semibold'>View All Projects</span>
        <span className='bg-textColor rounded-full p-2 text-xl flex items-center justify-center'>
          &rarr;
        </span>
      </button>
    </section>
  );
}

export default MyProjects;
