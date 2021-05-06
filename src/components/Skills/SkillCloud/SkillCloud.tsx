import React, { Component } from "react";
import uuid from "react-uuid";
import TagCloud from "react-tag-cloud";

import "./styles.css";


interface Props {
  description: string;
  toolsImages: string[];
}

class SkillCloud extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 7000)
  }

  // images = 

  render() {
    console.log(this.props.toolsImages)
    return (
      <div>
        <div className="app-outer">
          <h1>Work</h1>
          <p>{this.props.description}</p>
          <h2>Languages and Skills</h2>
          <div className="app-inner">
            <TagCloud
              className="tag-cloud"
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
        </div>
      </div>
    );
  }
};

export default SkillCloud;
