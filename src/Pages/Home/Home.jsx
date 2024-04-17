import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Estate from "../../components/Estate/Estate";
import Review from "../../components/Review/Review";
import States from "../../components/States/States";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Vista | Home</title>
            </Helmet>

            <Banner></Banner>
            <Estate></Estate>
            <Review></Review>
            <States></States>
        </div>
    );
};

export default Home;