import { motion as Motion } from "framer-motion";
import FooterHead from "../Components/FooterHead";
import { projects } from "../data";

function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsCard />
      <FooterHead />
    </>
  );
}

function ProjectsHero() {
  return (
    <Motion.section
      className='pt-20 md:pt-32 px-5 md:px-25 bg-bg pb-20 flex flex-col gap-4'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className='font-bold text-5xl md:text-7xl text-textColor'>
        My Projects
      </h1>
      <p className='text-textColor-muted text-base md:text-lg max-w-xl leading-7'>
        A curated collection of real-world projects from NGO websites and hotel
        menus to dashboards{" "}
        <span className='font-semibold text-primary'>
          (not limited to that).{" "}
        </span>
        Each one built with attention to performance, clean code, and user
        experience.
      </p>
    </Motion.section>
  );
}

function ProjectsCard() {
  return (
    <section className='pt-5 mt-15 md:pt-32 px-5 md:px-25 bg-textColor pb-20 flex flex-col items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12'>
        {projects.map((project, index) => (
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
    </section>
  );
}

export default Projects;
