import { Link } from 'react-router-dom';
import error from '../../assets/error.jpeg';
import { Helmet } from 'react-helmet-async';


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Vista | 404</title>
            </Helmet>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <img className='mx-auto w-[200px]' src={error} />
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
                        <Link to={'/'}>
                            <button className="bg-black py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;