import React from "react";
//components
import CreateTweet from "./TweetsDetals/CreateTweet";
import FilterTweets from "./TweetsDetals/FilterTweets";
import Trends from "./TweetsDetals/Trends";
import TweetList from "./TweetsDetals/TweetList";

const MyTweets = ({
  data,
  setData,
  name,
  setName,
  textInput,
  setTextInput,
  tweets,
  setTweets,
  textInputFilter,
  setTextInputFilter,
  tweetsFilter,
  setTweetsFilter,
  loginStatus,
  setLoginStatus,
  textUsersInputFilter,
  setTextUsersInputFilter,
  users,
  setUsers
}) => {
  return (
    <div className="tweets-wrapper">
      <div className="tweetsss"></div>
      <CreateTweet
        data={data}
        setData={setData}
        className="tweets-create"
        name={name}
        setName={setName}
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
        tweetsFilter={tweetsFilter}
        setTweetsFilter={setTweetsFilter}
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
      />
      <TweetList
        data={data}
        setData={setData}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
        tweetsFilter={tweetsFilter}
        setTweetsFilter={setTweetsFilter}
      />
      <FilterTweets
        textInputFilter={textInputFilter}
        setTextInputFilter={setTextInputFilter}
        textUsersInputFilter={textUsersInputFilter}
        setTextUsersInputFilter={setTextUsersInputFilter}
        tweets={tweets}
        setTweets={setTweets}
        tweetsFilter={tweetsFilter}
        setTweetsFilter={setTweetsFilter}
      />
      <Trends
        name={name}
        setName={setName}
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
};

export default MyTweets;
