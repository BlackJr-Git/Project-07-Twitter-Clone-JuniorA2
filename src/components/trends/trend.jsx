import {moreIcon} from '../../images'
function Trend({trendCountry, trendSubject}) {
    return (
        <div className="trend"> 
            <div>
                <p>Trending in {trendCountry} </p>
                <p className="trend-title">{trendSubject}</p>
                <p>2.066<span>Tweets</span></p>     
            </div>
            <div>
                <img src={moreIcon} alt="more-icon" />
            </div>
        </div>
    )
}

export default Trend ;