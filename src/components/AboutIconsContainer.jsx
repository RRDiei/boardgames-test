import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router";

const AboutIconsContainer = () => {
  return (
    <div className="flex justify-around">
      <Link to="https://react.dev/">
        <FaReact className="text-9xl text-[rgb(8,126,164)]" />
      </Link>
      <Link to="https://tailwindcss.com/">
        <RiTailwindCssFill className="text-9xl text-blue-300" />
      </Link>
      <Link to="https://ecma-international.org/publications-and-standards/standards/ecma-262/">
        <IoLogoJavascript className="text-9xl text-yellow-400" />
      </Link>
      <Link to="https://html.spec.whatwg.org/multipage/">
        <FaHtml5 className="text-9xl text-orange-600" />
      </Link>
      <Link to="https://www.w3.org/Style/CSS/specs.en.html">
        <FaCss3 className="text-9xl text-blue-600" />
      </Link>
    </div>
  );
};
export default AboutIconsContainer;
