import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Contact = () => {
    return (
        <div className="mb-5 lg:mb-10 mt-3">
            <Helmet>
                <title>Dream Vista | Contact Us</title>
            </Helmet>
            
            <h1 className="text-center text-neutral-700 text-2xl lg:text-[35px] font-semibold" data-aos='fade-down' data-aos-duration='1000'>Contact Us</h1>
            <p className="mb-5 md:pt-2 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-900 font-medium" data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1000'>Contact us today for expert guidance on buying, selling, or renting properties. Our team is ready to assist you with all your real estate needs. Reach out now.</p>

            <div className="grid  grid-cols-1 gap-8 px-8 py-8 md:py-[50px] mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16  bg-gray-100 text-gray-800 items-center" data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='1000'>

                <div className="flex flex-col justify-between items">
                    <MapContainer className="w-full h-[200px] md:h-[390px] rounded-lg border-2 border-gray-500" center={[23.873751, 90.396454]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[23.873751, 90.396454]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-neutral-700 text-base md:text-xl font-semibold">
                        Full name
                        </label>
                        <input
                        id="name"
                        type="text"
                        placeholder=""
                        className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-neutral-700 text-base md:text-xl font-semibold">
                        Email
                        </label>
                        <input
                        id="email"
                        type="email"
                        className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-neutral-700 text-base md:text-xl font-semibold">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows="3"
                        className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded text-white bg-green-700 hover:bg-green-900 duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;