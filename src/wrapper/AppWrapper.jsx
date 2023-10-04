import { NavDots, SocMed } from "../components";

const AppWrapper = (Component, idName, className) =>
  function HighComponent() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <SocMed />

        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2020 BENTO</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavDots active={idName} />
      </div>
    );
  };
export default AppWrapper;
