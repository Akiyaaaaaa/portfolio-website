import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const SocMed = () => {
  return (
    <>
      <div className="app__social">
        <div>
          <a
            href="https://github.com/Akiyaaaaaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href="https://instagram.com/kasuur.ruusak?igshid=YTQwZjQ0NmI0OA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/zadid-taqwa-21a755170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default SocMed;
