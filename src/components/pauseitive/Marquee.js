import { services } from "@/src/data/pauseitive";

const Marquee = () => {
  const items = [...services, ...services];
  return (
    <div className="headline-area bgc-primary pt-80 pb-65">
      <div className="container-fluid">
        <div className="headline-wrap marquee">
          <span>
            {items.map((s, i) => (
              <span className="marquee-item" key={i}>
                <i className="fas fa-star-of-life" />
                <b>{s.title}</b>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Marquee;
