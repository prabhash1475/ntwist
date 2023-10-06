import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={scrolled ? "Header-Scroll" : "Header"}>
      <div className="Header-Main">
        <div>
          <img
            className="Logo"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
            alt="logo"
          />
        </div>
        <div className="Header-Main-2">
          <div>Home</div>
          <div>Industries</div>
          <div>AI Software</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
