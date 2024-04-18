import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { MdMyLocation } from "react-icons/md";
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';



const EstateDetails = () => {

    const {data} = useAuth();
    const {id} = useParams();
    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
        if(data) {
            const result = data.find(item => item.id === +id);
            setSingleData(result);
        }
    },[id, data]);

    const { estate_title, image, location, status, bedRoom, shower, area, price, description, segment_name, rating, facilities } = singleData || {};

    return (
        <div className='mb-5 lg:mb-10 lg:pt-10 flex flex-col justify-center items-center'>

            <Helmet>
                <title>{estate_title}</title>
            </Helmet>

            <h3 className='text-zinc-900 text-2xl md:text-3xl lg:text-4xl text-center font-semibold leading-9' data-aos='fade-down' data-aos-duration='2000'>{estate_title} Details</h3>

            <div className="rounded-[5px] border border-neutral-200 p-[15px] md:p-[20px] lg:p-[30px] mt-2 md:mt-5" data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='1000'>
                <img className='w-auto h-auto md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[420px] rounded-[5px]' src={image} />

                <div className="flex items-center bg-zinc-100 p-2 md:p-4 w-[300px] md:w-[600px] lg:w-[800px]">
                        <Marquee speed={100} pauseOnHover={true}>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{status}</p>
                        </Marquee>
                </div>

                <div>
                    <h3 className='text-zinc-900 text-[17px] md:text-[20px] lg:text-[22px] font-semibold lg:font-bold'>{estate_title}</h3>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1 mb-2'>
                            <MdMyLocation className='text-sm md:text-base'/>
                            <p className='text-sm md:text-base text-gray-700 font-medium'>{location}</p>
                        </div>
                        <p className='mt-[-30px] md:mt-[-40px] lg:mt-[-50px] md:mr-4 text-base font-medium bg-black text-white pt-[4px] pb-[1px] px-3'>${price}</p>
                    </div>
                    <p className='text-sm md:text-base text-black font-normal md:w-[600px] lg:w-[800px]'><b>Review : </b>{description}</p>

                    <div className='mt-2 md:flex space-y-3 md:space-y-0 gap-3  text-center md:text-left items-center justify-center md:justify-start border-neutral-500 border-opacity-20'>
                        <p className='text-neutral-900 text-base font-bold '>Facilities: </p>
                        {
                            facilities?.map((fac, idx) => {
                                return (
                                    <div key={idx} className='py-[9px] px-4 bg-red-50 rounded-[10px]'>
                                        <span className='text-gray-600 text-base font-semibold'>{fac}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='flex items-center gap-3 lg:gap-5 mt-4 justify-center md:justify-start'>
                        <div className='flex items-center gap-2'>
                            <IoBedOutline className='text-[23px] text-black'/>
                            <span className='text-black text-[18px] font-medium mb-[-2px]'>{bedRoom}</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaShower className='text-[23px] text-black'/>
                            <span className='text-black text-[18px] font-medium mb-[-2px]'>{shower}</span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <MdSquareFoot className='text-[23px] text-black'/>
                            <span className='text-black text-[18px] font-medium mb-[-2px]'>{area}</span>
                        </div>
                        
                    </div>

                    

                    <div className='flex py-1 w-full bg-black items-center justify-between mt-5 gap-10'>
                        <p className='text-base font-medium text-white ml-5'>{segment_name}</p>
                        <div className='flex items-center gap-2 text-white mr-5'>
                            <FaRegStar className='text-[18px]'/>
                            <p className='mb-[-2px] '>{rating}</p>
                        </div>
                    </div> 
                    
                </div>
            </div>
            <div></div>

        </div>
    );
};

export default EstateDetails;