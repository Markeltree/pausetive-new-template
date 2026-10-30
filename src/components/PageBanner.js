import Link from "next/link";

const PageBanner = ({ pageName, title, text }) => {
  return (
    <section
      className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(assets/images/banner/banner-bg.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">
            {title || pageName}
          </h2>
          {text && (
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <p className="page-banner-text wow fadeInUp delay-0-3s">
                  {text}
                </p>
              </div>
            </div>
          )}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
