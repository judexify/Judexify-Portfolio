import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { motion as Motion } from "framer-motion";

const testimonials = [
  {
    uid: 1,
    image: "/testimonials/yhihe-proof.jpeg",
    name: "YHIHE Team",
    role: "NGO — Young Historians",
    description:
      "Delivered exactly what we envisioned. The website is clean, fast, and easy to update through the CMS.",
  },
  {
    uid: 2,
    image: "/testimonials/feliza-proof.png",
    name: "Feliza Hotel",
    role: "Hospitality — Feliza Hotel & Suites",
    description:
      "The digital menu made a huge difference for our guests. Simple, elegant, and works perfectly.",
  },
];

function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Motion.section
      className='pt-5 md:pt-32 px-5 md:px-25 bg-textColor pb-20'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className='text-2xl font-bold text-bg underline underline-offset-4 mb-10'>
        DON'T JUST TAKE MY 😊 WORD FOR IT.
      </h2>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {testimonials.map((t) => (
            <div
              key={t.uid}
              className='flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] px-4'
            >
              <div className='border border-primary rounded-xl p-6 flex flex-col gap-4'>
                <div
                  className='w-full h-48 rounded-lg overflow-hidden cursor-pointer'
                  onClick={() => setSelectedImage(t.image)}
                >
                  <img
                    src={t.image}
                    alt={`Testimonial proof from ${t.name}`}
                    className='w-full h-full object-cover'
                  />
                </div>

                <p className='text-sm text-bg leading-6 italic'>
                  "{t.description}"
                </p>

                <div className='flex flex-col gap-0.5'>
                  <span className='font-bold text-bg'>{t.name}</span>
                  <span className='text-xs text-bg opacity-60'>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-4 mt-8'>
        <button
          onClick={scrollPrev}
          className='w-10 h-10 rounded-full border border-bg text-bg flex items-center justify-center hover:bg-primary hover:border-primary transition-colors'
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className='w-10 h-10 rounded-full bg-primary text-bg flex items-center justify-center hover:bg-primary-dark transition-colors'
        >
          →
        </button>
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5'
          onClick={() => setSelectedImage(null)}
        >
          <div className='max-w-lg w-full rounded-xl overflow-hidden'>
            <img
              src={selectedImage}
              alt='Testimonial proof'
              className='w-full object-contain'
            />
          </div>
        </div>
      )}
    </Motion.section>
  );
}

export default Testimonials;
