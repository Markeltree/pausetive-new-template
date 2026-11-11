import Marquee from "@/src/components/pauseitive/Marquee";
import Testimonials from "@/src/components/pauseitive/Testimonials";
import { company, leader, services, technologies, values } from "@/src/data/pauseitive";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const valueIcons = [
  "flaticon-creativity",
  "flaticon-mobile-banking",
  "flaticon-optimization-1",
];

const About = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(/assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero-title pt-wide-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Your Go-To Platform
                <img
                  className="mxw-20"
                  src="/assets/images/banner/inside-title1.png"
                  alt="title"
                />
                <img
                  className="mxw-40"
                  src="/assets/images/banner/inside-title2.png"
                  alt="title"
                />
                For Digital Solutions
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="/assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            <img
              src="/assets/images/pauseitive/about-team.jpg"
              alt="Pauseitive Tech team"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
                At Pauseitive Tech, we’re more than just developers; we’re
                pioneers at the intersection of education and technology. Our
                core values are subjected to bring the finest solutions to our
                clients and revolutionize the EdTech industry. Since pure
                passion is on our side, our team is eager and enthusiastic to
                uplift new norms and elevate the technological benchmarks.
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                617+
                <img
                  className="leaf-shape"
                  src="/assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our Values</span>
                <h2>Empowering Progress Through Technology</h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            {values.map((v, i) => (
              <div className="col-lg-4 col-md-6" key={v.title}>
                <div
                  className={`why-choose-item style-two wow fadeInUp delay-0-${
                    2 + i * 2
                  }s`}
                >
                  <div className="why-choose-header">
                    <i className={valueIcons[i]} />
                    <h5>{v.title}</h5>
                  </div>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      <Marquee />
      {/* Team Area start */}
      <section className="team-area pt-130 rpt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Meet Our Leader</span>
                <h2>The Visionary Mind Behind Pauseitive Tech</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="/assets/images/pauseitive/kim-5.jpg"
                    alt={leader.name}
                  />
                </div>
                <div className="content">
                  <h4>{leader.name}</h4>
                  <span>CEO &amp; Founder</span>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      <span>Her Journey</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    {company.social.map((s) => (
                      <a key={s.label} href={s.href}>
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content wow fadeInUp delay-0-4s">
                {leader.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Statistics Area start */}
      <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(/assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={617} />
                <span className="counter-title">Happy Clients</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={services.length} />
                <span className="counter-title">Core Services</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={technologies.length} />
                <span className="counter-title">Mobile Technologies</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={24} />
                <span className="counter-title">Hours Support (24/7)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      <Testimonials className="pt-70 rpt-30 pb-130 rpb-100" />
    </Layout>
  );
};
export default About;
