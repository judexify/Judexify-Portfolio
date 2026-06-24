import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FooterHead from "../Components/FooterHead";

const contacts = [
  {
    uid: 1,
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "@jude-oluwadunsi",
    link: "https://linkedin.com/in/jude-oluwadunsi",
    description: "Let's connect professionally",
  },
  {
    uid: 2,
    icon: FaXTwitter,
    label: "X (Twitter)",
    handle: "@judexify",
    link: "https://x.com/judexify",
    description: "Follow my dev journey and thoughts",
  },
  {
    uid: 3,
    icon: FaGithub,
    label: "GitHub",
    handle: "@judexify",
    link: "https://github.com/judexify",
    description: "See what I'm currently building",
  },
  {
    uid: 4,
    icon: FaWhatsapp,
    label: "WhatsApp",
    handle: "+234 70 8514 9889",
    link: "https://wa.me/2347085149889",
    description: "Quickest way to reach me",
  },
  {
    uid: 5,
    icon: MdEmail,
    label: "Email",
    handle: "judexify1@gmail.com",
    link: "mailto:judexify1@gmail.com",
    description: "Prefer email? I check it daily",
  },
];

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactCards />
    </>
  );
}

function ContactHero() {
  return (
    <Motion.section
      className='pt-20 md:pt-32 px-5 md:px-25 bg-bg pb-20 flex flex-col gap-4'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className='font-bold text-5xl md:text-7xl text-textColor'>
        Contact Me
      </h1>
      <p className='text-textColor-muted text-base md:text-lg max-w-xl leading-7'>
        Pick a platform you're comfortable with and say hi ,{" "}
        <span className='font-semibold text-primary'>
          I'm currently open to new projects.
        </span>
      </p>
    </Motion.section>
  );
}

function ContactCards() {
  return (
    <section className='pt-5 mt-15 md:pt-32 px-5 md:px-25 bg-textColor pb-20 flex flex-col items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12'>
        {contacts.map((contact, index) => (
          <Motion.a
            key={contact.uid}
            href={contact.link}
            target='_blank'
            rel='noopener noreferrer'
            className='border border-gray-200 rounded-xl p-6 flex items-center gap-5 hover:border-primary transition-colors'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className='text-4xl text-primary'>
              <contact.icon />
            </span>
            <div className='flex flex-col gap-1'>
              <span className='text-xs font-semibold text-primary tracking-widest'>
                {contact.label}
              </span>
              <span className='text-sm font-bold text-bg'>
                {contact.handle}
              </span>
              <p className='text-sm text-bg leading-6'>{contact.description}</p>
            </div>
            <span className='ml-auto text-bg text-xl'>&rarr;</span>
          </Motion.a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
