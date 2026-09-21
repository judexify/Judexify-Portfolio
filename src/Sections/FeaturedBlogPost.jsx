import { Link, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

function FeaturedBlogPost() {
  const navigate = useNavigate();

  return (
    <Motion.section
      className="pt-5 md:pt-32 px-5 md:px-25 bg-bg pb-20 flex flex-col gap-8 items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-textColor underline underline-offset-4">
        LATEST THINKING
      </h2>

      <div className="border border-primary rounded-xl p-6 flex flex-col gap-4 relative">
        <div className="flex items-center gap-3 text-sm text-textColor-muted">
          <span className="font-semibold text-primary">Judexify</span>
          <span>·</span>
          <span>24 June 2026</span>
        </div>

        <span className="text-xl font-bold text-textColor">
          Why I Think Beyond "Just a Website"
        </span>

        <div className="relative h-28 overflow-hidden">
          <p className="text-sm text-textColor leading-6">
            A business website should not only look presentable. It should make
            the offer clearer, reduce repeated questions, help customers take
            action, and connect to the way the business actually works. That is
            the direction I am building toward with JUDEXIFY.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-bg to-transparent" />
        </div>

        <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">
          <Link to="/blog"> Read More →</Link>
        </span>
      </div>

      <button
        onClick={() => navigate("/blog")}
        className="bg-primary px-3 py-1 rounded-4xl flex gap-6 items-center self-center"
      >
        <span className="text-sm font-semibold">
          <Link to="/blog">View More Notes</Link>
        </span>
        <span className="bg-textColor rounded-full p-1 text-xl flex items-center justify-center">
          &rarr;
        </span>
      </button>
    </Motion.section>
  );
}

export default FeaturedBlogPost;
