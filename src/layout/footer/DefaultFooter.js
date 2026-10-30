import { company, services, usefulLinks } from "@/src/data/pauseitive";
import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/pauseitive-logo.png"
                      alt="Pauseitive Tech"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                {company.social.map((s) => (
                  <a key={s.label} href={s.href}>
                    <i className={s.icon} /> <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <img
                  src="assets/images/footer/lets-work.png"
                  alt="Let's Work Together"
                />
                <span>Let’s Work Together</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href={`mailto:${company.email}`}
                >
                  {company.email} <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href={company.phoneHref}
                >
                  {company.phone} <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Quick Links
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/events">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/career">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <ul className="list-style-two wow fadeInUp delay-0-4s animated">
                  {services.slice(0, 3).map((s) => (
                    <li key={s.title}>
                      <Link legacyBehavior href="/services">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  {usefulLinks.slice(0, 2).map((l) => (
                    <li key={l.title}>
                      <Link legacyBehavior href={l.href}>
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">
                <ul>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright @{new Date().getFullYear()},{" "}
                  <Link legacyBehavior href="/">
                    <a>Pauseitive Tech</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
