import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

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
            <div className="col-span-5 relative" >
                <ReactImageMagnify
                    className="h-full"
                    enlargedImagePosition="over"
                    isHintEnabled={true}
                    shouldHideHintAfterFirstActivation={false}

                    smallImage={{
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        srcSet: imageAct,
                        src: imageAct,

                    }}
                    largeImage={{
                        src: imageAct,
                        width: 500,
                        height: 500
                    }}
                    lensStyle={{ backgroundColor: "rgba(0,0,0,.6)" }}
                />

            </div>
        </div>
    );
};

export default ImageZoom;
