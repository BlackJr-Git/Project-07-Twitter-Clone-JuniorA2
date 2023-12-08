import { timelineProp } from "../images";

function Header({pageTitle}) {
    return (
        <div className="header"> 
            <h1 className="page-title"> {pageTitle} </h1>
            <img className="top-tweets" src={timelineProp} alt="avatar" />
        </div>
    )
}

export default Header;

