import SvgFile from "../images/svg-file";


function TweetAction({imgsrc, actionCount, className, path}) {
    return (
        <div className={className}> 
            <SvgFile path={path} />
            <p>{actionCount}</p>
            {imgsrc && <img src={imgsrc} alt="" /> }
        </div>
    )
}

export default TweetAction ;