// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'

// class uploadFile extends Component {
//     state = {
//         selectedFile: null
//     }

//     fileSelectedHandler = event => {
//         this.setState({
//         selectedFile: event.target.files[0]
//         })
//     }

//     fileUploadHandler = () => {
//         const fd = new FormData()
//         fd.append('image', this.state.selectedFile, this.state.name);
//         // Use firebase cloud as an end point in the tutorial
//         // ??? What's the database server that we have?
//         axios.post('https://...', fd, {
//             onUploadProgress: ProgressEvent => {
//                 console.log("Upload Progress: " + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + "%" )
//             }
//         })
//             .then(res => {
//                 console.log(res);
//             });

//     }

//     render() {
//         return (
//             <div className="uploadFile.js">
//                 <input 
//                 sytle={{display: 'none'}} 
//                 type="file" 
//                 onChange={this.fileSelectedHandler}
//                 ref={fileInput => this.fileInput = fileInput}/>
//                 <button onClick={() => this.fileInput.click()}>Pick File</button>
//                 <button onClick={this.fileUploadHandler}>Upload</button>
//             </div>
//         )
//     }
// }


// ----------------------------

import React, { Component } from 'react'
import './App.css'

export class uploadFile extends Component {
    state={
        profileImag: "path of the image"
    }
    render() {
        return (
            
        )
    }
}

function uploadFile() {
    return (
        <div className = "uploadFile">
            <header classNmae = "App-header">
                <imag scr={logo className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}