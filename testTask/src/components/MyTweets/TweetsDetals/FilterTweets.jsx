import React from "react";

const FilterTweets = ({
  textInputFilter,
  setTextInputFilter,
  tweets,
  setTweets,
  tweetsFilter,
  setTweetsFilter,
  textUsersInputFilter,
  setTextUsersInputFilter,
}) => {
  //Function Search tweets
  const userInputFilter = (e) => {
    setTextInputFilter(e.target.value.toLowerCase());
    e.preventDefault();
    let filterTweets = [];

    for (let i = 0; i < tweets.length; i++) {
      if (
        textInputFilter.length > 1 &&
        tweets[i].message.toLowerCase().includes(textInputFilter)
      ) {
        filterTweets.push(tweets[i]);
      } else if (textInputFilter.length < 2) {
        filterTweets = tweets;
      }
    }
    setTweetsFilter([...filterTweets]);
  };

//Function Search users
const userUsersInputFilter = (e) => {
  setTextUsersInputFilter(e.target.value.toLowerCase());
  e.preventDefault();
  let filterTweets = [];

  for (let i = 0; i < tweets.length; i++) {
    if (
      textUsersInputFilter.length > 1 &&
      tweets[i].name.toLowerCase().includes(textUsersInputFilter)
    ) {
      filterTweets.push(tweets[i]);
    } else if (textUsersInputFilter.length < 2) {
      filterTweets = tweets;
    }
  }
  setTweetsFilter([...filterTweets]);
}; 


  return (
    <div className="filter-tweets-wrapper">
      <form>
        <h4>Search tweets</h4>
        <textarea
          className="textarea-filter"
          value={textInputFilter}
          onChange={userInputFilter}
          cols="50"
          rows="5"
        ></textarea>
      </form>
      <form>
        <h4>Search users</h4>
        <textarea
          className="textarea-filter"
          value={textUsersInputFilter}
          onChange={userUsersInputFilter}
          cols="50"
          rows="5"
        ></textarea>
      </form>
    </div>
  );
};

export default FilterTweets;
