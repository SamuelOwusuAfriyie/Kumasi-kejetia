import React from "react";
import "./Slider.css";
import Slider  from "react-slick";
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src:"https://i.imgur.com/ErZEgZz.png",
  },
  {
    src: "https://i.imgur.com/0u1gtV2.jpg",
  },
  {
    src: "https://i.imgur.com/C3FWE2R.jpg",
  }
];

class SliderShow extends React.Component {
  render() {
    const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  arrows: false
};

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };
return (
  <div className="imgContainer">

    <Slider {...settings}>
      <div className='slider-one Slider'>
        <img src="https://i.imgur.com/ErZEgZz.png" style={{visibility: "hidden"}}/>

      </div>
      <div className='slider-two Slider'>
        <img src="https://i.imgur.com/0u1gtV2.jpg" style={{visibility: "hidden"}} />

      </div>
      <div className='slider-three Slider'>
        <img src="https://i.imgur.com/C3FWE2R.jpg" style={{visibility: "hidden"}} />

      </div>
    </Slider>
  </div>
);

    //
    // return (
    //   <div className="imgContainer" style={{zIndex:'4'}}>
    //     <Slider {...settings}>
    //       <div className='w-100 bg-info' >
    //     <p className='bginfo'>  ggggggggggggggggggggggggggggggggggggggggggggg</p>
    //       </div>
    //       <div className='w-100' style={{backgroundImage:'url(https://i.imgur.com/ErZEgZz.png)'}}>
    //       ggggggggggggggggggggggggggggggggggggggggggggg
    //       </div>
    //     </Slider>
    //   {/* <UncontrolledCarousel className="Slider" items={items} /> */}
    //   </div>
    // )
  }
}

export default SliderShow
