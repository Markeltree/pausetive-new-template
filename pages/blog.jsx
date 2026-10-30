import PageBanner from "@/src/components/PageBanner";
import { blogPosts } from "@/src/data/pauseitive";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Blog & News"} />
      {/* Page Banner End */}
      {/* Blog Page Area start */}
      <section className="blog-page-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row">
            {blogPosts.map((post, i) => (
              <div className="col-xl-4 col-md-6" key={post.slug}>
                <div
                  className={`blog-item wow fadeInUp delay-0-${2 + (i % 3) * 2}s`}
                >
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
      {/* Blog Page Area end */}
    </Layout>
  );
};
export default Blog;
