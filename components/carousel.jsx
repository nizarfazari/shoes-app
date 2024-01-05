import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@chakra-ui/react';
import Image from 'next/image';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className='my-10 '>
            <Slider {...settings}>
                <div className='relative' >
                    <div className="shadow p-5 rounded-lg text-center mx-10 my-4">
                        <Avatar size={'lg'} className='!absolute top-[0px]  left-[197px]' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <h5 className='mt-10 mb-4'>Indri Jasmine</h5>
                        <p>“Sangat puas belanja disini semua
                            barangnya sangat memuaskan
                            dan terbaru semua modelnya”

                        </p>
                        <div className="justify-center flex">
                            <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
                        </div>
                    </div>
                </div>
               
                <div className='relative' >
                    <div className="shadow p-5 rounded-lg text-center mx-10 my-4">
                        <Avatar size={'lg'} className='!absolute top-[0px]  left-[197px]' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <h5 className='mt-10 mb-4'>Indri Jasmine</h5>
                        <p>“Sangat puas belanja disini semua
                            barangnya sangat memuaskan
                            dan terbaru semua modelnya”

                        </p>
                        <div className="justify-center flex">
                            <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
                        </div>
                    </div>
                </div>
               
                <div className='relative' >
                    <div className="shadow p-5 rounded-lg text-center mx-10 my-4">
                        <Avatar size={'lg'} className='!absolute top-[0px]  left-[197px]' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <h5 className='mt-10 mb-4'>Indri Jasmine</h5>
                        <p>“Sangat puas belanja disini semua
                            barangnya sangat memuaskan
                            dan terbaru semua modelnya”

                        </p>
                        <div className="justify-center flex">
                            <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
                        </div>
                    </div>
                </div>
               
                <div className='relative' >
                    <div className="shadow p-5 rounded-lg text-center mx-10 my-4">
                        <Avatar size={'lg'} className='!absolute top-[0px]  left-[197px]' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <h5 className='mt-10 mb-4'>Indri Jasmine</h5>
                        <p>“Sangat puas belanja disini semua
                            barangnya sangat memuaskan
                            dan terbaru semua modelnya”

                        </p>
                        <div className="justify-center flex">
                            <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
                        </div>
                    </div>
                </div>
               
                

            </Slider>
        </div>
    )
}

export default Carousel
