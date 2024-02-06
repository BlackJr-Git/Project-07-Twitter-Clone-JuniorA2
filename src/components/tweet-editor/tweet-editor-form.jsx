import { useState, useContext } from "react";
import { TweetEditorInput, TweetEditorButtons } from "..";
import { addTweet } from "../../utils/add-tweet";
import TweetContext from "../../contexts/tweet-contexts";
import { useForm } from "react-hook-form";

function TweetEditorForm({}) {
  const { data, updateTweetData } = useContext(TweetContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tweet, setTweet] = useState("");

  const handleClick = (formData, e) => {
    // e.preventDefault();
    // console.log(formData);
    let tweetAdded = addTweet(data, formData.tweetInput);
    updateTweetData([tweetAdded, ...data]);
    e.target.reset
    setTweet("");
  };

  const handleTextChange = (e) => {
    setTweet(e.target.value);
  };

  return (
    <div className="tweet-editor-form">
      <form onSubmit={handleSubmit(handleClick)}>
        <TweetEditorInput registerFunction={register} />
        <TweetEditorButtons />
      </form>
      {errors.tweetInput && <div style={{color : "red" }}>{errors.tweetInput.message}</div> }
    </div>
  );
}

export default TweetEditorForm;
