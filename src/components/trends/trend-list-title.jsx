import { settingIcon } from '../../images' ;

function TrendListTitle() {
    return (
        <div className="trendlist-title">
            <h3>Trends For You</h3>
            <img src={settingIcon} alt="Settings icon" />
        </div>
    )
}

export default TrendListTitle ;