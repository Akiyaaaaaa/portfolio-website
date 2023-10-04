import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocMed = () => {
  return (
    <>
      <div className="app__social">
        <div>
          <BsGithub />
        </div>
        <div>
          <BsInstagram />
        </div>
        <div>
          <FaFacebookF />
        </div>
      </div>
    </>
  );
};

export default SocMed;
