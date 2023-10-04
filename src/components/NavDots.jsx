const NavDots = ({ active }) => {
  return (
    <>
      <div className="app__navigation">
        {["home", "about", "work", "skills", "contact"].map(
          (navLink, index) => (
            <a
              href={`#${navLink}`}
              key={navLink + index}
              className="app__navigation-dot"
              style={active === navLink ? { backgroundColor: "#313bac" } : {}}
            />
          )
        )}
      </div>
    </>
  );
};
export default NavDots;
