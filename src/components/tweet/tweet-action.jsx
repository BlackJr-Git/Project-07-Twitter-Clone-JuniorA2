import SvgFile from "../../images/svg-file";

function TweetAction({ actionCount, className, path, path2, handleClick, icone }) {
  let actionIcon ;
  if (icone) {
    actionIcon = icone
  } else {
    actionIcon =<SvgFile path={path} path2={path2} /> 
  }
  return (
    <div className={className} onClick={handleClick}>
      {actionIcon}
      <p>{actionCount}</p>
    </div>
  );
}

export default TweetAction ;
