import SvgFile from "../../images/svg-file";

function NavigationLink({linkTexte,path,path2}) {
    return (
        <a href="" className="nav-link">
            <SvgFile path={path} path2={path2} />
            <p>{linkTexte}</p>
        </a>
    )
}

export default NavigationLink ;