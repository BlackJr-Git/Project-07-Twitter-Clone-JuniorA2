import SvgFile from "../images/svg-file";


function TweetAction({imgsrc, actionCount, className, path,stroke}) {
    return (
        <div className={className}> 
            <SvgFile path={path} stroke={stroke} />
            <p>{actionCount}</p>
            <img src={imgsrc} alt="" /> 
        </div>
    )
}

export default TweetAction ;