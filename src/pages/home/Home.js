import './home.css'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSmall/WidgetSm";
import WidgetLg from "../../components/widgetLarge/WidgetLg";

const Home = () => {


    return (
        <div className={'home'}>
            <FeaturedInfo/>
            <Chart data={userData} title={'User Analytics'} grid dataKey={'Active User'}/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
};

export default Home