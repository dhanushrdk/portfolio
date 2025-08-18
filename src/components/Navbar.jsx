import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>Dhanush Portfolio</a>

      {/* Desktop links + Mobile slide-out panel share the same list */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger */}
      <button
        className={`menu-toggle ${open ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Backdrop for mobile */}
      {open && <div className="backdrop" onClick={closeMenu} />}
    </nav>
  );
}
