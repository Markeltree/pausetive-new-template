import Marquee from "@/src/components/pauseitive/Marquee";
import Testimonials from "@/src/components/pauseitive/Testimonials";
import { services, servicesIntro } from "@/src/data/pauseitive";
import { serviceHref } from "@/src/data/serviceDetails";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const steps = ["Discovery", "Strategy", "Execution", "Launch"];

const Services = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(/assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                End To End Solutions
                <img
                  className="mxw-10 leaf"
                  src="/assets/images/banner/leaf.png"
                  alt="Leaf"
                />
                For Your Need
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our Services</span>
                <p>{servicesIntro[0]}</p>
              </div>
            </div>
          </div>
          <div className="row gap-130">
            {services.map((s, i) => (
              <div className="col-md-6" key={s.title}>
                <div
                  className={`feature-item-three wow fadeInUp delay-0-${
                    2 + (i % 2) * 2
                  }s`}
                >
                  <div className="top-part">
                    <span className="serial-number">0{i + 1}</span>
                    <Link legacyBehavior href={s.slug ? serviceHref(s.slug) : "/contact"}>
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href={s.slug ? serviceHref(s.slug) : "/contact"}>
                        <a>{s.title}</a>
                      </Link>
                    </h4>
                    <p>{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
      <Marquee />
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work Process</span>
                <h2>Method To The Creativity</h2>
              </div>
            </div>
          </div>
          <div className="row gap-70">
            {steps.map((title, i) => (
              <div className="col-xl-3 col-md-6" key={title}>
                <div
                  className={`work-step-item style-two ${
                    i % 2 ? "" : "mt-60"
                  } wow ${i % 2 ? "fadeInUp" : "fadeInDown"} delay-0-2s`}
                >
                  <span className="step-number">Step 0{i + 1}</span>
                  <h4 className="title">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      <Testimonials />
    </Layout>
  );
};
export default Services;
