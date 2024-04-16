import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useEffect } from "react";



const Agents = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/agents.json')
        .then(res => res.json())
        .then(resource => setData(resource))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Dream Vista | Agents</title>
            </Helmet>
            
            <h3 className='text-zinc-900 text-2xl md:text-3xl lg:text-4xl text-center font-semibold leading-9 mt-5'>Our Exclusive Agents</h3>
            <p className='md:pt-2 lg:pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-900 font-medium'>Meet our dedicated agents who excel in personalized service, expertise, and integrity. Your trusted partners in real estate success.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6 lg:mt-8 mb-[40px] lg:mb-[100px]">
                {
                    data?.map((item, idx) => {
                        return (
                            <div key={idx} className="w-[210px] h-60 rounded-lg text-center md:text-left mx-auto md:mx-0 mb-12 lg:mb-0">
                                <img className="w-full h-full rounded-lg object-cover" src={item?.image} />
                                <h6 className="text-zinc-900 text-[15px] lg:text-xl font-semibold pt-[10px]">{item?.name}</h6>
                                <p className="text-zinc-900 text-[15px] font-medium">{item?.placement}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Agents;