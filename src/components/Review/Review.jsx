
const Review = () => {
    return (
        <div>
            
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6  md:p-10 md:px-12">
                    <h2 className="text-zinc-900 text-2xl md:text-3xl lg:text-4xl text-center font-semibold leading-9" data-aos='fade-down' data-aos-duration='1000'>Customers Review</h2>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20  md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0" data-aos='fade-up' data-aos-duration='2000' data-aos-delay='1000'>
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-8 py-1 text-lg italic">Exceptional service and a stunning selection of luxury properties. My dream home became a reality with their expertise and personalized attention.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-[200px] h-[3px] mb-2 rounded-lg bg-black"></span>
                        <p className="font-semibold text-gray-700">Leroy Jenkins</p>
                    </div>
                    
                    <div className="flex flex-col items-center max-w-xl mx-12 lg:mx-0" data-aos='fade-down' data-aos-duration='2000' data-aos-delay='1500'>
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-8 py-1 text-lg italic">Outstanding experience from start to finish! The website is intuitive interface made finding my perfect home effortless. Highly recommend for premium real estate seekers.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-[200px] h-[3px] mb-2 rounded-lg bg-black"></span>
                        <p className="font-semibold text-gray-700">Christopher Nolan</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Review;