import { blogPosts, galleryImages, leader, services } from "@/src/data/pauseitive";
import Link from "next/link";

const Sidebar = ({ recent = blogPosts.slice(0, 3), recentHref = "/blog-details" }) => {
  return (
    <div className="main-sidebar rmt-75">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="default-search-form"
        >
          <input type="text" placeholder="Search..." required />
          <button type="submit" className="searchbutton far fa-search" />
        </form>
      </div>
      <div className="widget widget-author wow fadeInUp delay-0-4s">
        <img src={leader.avatar} alt={leader.name} />
        <h5>{leader.name}</h5>
        <p>CEO &amp; Founder of Pauseitive Tech</p>
      </div>
      <div className="widget widget-category wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Category</h4>
        <ul>
          {services.map((s) => (
            <li key={s.title}>
              <Link legacyBehavior href="/services">
                <a>{s.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Recent News</h4>
        <ul>
          {recent.map((p) => (
            <li key={p.title}>
              <div className="image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="content">
                <h5>
                  <Link legacyBehavior href={recentHref}>
                    <a>{p.title}</a>
                  </Link>
                </h5>
                <span className="date">
                  <i className="far fa-calendar-alt" />
                  <span>{p.date}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-gallery wow fadeInUp delay-0-2s">
        <h4 className="widget-title">Gallery</h4>
        <div className="gallery">
          {galleryImages.map((src) => (
            <Link legacyBehavior href="/" key={src}>
              <a>
                <img src={src} alt="Gallery" />
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
