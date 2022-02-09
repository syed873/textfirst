import React, {useState}  from 'react';

export default function (props)
{
    
  const handleUpClick = ()=>{
      let newtext= text.toUpperCase();
      setText(newtext);
      props.showalert("Convert to Upper Case","success");
  }

  const handleLOClick = ()=>{
    let newtext= text.toLowerCase();
    setText(newtext);
    props.showalert("Convert to Lower Case","success");
}
  
 const handleremovespace = () =>{
   let newtext=text.split(/[ ]+/);
   setText(newtext.join(" "))
   props.showalert("Extra spaces removed","success");
 }

const handlecopy = () =>{
   var text= document.getElementById('mybox');
   text.select();
   navigator.clipboard.writeText(text.value);
   document.getSelection().removeAllRanges();
   props.showalert("Copy to chipboard text","success");
}


const handleToClear = ()=>{
    let newtext= '';
    setText(newtext);
    props.showalert("Clear Text","success");
}

  const handleOnchange = (event)=>{
      setText(event.target.value)
  }
  const [text,setText]=useState('');
    return( 
  <div className="container"> 
<div className="mb-3" style= {{color: props.mode==='dark'?'white':'#042743'}}> 
    <h1  >{props.heading}  </h1>

  <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'#042743'}}   rows="8"></textarea>
  <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick} >Convert To Upper Case</button>
  <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLOClick} >Convert To Lower Case</button>
  <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleToClear} >Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary m-2"  onClick={handlecopy} >Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary m-2"  onClick={handleremovespace} >Remove Extra Space</button>
</div>
<div style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element) =>{return element.length!==0} ).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0} ).length} Minites To Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
  </div>
  )
}
