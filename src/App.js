import React, { Component } from 'react';
import './App.css';
import logo from './icon.svg';
import { Tooltip, Button, Icon } from 'antd';

/* DB */
var song1 = ["Your own personal jesus someone to hear your prayers", "🎹 Depeche Mode - Personal Jesus", "https://www.youtube.com/watch?v=u1xrNaTO1bI"];
var song2 = ["When you were here before couldn't look you in the eye", "😭 Radiohead - Creep", "https://www.youtube.com/watch?v=XFkzRNyygfk"];
var song3 = ["Today is gonna be the day that they're gonna throw it back to you", "🕶 Oasis - Wonderwall", "https://www.youtube.com/watch?v=bx1Bh8ZvH84"];
var song4 = ["London calling to the faraway towns", "🤘 The Clash - London calling", "https://www.youtube.com/watch?v=EfK-WX2pa8c"];
var song5 = ["Hey jude don't make it bad", "🎸 The Beatles - Hey Jude", "https://www.youtube.com/watch?v=A_MjCqQoLLA"];
var song6 = ["This is the end my only friend the end", "👖 The Doors - The End", "https://www.youtube.com/watch?v=JSUIQgEVDM4"];
var song7 = ["Mama just killed a man put a gun against his head", "👨🏻 Queen - Bohemian Rhapsody", "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"];
var song8 = ["In this life in this life in this life", "🦁 Bob Marley - Coming in from the cold", "https://www.youtube.com/watch?v=g3Z4PX2JI_c"];

/* GENERATE */
function generate() {
  var values = [song1,song3,song2,song5,song4,song7,song6, song8],
      valueToUse = values[Math.floor(Math.random() * values.length)];
  // do something with the selected value
  document.getElementById("song").innerHTML = valueToUse[0];
  document.getElementById("singer").innerHTML = valueToUse[1];
  document.getElementById("link").href = valueToUse[2];
}

/* COPY PASS */
function copyToClipboard()  {
  var textField = document.createElement('textarea')
  textField.innerText = document.getElementById("song").innerText
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}
const text = <span>Click to copy!</span>;

document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window object
  if(e.altKey && e.which == 65) {
       alert('Keyboard shortcut working!');
       return false;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-title">
          <h4>Passong</h4>
          <p className="App-subtitle">Generate strong passwords from song lyrics that are stupidly easy to remember.</p>
        </div>
        <div class="container">
          <Tooltip placement="top" title={text}>
            <div onClick={copyToClipboard} className="password" id="song">Hey must be a devil between us</div>
          </Tooltip>     
          <div className="name" id="singer">⚡️ Pixies - Hey</div>
          <div className="url"><a id="link" href="https://www.youtube.com/watch?v=MDACd-ShjHk" target="blank"><Icon type="play-circle-o" style={{ fontSize: 12, padding: 4 }} />Play song</a></div>
          <div className="action"><Button onClick={generate} type="primary" icon="retweet" size="large">Generate new password</Button></div>
        </div>
        <div className="footer">
        Created by <a href="https://github.com/dontpanicgr">@dontpanicgr</a>
        </div>
      </div>
    );
  }
}

export default App;