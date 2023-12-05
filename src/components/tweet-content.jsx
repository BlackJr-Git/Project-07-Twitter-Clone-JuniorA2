import { TweetAction } from "../components";

function TweetContent({
  texte,
  imgsrc,
  author,
  userName,
  time,
  reply,
  retweet,
  react,
}) {
    return (
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <p className="tweet-title-author"> {author} </p>
            <img src="src\images\Icons\Verified.png" alt="verfied icon" />
            <p className="tweet-title-details">
              {userName} . {time}
            </p>
          </div>

          <p className="tweet-text"> {texte} </p>

          {imgsrc &&  <div className="tweet-image">
                            <img src= {imgsrc} alt="" />
                        </div> 
            }
        </div>

        <div className="tweet-actions">
          <TweetAction
            // imgsrc={"src\\images\\Icons\\Reply.png"}
            path={"M18.705 9.36833L15.2483 9.36H15.2467C11.6017 9.36 8.74667 12.2158 8.74667 15.8617C8.74667 19.2767 11.4017 21.8667 14.9675 22.0033V25.1933C14.9675 25.2833 15.0042 25.4317 15.0675 25.5292C15.1858 25.7167 15.3875 25.8183 15.5942 25.8183C15.7092 25.8183 15.825 25.7867 15.9292 25.72C16.1492 25.58 21.3233 22.27 22.6692 21.1317C24.2542 19.79 25.2025 17.8233 25.205 15.8717V15.8575C25.2 12.2183 22.3467 9.36833 18.705 9.3675V9.36833ZM21.8608 20.1783C20.9158 20.9783 17.8092 23.0158 16.2175 24.0475V21.3917C16.2175 21.0467 15.9383 20.7667 15.5925 20.7667H15.2625C12.2125 20.7667 9.99751 18.7033 9.99751 15.8617C9.99751 12.9167 12.3042 10.61 15.2475 10.61L18.7033 10.6183H18.705C21.6483 10.6183 23.955 12.9233 23.9567 15.865C23.9542 17.4567 23.1717 19.0683 21.8617 20.1783H21.8608Z"}
            // stroke={'#2F3336;'}
            actionCount={reply}
            className={'tweet-action tweet-reply'}
          />
          <TweetAction
            // imgsrc={"src\\images\\Icons\\Retweet.png"}
            path={"M26.8083 20.5583C26.565 20.3142 26.1692 20.3142 25.925 20.5583L24.075 22.4083V13.875C24.075 12.1517 22.6725 10.75 20.95 10.75H16.075C15.73 10.75 15.45 11.03 15.45 11.375C15.45 11.72 15.73 12 16.075 12H20.95C21.9833 12 22.825 12.8417 22.825 13.875V22.4083L20.975 20.5583C20.7308 20.3142 20.335 20.3142 20.0917 20.5583C19.8483 20.8025 19.8467 21.1983 20.0917 21.4417L23.0083 24.3583C23.1292 24.4808 23.2892 24.5417 23.45 24.5417C23.6108 24.5417 23.7692 24.4817 23.8917 24.3583L26.8083 21.4417C27.0533 21.1983 27.0533 20.8025 26.8083 20.5583ZM17.925 23.2917H13.05C12.0167 23.2917 11.175 22.45 11.175 21.4167V12.8833L13.025 14.7333C13.1483 14.8558 13.3083 14.9167 13.4683 14.9167C13.6283 14.9167 13.7883 14.8558 13.91 14.7333C14.1542 14.4892 14.1542 14.0933 13.91 13.85L10.9933 10.9333C10.7492 10.6883 10.3533 10.6883 10.11 10.9333L7.19334 13.85C6.94834 14.0933 6.94834 14.4892 7.19334 14.7333C7.43834 14.9775 7.83251 14.9775 8.07667 14.7333L9.92667 12.8833V21.4167C9.92667 23.14 11.3292 24.5417 13.0517 24.5417H17.9267C18.2717 24.5417 18.5517 24.2617 18.5517 23.9167C18.5517 23.5717 18.2708 23.2917 17.9267 23.2917H17.925Z"}
            // stroke={'#2F3336;'}
            actionCount={retweet}
            className={'tweet-action tweet-retweet'}
          />
          <TweetAction
            // imgsrc={"src\\images\\Icons\\React.png"}
            path={"M17 25.5317H16.9883C14.8358 25.4917 8.62501 19.88 8.62501 14.565C8.62501 12.0117 10.7292 9.77 13.1275 9.77C15.0358 9.77 16.3192 11.0867 16.9992 12.045C17.6775 11.0883 18.9608 9.77 20.87 9.77C23.27 9.77 25.3733 12.0117 25.3733 14.5658C25.3733 19.8792 19.1617 25.4908 17.0092 25.53H17V25.5317ZM13.1283 11.0208C11.395 11.0208 9.87584 12.6775 9.87584 14.5667C9.87584 19.35 15.7375 24.23 17.0008 24.2817C18.2658 24.23 24.1258 19.3508 24.1258 14.5667C24.1258 12.6775 22.6067 11.0208 20.8733 11.0208C18.7667 11.0208 17.59 13.4675 17.58 13.4917C17.3883 13.96 16.6167 13.96 16.4242 13.4917C16.4125 13.4667 15.2367 11.0208 13.1292 11.0208H13.1283Z"}
            // stroke={'#2F3336;'}
            actionCount={react}
            className={'tweet-action tweet-react'}
          />
          <TweetAction
            imgsrc={"src\\images\\Icons\\Share.png"}
            actionCount={null}
            className={"tweet-action"}
          />
        </div>
      </div>
    );
  
}

export default TweetContent;
