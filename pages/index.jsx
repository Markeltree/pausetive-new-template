import {
  blogPosts,
  company,
  leader,
  pillars,
  portfolio,
  services,
  technologies,
  testimonials,
} from "@/src/data/pauseitive";
import { serviceHref } from "@/src/data/serviceDetails";
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout dark>
      {/* Hero Section Start */}
      <section className="hero-area pt-hero pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  Better <span>Digital</span> <i>Future</i>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="/assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img
              src="/assets/images/pauseitive/about-team.jpg"
              alt="Pauseitive Tech team"
            />
            <div className="hero-social">
              {company.social.map((s) => (
                <a key={s.label} href={s.href}>
                  <i className={s.icon} /> <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="/assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  src="/assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Pauseitive Tech</span>
                  <h2>Professional &amp; Dedicated EdTech Solutions</h2>
                </div>
                <div className="content">
                  <p>
                    Get ready to experience the innovation and brilliance, with
                    the aid of advanced AI, to bring you the best EdTech
                    solutions. Harness the power in mobile app development and
                    blockchain technology with us. Let’s empower your business
                    to emerge in the digital landscape as sole champion.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      More About Us <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              End to End <span>Custom</span> Solutions
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Who We Are</span>
                  <h2>Innovating The Digital Landscape For Everyone</h2>
                </div>
                {pillars.map((p, i) => (
                  <div
                    className={`what-we-do-item wow fadeInUp delay-0-${
                      3 + i * 2
                    }s`}
                    key={p.title}
                  >
                    <div className="number">
                      <span>0{i + 1}</span>
                    </div>
                    <div className="content">
                      <h5>{p.title}</h5>
                      <p>{p.points.slice(0, 2).join(". ")}.</p>
                      <Link legacyBehavior href="/about">
                        <a className="read-more style-two">
                          <span>Read More</span>{" "}
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="/assets/images/pauseitive/about-vr.jpg"
                  alt="Unleashing possibilities in the digital world"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={617} />
                <span className="counter-title">Happy Clients</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={services.length} />
                <span className="counter-title">Core Services</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={technologies.length} />
                <span className="counter-title">Mobile Technologies</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={24} />
                <span className="counter-title">Hours Support (24/7)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Our Services</span>
                <h2>End To End Custom Solutions For Your Need</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((s, i) => (
              <div className="col-xl-4 col-md-6" key={s.title}>
                <div
                  className={`service-three-item wow ${
                    i % 2 ? "fadeInDown" : "fadeInUp"
                  } delay-0-2s`}
                >
                  <div className="title-icon">
                    <h5>
                      <Link legacyBehavior href={s.slug ? serviceHref(s.slug) : "/contact"}>
                        <a>{s.title}</a>
                      </Link>
                    </h5>
                    <i className={`service-fa-icon ${s.icon}`} />
                  </div>
                  <div className="content">
                    <p>{s.text}</p>
                    <Link legacyBehavior href={s.slug ? serviceHref(s.slug) : "/contact"}>
                      <a className="read-more style-two">
                        <span>{s.slug ? "Service Details" : "Get a Quote"}</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Digital</span> solutions
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Portfolio</span>
                <h2>Inspire Change With Creativity, Passion And Impact</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/services">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  View Our Services <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          {portfolio.map((p, i) => (
            <div
              className="project-timeline wow fadeInUp delay-0-2s"
              key={p.title}
            >
              <div className="content">
                <span className="serial-number">0{i + 1}</span>
                <h4>
                  <Link legacyBehavior href="/services">
                    <a>
                      {p.title} – {p.category}
                    </a>
                  </Link>
                </h4>
              </div>
              <div className="image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="right-btn">
                <Link legacyBehavior href="/services">
                  <a className="details-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Project Timeline Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-area pt-90 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
                <img
                  src="/assets/images/pauseitive/kim-6.jpg"
                  alt={leader.name}
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="why-choose-two-wrap">
                <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Meet Our Leader</span>
                  <h2>{leader.name}</h2>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-3s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>CEO &amp; Founder</h4>
                    <p>
                      M.S.Ed., M.C.P.C., EdD Candidate at USC Rossier – a
                      passionate and empathetic entrepreneur, who wants to
                      bring new opportunities to multiple startups.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-5s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>Customer-Centric Focus</h4>
                    <p>
                      With our customer-oriented approach, Pauseitive Tech
                      ensures that each solution meets the customer’s
                      expectations and requirements.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-7s">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>Professional Support</h4>
                    <p>
                      Pauseitive Tech brings purely innovative ideas and
                      concepts to your project’s development due to an elite
                      panel of technical experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>clients</span> Say’s
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonials-three-area pt-95 rpt-70">
        <div className="container container-1260">
          <div className="row gap-120 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-one-right-part rmb-75">
                <Swiper
                  {...sliderProps.testimonialsThreeActiveSwiper}
                  className="testimonials-three-active wow fadeInUp delay-0-2s"
                >
                  {testimonials.map((t, i) => (
                    <SwiperSlide className="testimonial-item style-three" key={i}>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="author-speech">
                        <p>{t.text}…</p>
                      </div>
                      <div className="middle-quote">
                        <div className="icon">
                          <i className="flaticon-right-quote" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s animated">
                  <button className="testimonial-three-prev slick-arrow slick-disabled">
                    <i className="far fa-long-arrow-left" />
                  </button>
                  <div className="testimonial-three-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-three-next slick-arrow">
                    <i className="far fa-long-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-three-image wow fadeInRight delay-0-2s">
                <img
                  src="/assets/images/pauseitive/event1.jpg"
                  alt="Testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      <section className="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Blog &amp; News</span>
                <h2>Read Our Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.slice(0, 3).map((post, i) => (
              <div className="col-xl-4 col-md-6" key={post.slug}>
                <div className={`blog-item wow fadeInUp delay-0-${2 + i * 2}s`}>
                  <div className="image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">{post.date}</a>
                    </li>
                    <li>
                      <i className="far fa-user" />
                      <a href="#">admin</a>
                    </li>
                  </ul>
                  <hr />
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      <a>{post.title}</a>
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Style Two end */}
    </Layout>
  );
};
export default Index;
