import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Estate from "../../components/Estate/Estate";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Vista | Home</title>
            </Helmet>

            <Banner></Banner>
            <Estate></Estate>
        </div>
    );
};

export default Home;