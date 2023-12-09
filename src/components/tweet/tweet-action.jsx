import SvgFile from "../../images/svg-file";

function TweetAction({ actionCount, className, path, path2, handleClick }) {
  return (
    <div className={className} onClick={handleClick}>
      <SvgFile path={path} path2={path2} />
      <p>{actionCount}</p>
    </div>
  );
}

export default TweetAction;
