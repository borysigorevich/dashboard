import './widgetSm.css'
import {Visibility} from '@material-ui/icons'

const WidgetSm = () => {


    return (
        <div className={'widgetSm'}>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="img" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className={'widgetSmIcon'}/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm