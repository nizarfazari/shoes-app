import React, { useState } from "react";




const ImageZoom = () => {
  const [imageAct, setImageAct] = useState("/assets/home-banner.png");

  const changeImage = (val) => {
    setImageAct(val);
  };

  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="col-span-2 flex flex-col gap-4">
        <div onClick={() => changeImage("/assets/home-banner.png")}>
          <img src="/assets/home-banner.png" alt="" />
        </div>
        <div onClick={() => changeImage("/assets/menu/shoes-front.png")}>
          <img src="/assets/menu/shoes-front.png" alt="" />
        </div>
        <div onClick={() => changeImage("/assets/home-banner.png")}>
          <img src="/assets/home-banner.png" alt="" />
        </div>
      </div>
      <div className="col-span-5 relative">
        <img src={imageAct} alt="" className="w-full"/>
      {/* <ImageMagnifier
          image={{
            src: imageAct,
            width: 400,
            height: 300,
          }}
          zoomImage={{
            src: imageAct,
            width: 1600,
            height: 1200,
          }}
          cursorOffset={{ x: 80, y: -80 }}
        /> */}
      </div>
    </div>
  );
};

export default ImageZoom;
