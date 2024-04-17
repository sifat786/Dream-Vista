import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Vista | Contact Us</title>
            </Helmet>
            
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-6 md:py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16  bg-gray-100 text-gray-800 items-center">
                <div className="flex flex-col justify-between items">
                    <h2 className="text-xl font-bold leading-tight lg:text-3xl">
                    Wanna Publish your Book?
                    </h2>
                    <p className="text-gray-600 pt-4 text-base">
                    Contact us for inquiries about listings, property tours, or to discuss your real estate needs. We are here to help
                    </p>
                <img src='https://i.ibb.co/gSqSCGt/contact.jpg' className=" h-52 md:h-64 w-[400px] rounded-lg mt-4" />
                </div>
                <htmlForm noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">
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
                    <label htmlFor="email" className="text-sm">
                    Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    className="w-full p-3 rounded bg-gray-100 border-2 border-gray-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">
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
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-black text-white"
                >
                    Send Message
                </button>
                </htmlForm>
            </div>

        </div>
    );
};

export default Contact;