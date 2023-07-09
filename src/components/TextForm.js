import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = () => {
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success")
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="my-3">{props.heading}</h2>
        <div className="my-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          ConvertoUppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          ConvertoLowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="my-3">Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} letters
        </p>
        <h2>Preview</h2>
        <p>
          { text.length > 0
            ? text
            : "Enter the text in the above text area to preview the text here"}
        </p>
      </div>
    </>
  );
}
