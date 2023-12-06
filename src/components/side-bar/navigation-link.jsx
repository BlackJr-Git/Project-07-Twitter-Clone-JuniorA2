import SvgFile from "../../images/svg-file";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function NavigationLink({linkTexte,path,path2,link}) {
    return (
        <NavLink to={link} className="nav-link">
            <SvgFile path={path} path2={path2} />
            <p>{linkTexte}</p>
        </NavLink>
    )
}

function Teste() {
    return (
        <>
            <NavLink to={link} className="nav-link">
                <SvgFile path={path} path2={path2} />
                <p>{linkTexte}</p>
            </NavLink>
        </>
    )
}

export default NavigationLink ;