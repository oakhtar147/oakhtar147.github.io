// override console.error to ignore unwanted React warning
window.console.error = function() {};

import React, { Component } from "react";
import uuid from "react-uuid";
import TagCloud from "react-tag-cloud";
import Fade from 'react-reveal/Fade';

import "./styles.css";


interface Props {
  description: string;
  toolsImages: string[];
}

class SkillCloud extends Component<Props> {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 4000)
  }

  render() {
    return (
      <div>
        <div className="app-outer-random-suffix-avoid-global">
          <Fade>
            <h1>Work</h1>
            <p>{this.props.description}</p>
            <h2>Some Languages and Tools I Work With</h2>
            <div className="app-inner-random-suffix-avoid-global">
              <TagCloud
                className="tag-cloud-random-suffix-avoid-global"
                style={{
                  fontSize: 20,
                  padding: 5,
                }}
              >
                {this.props.toolsImages.map((image) => (
                  <div key={uuid()}>
                    <img src={image} />
                  </div>
                ))}
              </TagCloud>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
};

export default SkillCloud;
