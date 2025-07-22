const About = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-3xl mt-4">
        About <span className="text-indigo-800">Boardgames</span>
      </h2>
      <section className="w-full">
        <h3 className="text-2xl">What is Boardgames?</h3>
        <p className="font-mono mt-1">
          <span className="text-indigo-800">Boardgames</span> is a React demo
          website. It is a static website created with{" "}
          <a className="underline" href="https://react.dev/">
            React
          </a>{" "}
          that showcases the functionality of what a complete, dynamic website
          would do, only using React technology without an actual API running in
          the background.
        </p>
      </section>
    </div>
  );
};
export default About;
