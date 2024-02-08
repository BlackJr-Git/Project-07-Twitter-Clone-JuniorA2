import { useState, useContext } from "react";
import { TweetEditorInput, TweetEditorButtons } from "..";
import { addTweet } from "../../utils/add-tweet";
import TweetContext from "../../contexts/tweet-contexts";
import { useForm } from "react-hook-form" ; 
import { postData } from "../../utils";

function TweetEditorForm({}) {
  const { data, updateTweetData } = useContext(TweetContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  
  const [characterCount , setCharacterCount] = useState(0) ;
  // setCharacterCount(watch().tweetInput)


  watch((data) => {
    let tweet = data.tweetInput ; 
    setCharacterCount(tweet.length) 
  })


  // watch((data, { name, type }) => console.log(data, name, type))

  const handleClick = (formData, e) => {
    let tweetAdded = addTweet(data, formData.tweetInput);
    postData(tweetAdded)
    updateTweetData([...data , tweetAdded ]);
    reset({tweetInput : ""}) 
    setCharacterCount(0) 
  };

  // const handleTextChange = (e) => {
  //   setCharacterCount(e.target.value) ;
  //   console.log(characterCount);
  // };

  return (
    <div className="tweet-editor-form">
      <form onSubmit={handleSubmit(handleClick)}>
        <TweetEditorInput registerFunction={register} characterCount={characterCount} />
        <TweetEditorButtons />
      </form>
      {errors.tweetInput && <div className="error-message">{errors.tweetInput.message}</div> }
    </div>
  );
}

export default TweetEditorForm;
