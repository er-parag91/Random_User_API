import axios from "axios";
import "./styles.css";
import * as data from "../phone/phone";
import React, { Component } from "react";
import { connect } from "react-redux";
//icons files
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/ikons/user";
import { mail } from "react-icons-kit/ikons/mail";
import { phone } from "react-icons-kit/fa/phone";
import { unlock } from "react-icons-kit/fa/unlock";
import { streetView } from "react-icons-kit/fa/streetView";
import { fileO } from "react-icons-kit/fa/fileO";

class App extends Component {
  state = {
    user: {},
    userFetched: false,
    loading: false
  };
  componentWillMount() {
    axios
      .get("https://api.randomuser.me/")
      .then(response => {
        this.setState({ user: response.data, userFetched: true });
      })
      .catch(error => {
        this.setState({ userFetched: false });
      });
  }
  gettingUser = () => {
    axios
      .get("https://api.randomuser.me/")
      .then(response => {
        this.setState({ user: response.data, userFetched: true });
      })
      .catch(error => {
        this.setState({ userFetched: false });
      });
  };
  render() {
    let text = <h1 className="header">Loading...</h1>;
    if (this.state.userFetched) {
      text = null;
    }
    return (
      <div className="App">
        <div className="header">
          <h1>Random User Generator</h1>
          <br />
          <p>
            A free, open-source API for generating random user data. Like Lorem
            Ipsum, but for people.
          </p>
        </div>
        {text}
        {this.state.userFetched ? (
          <data.User
            details={this.state.user.results[0]}
            clicked={this.gettingUser}
          >
            {this.state.userFetched ? (
              <div className="information">
                <data.Personal
                  isPerson={this.props.isPerson}
                  details={this.state.user.results[0]}
                />
                <data.Contact
                  isContact={this.props.isContact}
                  details={this.state.user.results[0]}
                />
                <data.Family
                  isFamily={this.props.isFamily}
                  details={this.state.user.results[0]}
                />
                <data.Location
                  isLocation={this.props.isLocation}
                  details={this.state.user.results[0]}
                />
                <data.phone
                  isPhone={this.props.isPhone}
                  details={this.state.user.results[0]}
                />
                <data.Password
                  isPassword={this.props.isPassword}
                  details={this.state.user.results[0]}
                />
              </div>
            ) : null}
            {this.state.userFetched ? (
              <ul>
                <li className="icons" onMouseEnter={this.props.onIsPersonEnter}>
                  <Icon size={32} icon={user} />
                </li>
                <li
                  className="icons"
                  onMouseEnter={this.props.onIsContactEnter}
                >
                  <Icon size={32} icon={mail} />
                </li>
                <li className="icons" onMouseEnter={this.props.onIsFamilyEnter}>
                  <Icon size={32} icon={fileO} />
                </li>
                <li
                  className="icons"
                  onMouseEnter={this.props.onIsLocationEnter}
                >
                  <Icon size={32} icon={streetView} />
                </li>
                <li className="icons" onMouseEnter={this.props.onIsPhoneEnter}>
                  <Icon size={32} icon={phone} />
                </li>
                <li
                  className="icons"
                  onMouseEnter={this.props.onIsPasswordEnter}
                >
                  <Icon size={32} icon={unlock} />
                </li>
              </ul>
            ) : null}
          </data.User>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPerson: state.isPerson,
    isContact: state.isContact,
    isFamily: state.isFamily,
    isLocation: state.isLocation,
    isPhone: state.isPhone,
    isPassword: state.isPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIsPhoneEnter: () => dispatch({ type: "isPhone" }),
    onIsPersonEnter: () => dispatch({ type: "isPerson" }),
    onIsContactEnter: () => dispatch({ type: "isContact" }),
    onIsLocationEnter: () => dispatch({ type: "isLocation" }),
    onIsPasswordEnter: () => dispatch({ type: "isPassword" }),
    onIsFamilyEnter: () => dispatch({ type: "isFamily" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
