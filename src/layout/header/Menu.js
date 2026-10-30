import { mainMenu } from "@/src/data/pauseitive";
import { servicesMenu } from "@/src/data/serviceDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const useActive = () => {
  const { pathname } = useRouter();
  return (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        (href === "/services" && pathname === "/service-details");
};

const MegaMenu = () => (
  <div className="mega-menu">
    <div className="mega-menu-main">
      <h6 className="mega-menu-heading">Services</h6>
      <div className="mega-menu-cols">
        {servicesMenu.groups.map((group) => (
          <div className="mega-menu-col" key={group.title}>
            <span className="mega-menu-title">{group.title}</span>
            <ul>
              {group.links.map((l) => (
                <li key={l.title}>
                  <Link legacyBehavior href={l.href}>
                    <a>{l.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="mega-menu-side">
      <h6 className="mega-menu-heading">How we work</h6>
      <ol>
        {servicesMenu.howWeWork.map((step, i) => (
          <li key={step}>
            <Link legacyBehavior href="/services">
              <a>
                <span>0{i + 1}</span> {step}
              </a>
            </Link>
          </li>
        ))}
      </ol>
      <Link legacyBehavior href="/contact">
        <a className="theme-btn style-two w-100 mt-20">
          Get Free Quote <i className="far fa-arrow-right" />
        </a>
      </Link>
    </div>
  </div>
);

const DaskTopMenu = () => {
  const isActive = useActive();
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      {mainMenu.map((item) =>
        item.title === "Services" ? (
          <li
            key={item.title}
            className={`dropdown has-mega ${
              isActive(item.href) ? "current" : ""
            }`}
          >
            <Link legacyBehavior href={item.href}>
              <a>{item.title}</a>
            </Link>
            <MegaMenu />
            <div className="dropdown-btn">
              <span className="far fa-plus" />
            </div>
          </li>
        ) : (
          <li key={item.title} className={isActive(item.href) ? "current" : ""}>
            <Link legacyBehavior href={item.href}>
              {item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      {mainMenu.map((item) =>
        item.title === "Services" ? (
          <li key={item.title} className="dropdown">
            <Link legacyBehavior href={item.href}>
              <a>{item.title}</a>
            </Link>
            <ul style={{ display: open ? "block" : "none" }}>
              {servicesMenu.groups.map((group) =>
                group.links.map((l) => (
                  <li key={group.title + l.title}>
                    <Link legacyBehavior href={l.href}>
                      {l.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
            <div className="dropdown-btn" onClick={() => setOpen(!open)}>
              <span className="far fa-plus" />
            </div>
          </li>
        ) : (
          <li key={item.title}>
            <Link legacyBehavior href={item.href}>
              {item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      {mainMenu.map((item) => (
        <li key={item.title}>
          <Link legacyBehavior href={item.href}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
