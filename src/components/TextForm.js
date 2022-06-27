import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = (event) => {
    let text = document.getElementById('myBox');
    //text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraClick = (event) => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {' '}
          {text.split(/\s+/).filter((element)=>{ return element.length!==0  }).length} words and {text.length} characters
        </p>
        <p> It takes {0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} minutes to read the entire text </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
};

export default TextForm;
