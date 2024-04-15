import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="lg:mt-5 mb-6 md:mb-10">

            <Swiper
                navigation = {true} 
                modules = {[Navigation, Autoplay]}
                loop = {true}
                autoplay = {
                    {delay: 20000}
                }
            >
                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/9V8P7jx/private-islands.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[500px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Discover a <span className="text-red-700">Luxurious</span> place you will love to live</h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Discover luxurious properties and find your dream home with us. Explore our listings and connect with trusted real estate professionals. Start your journey to home ownership today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/fvKn2vh/luxuries-Villas.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[500px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Discover a <span className="text-red-700">Luxurious</span> place you will love to live</h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Discover luxurious properties and find your dream home with us. Explore our listings and connect with trusted real estate professionals. Start your journey to home ownership today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/z4JYRDf/luxurious-mansions.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[500px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Discover a <span className="text-red-700">Luxurious</span> place you will love to live</h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Discover luxurious properties and find your dream home with us. Explore our listings and connect with trusted real estate professionals. Start your journey to home ownership today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/kMr9dtX/penthouse.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[500px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Discover a <span className="text-red-700">Luxurious</span> place you will love to live</h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Discover luxurious properties and find your dream home with us. Explore our listings and connect with trusted real estate professionals. Start your journey to home ownership today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/b3Fshxm/Beachfront-properties.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
                        <h1 className="w-auto md:w-[400px] lg:w-[500px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Discover a <span className="text-red-700">Luxurious</span> place you will love to live</h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">Discover luxurious properties and find your dream home with us. Explore our listings and connect with trusted real estate professionals. Start your journey to home ownership today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Explore More</button>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};
export default Banner;