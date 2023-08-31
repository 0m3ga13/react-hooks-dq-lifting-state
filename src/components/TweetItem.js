import React, { useState } from "react";

function TweetItem(props) {
  const [likes, setLikes] = useState(props.tweet.favorite_count);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={handleLike}
            className={`ui tiny basic labeled icon like button ${
              liked ? "liked" : ""
            }`}
          >
            <i className={`like icon ${liked ? "red" : ""}`}></i>{" "}
            {likes} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
