import React, { useState } from "react";

const Trends = ({
  name,
  setName,
  loginStatus,
  setLoginStatus,
  users,
  setUsers,
}) => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const firstNameUserInputHandler = (e) => {
    setFirstName(e.target.value);
  };
  const passwordUserInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const sumbmitLogin = (e) => {
    e.preventDefault();
    let check;
    const checkUsers = () => {
      check = users.some(
        (o) => o.user === firstName && o.password === password
      );
    };
    checkUsers();

    if (firstName.length > 1 && password.length > 1) {
      if (check === true) {
        setName(`${firstName}`);
        setLoginStatus(!loginStatus);
        localStorage.setItem(
          `dataName`,
          JSON.stringify([`${firstName}`, loginStatus])
        );
      } else if (check === !true) {
        alert(`Пароль или логин введены неправильно, попробуйте еще раз.`);
      }
    } else {
      alert(`Введите First name и Password (более 2 символов каждое)`);
    }
  };

  const sumbmitNewUser = (e) => {
    e.preventDefault();
    let check;
    const checkUsers = () => {
      check = users.some((o) => o.user === firstName);
    };
    checkUsers();
    if (firstName.length > 1 && password.length > 1) {
      if (check === false) {
        setName(`${firstName}`);
        setUsers([
          ...users,
          {
            user: firstName,
            password: password,
          },
        ]);
        setLoginStatus(!loginStatus);
        localStorage.setItem(
          `dataUsers`,
          JSON.stringify([
            ...users,
            {
              user: firstName,
              password: password,
            },
          ])
        );
        localStorage.setItem(
          `dataName`,
          JSON.stringify([`${firstName}`, loginStatus])
        );
      } else if (check === true) {
        alert(`Такой пользователь уже есть.`);
      }
    } else {
      alert(`Введите First name и Password (более 2 символов каждое)`);
    }
  };
  
  const bntOut = (e) => {
    e.preventDefault();
    setName(``);
    setLoginStatus(!loginStatus);
    localStorage.setItem(
      `dataName`,
      JSON.stringify([`${firstName} ${password}`, loginStatus])
    );
  };

  return (
    <div
      className={`trends-wrapper ${loginStatus ? "trends-wrapper-active" : ""}`}
    >
      <form
        className={`login-form ${loginStatus ? "login-form-active" : ""}`}
      >
        <h2>Login</h2>
        <h3>Name</h3>
        <textarea
          className="textarea-login"
          // autoFocus={true}
          // value={textInput}
          onChange={firstNameUserInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <h3>Password </h3>
        <textarea
          className="textarea-login"
          // autoFocus={true}
          // value={textInput}
          onChange={passwordUserInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <div className="login-form-btns">
          <button
            onClick={sumbmitLogin}
            className="btn-singIn"
          >
            Sign in
          </button>
          <button onClick={sumbmitNewUser}>Create new acc</button>
        </div>
      </form>
      <div className={`user ${!loginStatus ? "user-active" : ""}`}>
        <div className="user-name">
          <p className="text-user">User:</p>
          <p className="text-user-name">{name}</p>
        </div>
        <div onClick={bntOut} className="user-btn-out">
          Exit
        </div>
      </div>
    </div>
    /*  <div className='trends-wrapper'>
      <h4>Trends for you (block doesn't work)</h4>
      <h3>info about app</h3>
      <p>create/edit/delete tweet</p>
      <p>tweet's time</p>
      <p>filter tweets in "search block"</p>
      <p>update posts list(older/newest)</p>
      <p>save posts with localStorage</p>
    </div> */
  );
};

export default Trends;
