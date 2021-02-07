import React, { Component } from "react";
import marked from "marked";
import placeHolderText from "./placeHolderText";

marked.setOptions({
  breaks: true,
});
class MarkdownPrev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeHolderText,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    const { input } = this.state;
    return (
      <div className="container-fluid">
        <div className="row text-center py-2 bg-primary text-white">
          <h2>Markdown Previewer</h2>
        </div>
        <div className="row small justify-content-center">
          <div className="col-6  vh-100 window">
            <h4 className="text-center card-header py-3">Editor</h4>
            <textarea
              className="editor form-control"
              id="editor"
              value={input}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-6  vh-100 window">
            <h4 className="text-center card-header py-3">Previewer</h4>
            <div
              className="preview rounded form-control"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(input) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPrev;
