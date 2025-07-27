import { TiSpanner } from "react-icons/ti";
import { AboutIconsContainer } from "../components";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-130px)]">
      <h2 className="text-center text-3xl mt-4">
        About <span className="text-indigo-800">Boardgames</span>
      </h2>
      <div className="flex flex-col w-full px-10">
        <section className="w-full">
          <h3 className="text-2xl">What is Boardgames?</h3>
          <p className="font-mono mt-1">
            <span className="text-indigo-800">Boardgames</span> is a nothing
            more and nothing less than a portfolio project to showcase React
            technologies. It is a static website that emulates a dynamic web
            application, but without a database or backend connection. As such,
            all changes made to any of its content is transient and will
            disappear on refresh.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="text-2xl">How does it do that?</h3>
          <p className="font-mono mt-1">
            <span className="text-indigo-800">Boardgames</span> uses the
            following technologies to give the appearance of a complete web
            application:
          </p>
          <div className="w-full flex justify-center items-center">
            <ul className="font-mono mt-2 w-[80%]">
              <li className="mt-2">
                <TiSpanner className="inline" />{" "}
                <span className="font-bold">Database</span> - Boardgames uses a
                JSON file as its database. I have populated it with some of my
                favourite boardgames so that there is some content in it after
                accessing and refreshing the page.
              </li>
              <li className="mt-2">
                <TiSpanner className="inline" />{" "}
                <span className="font-bold">Routing</span> - Boardgames uses
                react-router instead of backend router (such as Express)
              </li>
              <li className="mt-2">
                <TiSpanner className="inline" />{" "}
                <span className="font-bold">Authentication</span> - Boardgames
                implements a complete authentication workflow, complete with
                protected routes. There is even a registration process that
                utilises bcryptfs to hash and compare passwords. This might not
                make a lot of sense in a static website, but I wanted to
                simulate the complete workflow, hashes and all. A second JSON
                file contains user data. I have a test user in it, but I
                encourage you to create and use your own! Instead of a JWT or
                symilar, Boardgames uses context to store logged in user
                information.
              </li>
              <li className="mt-2">
                <TiSpanner className="inline" />{" "}
                <span className="font-bold">Error handling</span> - Boardgames
                leverages react-router's error handling for this purpose.
              </li>
              <li className="mt2">
                <TiSpanner className="inline" />{" "}
                <span className="font-bold">Notifications</span> - Boardgames
                uses react-toastify to notify the user of successful and
                unsuccessful actions. Notifications can be sent to different
                pages using react-router's useLocation() hook. This manages
                redirects gracefully.
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full mt-5">
          <AboutIconsContainer />
        </section>
      </div>
    </div>
  );
};
export default About;
