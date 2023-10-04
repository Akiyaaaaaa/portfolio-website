import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrapper } from "../../wrapper";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div id="home-container" className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <h2 className="head-text">Hi, I&apos;m Zadid.</h2>
            <p>
              A fullstuuuuuuck developer. <br />
              Bringing your ideas to life through code.
            </p>
            {/* button goes here */}
            <button
              type="button"
              onClick={() => (window.location.href = "#about")}
            >
              Explore more
            </button>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Header, "home");
