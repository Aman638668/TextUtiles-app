import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClicks = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };

  const handleLoClicks = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  };

  const handleClearClicks = () => {
    setText('');
    props.showAlert("Text Cleared", "success");
  };

  const handleSeClicks = () => {
    let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
      return c.toUpperCase();
    });
    setText(newText);
    props.showAlert("Converted To Sentence Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClicks}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClicks}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleSeClicks}>Convert To Sentence Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClicks}>Clear Text Box</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview Your Text</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview"}</p>
      </div>
    </>
  );
}
