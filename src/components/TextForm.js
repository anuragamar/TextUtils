import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("text cleared", "success")
    }
    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }
    
    const [text, setText] = useState('');
    // text = "new text"; //--> wrong way to change the state
    // setText("new text"); //--> correct way to change the state
    return (
        <>
        <div className='container'>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'#fbdddd', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{0.08*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text to preview it here"}</p>
        </div>
        </>
    )
}
