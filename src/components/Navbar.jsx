import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // ปิดเมนูทุกครั้งที่เปลี่ยนหน้า/section
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  function goToSection(hash) {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="navbar fixed-top site-nav">
      <div className="container-fluid px-4 site-nav__container">
        <Link className="navbar-brand site-nav__brand" to="/">
          PORTFOLIO
        </Link>

        <button
          type="button"
          className="navbar-toggler site-nav__toggler"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse site-nav__collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav site-nav__links">
            <li className="nav-item">
              <Link className="nav-link site-nav__link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link site-nav__link"
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("#portfolio");
                }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link site-nav__link"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("#contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
