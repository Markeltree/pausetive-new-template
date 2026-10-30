import Sidebar from "@/src/components/pauseitive/Sidebar";
import { blogPosts, featuredArticle } from "@/src/data/pauseitive";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const post = blogPosts[0];

const BlogDetails = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <section
        className="page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/banner/banner-bg-two.jpg)",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="row">
              <div className="col-xl-8">
                <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="#">admin</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">{post.date}</a>
                  </li>
                </ul>
                <h2 className="page-title wow fadeInUp delay-0-3s">
                  {post.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Blog Details Page Area start */}
      <section className="blog-details-page py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-single-content">
                <div className="image mb-55 wow fadeInUp delay-0-2s">
                  <img src={post.image} alt={post.title} />
                </div>
                <p className="big-first-letter">{featuredArticle.intro}</p>
                <h3>{featuredArticle.heading}</h3>
                {featuredArticle.body.slice(0, 4).map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <br />
                <blockquote>
                  Kimberly Dalius shows that it is possible to apply art and
                  science in leadership to enhance organizational outcomes in
                  the digital world.
                  <span className="blockquote-footer">Pauseitive Tech</span>
                </blockquote>{" "}
                <br />
                {featuredArticle.body.slice(4).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="tag-share py-30 wow fadeInUp delay-0-2s">
                <div className="item">
                  <div className="tag-coulds">
                    <Link legacyBehavior href="/blog">
                      <a>Leadership</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>EdTech</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                      <a>AI</a>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="social-style-one">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </div>
                </div>
              </div>
              <form
                id="comment-form"
                className="comment-form bgc-lighter mt-95 wow fadeInUp delay-0-2s"
                name="comment-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <h4>Leave a Reply</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        placeholder="Full Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="blog-email"
                        name="blog-email"
                        className="form-control"
                        placeholder="Email Address *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="form-control"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Comment *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Post Comment <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <Sidebar recent={blogPosts.slice(1, 4)} />
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Page Area end */}
    </Layout>
  );
};
export default BlogDetails;
