import Marquee from "@/src/components/pauseitive/Marquee";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import {
  pricingFaqs,
  pricingPlans,
  serviceDetails,
  serviceHref,
} from "@/src/data/serviceDetails";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const ServiceDetails = () => {
  const { query } = useRouter();
  const service =
    serviceDetails.find((s) => s.slug === query.service) || serviceDetails[0];
  const [active, setActive] = useState("collapse0");

  useEffect(() => {
    document.title = `${service.title} – Pauseitive Tech`;
  }, [service]);

  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(/assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-40 wow fadeInUp delay-0-2s">
                {service.title}
                <img
                  className="mxw-10 leaf"
                  src="/assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
            <div className="col-xl-7 col-lg-9">
              <p className="mb-80 rmb-50 wow fadeInUp delay-0-3s">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img src={service.benefitImage} alt={service.title} />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(/assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  <Link legacyBehavior href="/contact">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>
                    <Link legacyBehavior href="/contact">
                      <a>{service.intro.title}</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Service Benefits</span>
                  <h2>{service.benefits.title}</h2>
                </div>
                <div className="content">
                  <p>{service.benefits.text}</p>
                  <ul className="list-style-three pt-15 pb-25">
                    {service.benefits.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Link legacyBehavior href="/contact">
                    <a className="read-more mt-10 color-primary">
                      Get Free Quote <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* How We Works start */}
      <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">What We Do</span>
            <h2>{service.intro.title}</h2>
            <div className="text mt-30">
              <p>{service.intro.text}</p>
            </div>
          </div>
          <div className="row gap-90">
            {service.highlights.map((h, i) => (
              <div className="col-md-6" key={h.title}>
                <div
                  className={`work-step-item ${
                    i === service.highlights.length - 1 ? "arrow-none" : ""
                  } wow fadeInUp delay-0-${2 + i}s`}
                >
                  <span className="step-number">0{i + 1}</span>
                  <h4 className="title">{h.title}</h4>
                  <div className="content">
                    <p>{h.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How We Works end */}
      <Marquee />
      {/* Why Choose Us start */}
      <section className="why-choose-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>{service.features.title}</h2>
                  <p className="mt-25">{service.features.text}</p>
                </div>
                <div className="row gap-60">
                  {service.features.items.map((f, i) => (
                    <div className="col-md-6" key={f.title}>
                      <div
                        className={`why-choose-item wow fadeInUp delay-0-${
                          2 + (i % 2)
                        }s`}
                      >
                        <div className="why-choose-header">
                          <i className="far fa-chevron-right" />
                          <h5>{f.title}</h5>
                        </div>
                        <p>{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right style-two wow fadeInLeft delay-0-2s">
                <img src={service.featureImage} alt={service.features.title} />
                <div className="why-choose-border-shape" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* Pricing start */}
      <section
        className="pricing-area-three pt-130 rpt-100 pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(/assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Plan</span>
                <h2>Affordable Plans For Every Business</h2>
                <p className="mt-20">
                  {service.pricingText ||
                    "Check these affordable plans on Pauseitive Tech and pick the one that suits your project best."}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingPlans.map((plan, i) => (
              <div className="col-xl-4 col-md-6" key={plan.title}>
                <div
                  className={`pricing-plan-item wow fadeInUp delay-0-${
                    2 + i * 2
                  }s`}
                >
                  {plan.popular && (
                    <span className="badge">
                      <i className="fas fa-star-of-life" />
                      <i className="fas fa-star-of-life" />
                      popular plan
                      <i className="fas fa-star-of-life" />
                      <i className="fas fa-star-of-life" />
                    </span>
                  )}
                  <div className="icon">
                    <i className={plan.icon} />
                  </div>
                  <h5>
                    {plan.title} <small>({plan.label})</small>
                  </h5>
                  <span className="price-text">
                    <span className="before">$</span>
                    <span className="price">{plan.price}</span>{" "}
                    <span className="after">{plan.after}</span>
                  </span>
                  <ul className="list-style-one">
                    {[...plan.points, ...plan.advantages].map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn w-100">
                      Order Now <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing end */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-100 rpt-70 pb-105 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="/assets/images/faqs/faq.png" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Pricing FAQs</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {pricingFaqs.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      content={data.text}
                      key={data.title}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
      {/* Other services */}
      <section className="pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">More Services</span>
            <h2>Explore Our Other Solutions</h2>
          </div>
          <div className="tag-coulds text-center wow fadeInUp delay-0-3s">
            {serviceDetails
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link legacyBehavior href={serviceHref(s.slug)} key={s.slug}>
                  <a>{s.title}</a>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ServiceDetails;
