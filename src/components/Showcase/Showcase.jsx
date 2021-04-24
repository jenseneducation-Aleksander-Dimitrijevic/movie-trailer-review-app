import { ShowcaseContainer } from "./ShowcaseStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Showcase({ images = [], title = "", subTitle = "" }) {
  return (
    <ShowcaseContainer>
      <header className="header">
        {title && <h1 className="header-title">{title}</h1>}
        {subTitle && <h2 className="header-sub-title">{subTitle}</h2>}
      </header>
      <main>
        <Carousel
          swipeable
          emulateTouch
          infiniteLoop
          autoPlay={false}
          showStatus={false}
          showThumbs={false}
          transitionTime={200}
          showIndicators={false}
          className="carousel"
        >
          {images.length > 0 &&
            images.map((item, index) => (
              <div key={index}>
                <img
                  className="image"
                  style={{ width: "75%" }}
                  src={require("../../assets/" + item.path).default}
                  alt=""
                />
                <p className="label">{item.text}</p>
              </div>
            ))}
        </Carousel>
      </main>
    </ShowcaseContainer>
  );
}

export default Showcase;
