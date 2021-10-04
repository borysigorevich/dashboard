import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'


const FeaturedInfo = () => {


    return (
        <div className={'featured'}>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,414</span>
                    <span className="featuredMoneyRate">-11.4 <span><ArrowDownward className={'featuredIcon negative'}/></span></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Compared to last month</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,414</span>
                    <span className="featuredMoneyRate">-11.4 <span><ArrowUpward className={'featuredIcon'}/></span></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Compared to last month</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,414</span>
                    <span className="featuredMoneyRate">-11.4 <span><ArrowUpward className={'featuredIcon'}/></span></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
        </div>
    );
};

export default FeaturedInfo