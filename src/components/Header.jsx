import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks, PHONE, BUSINESS_NAME } from '../data/content';
import WhatsAppLink from './WhatsAppLink';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isHashLink = (path) => path.startsWith('/#');

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__top">
        <div className="container header__top-inner">
          <span>Free quote — no obligation</span>
          <WhatsAppLink className="header__phone" iconSize={16}>
            WhatsApp {PHONE}
          </WhatsAppLink>
        </div>
      </div>

      <div className="container header__main">
        <Link to="/" className="header__logo">
          <img
            src="/bcr-logo.png"
            alt="BCR Birmingham Clutch Repair logo"
            className="header__logo-img"
          />
          <div>
            <strong>{BUSINESS_NAME}</strong>
            <span>Birmingham, UK</span>
          </div>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="header__dropdown"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="header__nav-link"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
                <ul
                  className={`header__dropdown-menu ${
                    openDropdown === item.label ? 'header__dropdown-menu--open' : ''
                  }`}
                >
                  {item.children.map((child) =>
                    isHashLink(child.path) ? (
                      <li key={child.path}>
                        <a href={child.path}>{child.label}</a>
                      </li>
                    ) : (
                      <li key={child.path}>
                        <Link to={child.path}>{child.label}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : isHashLink(item.path) ? (
              <a key={item.path} href={item.path} className="header__nav-link">
                {item.label}
              </a>
            ) : (
              <Link key={item.path} to={item.path} className="header__nav-link">
                {item.label}
              </Link>
            )
          )}
          <WhatsAppLink className="btn btn-primary header__cta-mobile">
            WhatsApp Now
          </WhatsAppLink>
        </nav>

        <WhatsAppLink className="btn btn-primary header__cta-desktop">
          {PHONE}
        </WhatsAppLink>

        <button
          type="button"
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
