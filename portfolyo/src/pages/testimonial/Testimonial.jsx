import React from 'react';
import UseUserData from "../../components/customHook/UseUserData";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const { userData, error } = UseUserData();

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: "ease"
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!userData) {
        return false;
    }

    return (
        <div className='md:w-3/4 w-4/5 m-auto my-20 py-10'>
            <div className="flex flex-col gap-2 justify-center items-center mb-14">
                <h1 className='text-[5rem] md:text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text'>
                    Testimonials
                </h1>
                <span className='italic text-3xl md:text-lg'>What Customers Say</span>
            </div>
            <div className="mt-20">
                <Slider {...settings}>
                    {userData.user.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-lime-500 h-[900px] md:h-[550px] xl:h-[450px] text-black rounded-xl">
                            <div className="h-56 rounded-t-xl bg-white flex justify-center items-center">
                                <img src={testimonial.image.url} alt="" className='w-44 h-44 rounded-full' />
                            </div>
                            <div className="flex flex-col justify-center items-center text-center gap-10 p-6">
                                <p className='leading-relaxed font-bold md:leading-loose tracking-wide md:tracking-wider text-3xl lg:text-lg '>{testimonial.review}</p>
                                <span className='font-semibold text-3xl md:text-lg'>
                                    ~ {testimonial.name} ~
                                </span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;