import React from "react";
import Tweet from "./Tweet";

const TweetList = ({
  data,
  setData,
  name,
  tweets,
  setTweets,
  tweetsFilter,
  setTweetsFilter,
}) => {
  return (
    
    <div className="tweets-list-wrapper">
      {tweetsFilter.map((tweet) => (
        <Tweet
          data={data}
          setData={setData}
          name={tweet.name}
          tweet={tweet}
          setTweets={setTweets}
          tweets={tweets}
          key={tweet.id}
          tweetsFilter={tweetsFilter}
          setTweetsFilter={setTweetsFilter}
        />
      ))}
    </div>
  );
};

export default TweetList;
