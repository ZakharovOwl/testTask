import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({
  data,
  setData,
  name,
  setName,
  textInput,
  setTextInput,
  tweets,
  setTweets,
  tweetsFilter,
  setTweetsFilter,
  loginStatus,
}) => {
  //State
  //Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const sumbmitTweetHandler = (e) => {
    e.preventDefault();
    let timeSubmit = new Date().toLocaleString();

    // проверка введен ли логин

    if (name.length > 1) {
      if (textInput.length > 1) {
        //LOCAL
        let dataTwts = data;
        localStorage.setItem(
          `dataTweets`,
          JSON.stringify([
            ...tweets,
            {
              message: textInput,
              id: uuidv4(),
              name: name,
              timeSubmit: timeSubmit,
            },
          ])
        );
        dataTwts = localStorage.getItem("dataTweets");
        dataTwts = JSON.parse(dataTwts);
        //console.log(dataTwts);
        //LOCAl
        setData([...dataTwts]);
        setTweets([...dataTwts]);
        setTweetsFilter([...dataTwts]);
        setTextInput("");
      } else if (textInput.length < 1) {
        alert(`Сreate a message, please`);
      }
    } else {
      alert(`Sign in, please`);
    }
  };

  const sumbmitEnter = (event) => {
    let timeSubmit = new Date().toLocaleString();

    // проверка введен ли логин

    if (event.keyCode === 13 && loginStatus === false) {
      if (name.length > 1) {
        if (textInput.length > 1) {
          //LOCAL

          let dataTwts = data;
          localStorage.setItem(
            `dataTweets`,
            JSON.stringify([
              ...tweets,
              {
                message: textInput,
                id: uuidv4(),
                name: name,
                timeSubmit: timeSubmit,
              },
            ])
          );
          dataTwts = localStorage.getItem("dataTweets");
          dataTwts = JSON.parse(dataTwts);
          //console.log(dataTwts);

          //LOCAl
          setData([...dataTwts]);
          setTweets([...dataTwts]);
          setTweetsFilter([...dataTwts]);
          setTextInput("");
        } else if (textInput.length < 1) {
          alert(`Сreate a message, please`);
        }
      } else {
        alert(`Sign in, please`);
      }
    }
  };

  //Func update posts older/ newest
  const olderPosts = () => {
    let dataTwts = data.reverse();
    setData([...dataTwts]);
    setTweets([...dataTwts]);
    setTweetsFilter([...dataTwts]);
  };

  return (
    <div className="tweets-create-wrapper">
      <h3>What's happening?</h3>
      <form
        className="form-tweet"
        onSubmit={sumbmitTweetHandler}
        onKeyDown={(e) => sumbmitEnter(e)}
      >
        <textarea
          className="textarea-tweet"
          autoFocus={true}
          value={textInput}
          onChange={userInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button className="form-tweet-btn">Submit</button>
      </form>
      <div>
        <div onClick={olderPosts} className="update-btn">
          <img
            src="https://img.icons8.com/nolan/2x/ffffff/align-right.png"
            alt="align-right"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
