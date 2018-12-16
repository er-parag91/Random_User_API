import React from "react";
import "./user.css";
import moment from "moment";

export const User = props => (
  <div className="user">
    <div className="profile">
      <h1>{props.details.name.first}</h1>
      <img src={props.details.picture.large} className="picture" />
      <br />
      <button className="new" onClick={props.clicked}>
        New
      </button>
      <br />
    </div>
    {props.children}
  </div>
);

export const phone = props => {
  return (
    <div>
      {props.isPhone ? (
        <div>
          <p className="title">My phone number is</p>
          <h3 className="subTitle">{props.details.phone}</h3>
        </div>
      ) : null}
    </div>
  );
};

export const Personal = props => (
  <div>
    {props.isPerson ? (
      <div>
        <p className="title">Hi, My name is</p>
        <h3 className="subTitle">
          {props.details.name.first} {props.details.name.last}
        </h3>
      </div>
    ) : null}
  </div>
);

export const Password = props => (
  <div>
    {props.isPassword ? (
      <div>
        <p className="title">My password is</p>
        <h3 className="subTitle">{props.details.login.password}</h3>
      </div>
    ) : null}
  </div>
);
export const Family = props => {
  const now = moment(props.details.dob.date);
  const dob = now.format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div>
      {props.isFamily ? (
        <div>
          <p>My birthday is</p>
          <h3>{dob}</h3>
        </div>
      ) : null}
    </div>
  );
};

export const Contact = props => (
  <div>
    {props.isContact ? (
      <div>
        <p className="title">My email address is</p>
        <h3 className="subTitle">{props.details.email}</h3>
      </div>
    ) : null}
  </div>
);

export const Location = props => (
  <div>
    {props.isLocation ? (
      <div>
        <p className="title">My address is</p>
        <h3 className="subTitle">{props.details.location.street}</h3>
      </div>
    ) : null}
  </div>
);
