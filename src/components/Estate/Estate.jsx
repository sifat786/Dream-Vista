import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Estate = () => {

    const {data} = useAuth();

    return (
        <div className='mb-10 lg:pt-10'>

            <h3 className='text-zinc-900 text-2xl md:text-3xl lg:text-4xl text-center font-semibold leading-9' data-aos='fade-down' data-aos-duration='1000'>Luxurious Estates</h3>
            <p className='md:pt-2 lg:pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-900 font-medium' data-aos='fade-down' data-aos-duration='1000'>Discover unparalleled elegance and sophistication in our luxury real estate listings. Explore exquisite properties in prime locations, crafted for those with discerning taste. Your dream home awaits. Experience luxury living today.</p>
            
            <div className='mt-5 md:mt-[30px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 space-y-4 md:space-y-0'>

                {
                    data?.map((info, idx) => {

                        const { id, estate_title, image, location, status, bedRoom, shower, area, price } = info;

                        return (
                            <div key={idx} className='w-auto md:w-[338px] lg:w-[420px] relative' data-aos='fade-up' data-aos-duration='1000'>
                                <img className='w-auto md:w-[338px] lg:w-[420px] h-auto md:h-[180px] lg:h-[250px] rounded-t-xl object-cover' src={image} />
                                <div className='py-1 px-3 bg-red-700 absolute top-4 right-3 rounded-md'>
                                    <p className='text-[16px] font-medium text-white'>{status}</p>
                                </div>

                                <div className='bg-neutral-200 bg-opacity-70 p-5 rounded-b-xl'>
                                    <h5 className='text-zinc-900 text-[18px] font-semibold'>{estate_title}</h5>
                                    <p className='text-sm  text-gray-700 font-medium'>{location}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-3 lg:gap-5'>
                                            <div className='flex items-center gap-1'>
                                                <IoBedOutline className='text-[18px]'/>
                                                <span className='text-black text-[14px] font-normal'>{bedRoom}</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <FaShower className='text-[18px]'/>
                                                <span className='text-black text-[14px] font-normal'>{shower}</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <MdSquareFoot className='text-[18px]'/>
                                                <span className='text-black text-[14px] font-normal'>{area}</span>
                                            </div>
                                        </div>
                                        <h6 className='border-2 border-black px-2 py-1 rounded-lg text-[16px] font-medium text-gray-900 mt-[-40px] md:mt-[0px] lg:mt-[-50px]'>${price}</h6>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <Link to={`/estateDetails/${id}`}>
                                            <button className="bg-green-700 hover:bg-green-900 duration-300 w-full py-2 px-4 md:py-[9px] md:px-11 text-white md:text-base lg:text-xl font-medium rounded-lg">View Property</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default Estate;