// var console = { ...window.console };
// console.error = function () {};
// window.console = {};

import { Component } from "react";
import uuid from "react-uuid";
import TagCloud from "react-tag-cloud";

import python from "assets/skills/python.svg";
import typescript from "assets/skills/typescript.svg";
import javascript from "assets/skills/javascript.svg";
import html from "assets/skills/html.svg";
import firebase from "assets/skills/firebase.svg";
import github from "assets/skills/github.svg";
import materialUI from "assets/skills/materialUI.svg";
import nodeJS from "assets/skills/nodejs.svg";
import redux from "assets/skills/redux.svg";
import css from "assets/skills/css3.svg";
import vscode from "assets/skills/vscode.svg";
import mongo from "assets/skills/mongodb.svg";
import react from "assets/skills/react.svg";
import bootstrap from "assets/skills/bootstrap.svg";

import "./styles.css";

const svgs = [];
svgs.push(
  python,
  typescript,
  javascript,
  html,
  firebase,
  github,
  materialUI,
  nodeJS,
  redux,
  css,
  vscode,
  react,
  mongo,
  bootstrap
);

class SkillCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="app-outer">
          <h1>Work</h1>
          <p>
            I have worked on web development projects that include backend using
            Express.js and Firebase integrated with React. I also have worked
            extensively with Python and its machine learning/data science
            libraries. I have strong foundations in MERN 💻 stack with which I
            continue to provide business solutions to my clients 🕴.
          </p>
          <h2>Languages and Skills</h2>
          <div className="app-inner">
            <TagCloud
              className="tag-cloud"
              style={{
                fontSize: 30,
                padding: 5,
              }}
            >
              {this.props.toolsImages.map((image) => (
                <div>
                  <img
                    key={uuid()}
                    src={image}
                    // alt={image.split("/")[3].split(".")[0]}
                    // title={image.split("/")[3].split(".")[0]}
                  />
                </div>
              ))}
            </TagCloud>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCloud;
