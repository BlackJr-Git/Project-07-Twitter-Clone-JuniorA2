import SvgFile from "../../images/svg-file";

function TweetAction({ imgsrc, actionCount, className, path,path2 }) {
  return (
    <div className={className}>
      <SvgFile path={path} path2={path2} />
      <p>{actionCount}</p>
    </div>
  );
}

export default TweetAction;
