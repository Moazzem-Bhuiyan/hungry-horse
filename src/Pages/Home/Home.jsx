
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import BossCard from './BossCard/BossCard';
import PopularItem from './popularitem/PopularItem';
import ChefFood from './cheffood/ChefFood';
import Featured from './Featured/Featured';
import Testomonial from './Testomonial/Testomonial';
import Call from './Call/Call';

const Home = () => {

    return (

        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <BossCard></BossCard>
            <PopularItem></PopularItem>
            <Call></Call>
            <ChefFood></ChefFood>
            <Featured></Featured>
            <Testomonial></Testomonial>
            
            
        </div>
    );
};

export default Home;