import { motion as Motion } from "framer-motion";

const posts = [
  {
    uid: 1,
    title: "Why I Think Beyond Just a Website",
    date: "24 June 2026",
    excerpt:
      "A business website should not only look presentable. It should make the offer clearer, reduce repeated questions, help customers take action, and connect to the way the business actually works. That is the direction I am building toward with JUDEXIFY.",
  },
];

function Blog() {
  return (
    <>
      <BlogHero />
      <BlogCards />
    </>
  );
}

function BlogHero() {
  return (
    <Motion.section
      className="pt-20 md:pt-32 px-5 md:px-25 bg-bg pb-20 flex flex-col gap-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="font-bold text-5xl md:text-7xl text-textColor">Notes</h1>
      <p className="text-textColor-muted text-base md:text-lg max-w-xl leading-7">
        Thoughts on websites, products, workflows, and building useful systems
        for businesses{" "}
        <span className="font-semibold text-primary">written by Judexify.</span>
      </p>
    </Motion.section>
  );
}

function BlogCards() {
  return (
    <section className="pt-5 mt-15 md:pt-32 px-5 md:px-25 bg-textColor pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {posts.map((post, index) => (
          <Motion.div
            key={post.uid}
            className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 text-sm">
              <span className="font-semibold text-primary">Judexify</span>
              <span className="text-bg">·</span>
              <span className="text-bg">{post.date}</span>
            </div>

            <span className="text-xl font-bold text-bg">{post.title}</span>

            <div className="relative h-28 overflow-hidden">
              <p className="text-sm text-bg leading-6">{post.excerpt}</p>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-textColor to-transparent" />
            </div>

            <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">
              Read More →
            </span>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
