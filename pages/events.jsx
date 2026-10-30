import PageBanner from "@/src/components/PageBanner";
import Sidebar from "@/src/components/pauseitive/Sidebar";
import { events } from "@/src/data/pauseitive";
import Layout from "@/src/layout/Layout";

const Events = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Events"} />
      {/* Page Banner End */}
      {/* Blog Standard Page Area start */}
      <section className="blog-standard-page py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-60">
            <div className="col-lg-8">
              {events.map((e) => (
                <div
                  className="blog-item blog-standard wow fadeInUp delay-0-2s"
                  key={e.title}
                >
                  <div className="image">
                    <img src={e.image} alt={e.title} />
                  </div>
                  <ul className="blog-meta">
                    <li>
                      <i className="fal fa-user-alt" />
                      <a href="#">admin</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">{e.date}</a>
                    </li>
                  </ul>
                  <h3>{e.title}</h3>
                  <p>{e.text}…</p>
                  <a className="read-more" href="#">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <Sidebar recent={events} recentHref="/events" />
            </div>
          </div>
        </div>
      </section>
      {/* Blog Standard Page Area end */}
    </Layout>
  );
};
export default Events;
