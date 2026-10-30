import PageBanner from "@/src/components/PageBanner";
import { jobs } from "@/src/data/pauseitive";
import Layout from "@/src/layout/Layout";

const Career = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Career"} />
      {/* Page Banner End */}
      {/* Jobs (Feature Three) start */}
      <section className="feature-three-area pt-130 rpt-100 pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Current Jobs Opening</span>
                <h2>We’re Currently Hiring</h2>
                <p className="mt-20">
                  We’re currently hiring and would love to hear from you. If you
                  are passionate about helping others and want to advance
                  professionally, our company could be a good fit for you.
                </p>
              </div>
            </div>
          </div>
          <div className="row gap-130">
            {jobs.map((j, i) => (
              <div className="col-md-6" key={j.title}>
                <div
                  className={`feature-item-three wow fadeInUp delay-0-${
                    2 + (i % 2) * 2
                  }s`}
                >
                  <div className="top-part">
                    <span className="serial-number">0{i + 1}</span>
                    <a className="details-btn" href="#apply">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="content">
                    <h4>
                      <a href="#apply">{j.title}</a>
                    </h4>
                    <p>
                      <i className="fas fa-map-marker-alt" /> 33140, Miami
                      Beach, FL
                    </p>
                    <p>{j.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Jobs end */}
      {/* Apply Form start */}
      <section className="contact-page-area pt-50 pb-130 rpb-100 rel z-1" id="apply">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="section-title rmb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Join Our Team</span>
                <h2>Let’s Start Your Career With The Best Marketing Company</h2>
                <p className="mt-25">
                  We’re always on the lookout for bright, innovative minds to
                  join our family. We believe in fostering a work environment
                  that’s not only challenging and rewarding, but also fun and
                  inclusive. If you have a passion for digital solutions and a
                  drive to constantly learn, grow, and innovate, you might just
                  be the perfect fit for our team.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Apply Now</span>
                  <h3>Send Your Application</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="c-name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="c-name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="c-email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="c-email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="c-phone">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="c-phone"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="c-cv">
                          <i className="far fa-paperclip" />
                        </label>
                        <input
                          type="file"
                          id="c-cv"
                          className="form-control"
                          accept=".pdf,.doc,.docx"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="c-message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          id="c-message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Send <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Apply Form end */}
    </Layout>
  );
};
export default Career;
