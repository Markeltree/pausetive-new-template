import { testimonials } from "@/src/data/pauseitive";
import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = ({ className = "pt-95 rpt-65 pb-130 rpb-100" }) => {
  return (
    <section className={`testimonial-section ${className}`}>
      <div className="container container-1210">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
              <img
                src="assets/images/pauseitive/event1.jpg"
                alt="Kimberly A. Dalius"
              />
              <div className="bottom-border" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
              <Swiper
                {...sliderProps.testimonialsActiveSwiper}
                className="testimonials-active"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide className="testimonial-item" key={i}>
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> {t.text}…{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="testimonial-controls mt-75 rmt-40">
                <button className="testimonial-prev slick-arrow">
                  <i className="far fa-chevron-left" />
                </button>
                <div className="testimonial-dots">
                  <div className="slick-dots"></div>
                </div>
                <button className="testimonial-next slick-arrow">
                  <i className="far fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
