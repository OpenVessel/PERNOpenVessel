import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    };
    const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
        const res = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
            setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
            );
          // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
        }
        });
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        setMessage('File Uploaded');
    } catch (err) {
        if (err.response.status === 500) {
        setMessage('There was a problem with the server');
        } else {
        setMessage(err.response.data.msg);
        }
    }
    };
    return (
    <Fragment>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
            <div className='custom-file mb-4'>
            <input
                type='file'
                className='custom-file-input'
                id='customFile'
                onChange={onChange}
            />
            <label className='custom-file-label' htmlFor='customFile'>
                {filename}
            </label>
            </div>
            <Progress percentage={uploadPercentage} />
            <input
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-4'
        />
        </form>
        {uploadedFile ? (
            <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
                <h3 className='text-center'>{uploadedFile.fileName}</h3>
                <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
            </div>
            </div>
        ) : null}
        </Fragment>
    );
};
export default FileUpload;
























// // import React, {useState} from "react";
// // import { Link } from "react-router-dom";
// // import { Button, Row, Col, Container } from 'react-bootstrap';
// // // import React from 'react';
// // import styled from 'styled-components';// Style the Button component

// // import React from 'react';
// // import styled from 'components';

// // const Account = () => {
// // return (
// //     <div className="jumbotron mt-5">
// //         <h1>Account Page</h1>
// //         <div className="text-center" style ={{paddingTop: "5vh"}}>
            
// //             <div id="logo-container">
// //                 <div id="openVessel-logo">
// //                     <img alt="OpenVessel Logo" src={process.env.PUBLIC_URL + '/img/OpenVessel Logo.png'} style={{width: '70%', height: '40%'}}></img>
// //                 </div>
// //             </div>

// //             {/* <div class="content-section">
// //                 <div className="text-center">
// // 		            <img alt="rounded-circle account-img" src={process.env.PUBLIC_URL + 'data:image/jpeg;charset=utf-8'} style={{width: '70%', height: '40%'}}></img>
// // 		            <div class="media-body">
// // 		            <h2 style='color: white;' id='username-text'>{{current_user.username }}</h2>
// // 	                <p style='color: white;' id='email-text'>{{current_user.email }}</p>
// // 		            </div>
// //                 </div>
// //             </div> */}
            

// //             <div>
// //             <Container>
// //                 <Row className="justify-content-md-center">
// //                 <Col xs lg="2">
// //                     <Link to="/Upload"><Button>Upload Image</Button></Link>
// //                 </Col>
// //                     <Col xs lg="2">
// //                     <Link to="/Update"><Button>Update Profile Information</Button></Link>
// //                 </Col>
// //                 </Row>
// //             </Container>
// //             </div>
// //     </div>
// //     </div>
// // );
// // };

// // export default Account;



// // import React, { useState } from "react";
// // import "client/src/App.css";
// function Form(props) {
// const [Username, setUsername] = useState("");
// // const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const hiddenFileInput = React.useRef(null);

//   // Programatically click the hidden file input element
//   // when the Button component is clicked
// const handleClick = event => {
//     hiddenFileInput.current.click();
//   };  // Call a function (passed as a prop from the parent component)
//   // to handle the user-selected file 
// const handleChange = event => {
//     const fileUploaded = event.target.files[0];
//     props.handleFile(fileUploaded);
//     };

// const Button = styled.button`
//    /* Insert your favorite CSS code to style a button */
// `;
// // const FileUploader = props => {  // Create a reference to the hidden file input element

// // };

// return (
//     <form>
//         <div className="text-center" style ={{paddingTop: "25vh"}}>
//             <div id="logo-container">
//                     <div id="openVessel-logo">
//                         <img alt="default_user image" src={process.env.PUBLIC_URL + '/img/default_user.png'} style={{width: '20%', height: '20%'}}></img>
//                     </div>
//                 </div>
        
//             <Container>
//                 <Row className="justify-content-md-center">
//                     <Col xs lg="2">
//                         <input
//                             value={Username}
//                             onChange={e => setUsername(e.target.value)}
//                             placeholder="Username"
//                             type="text"
//                             name="setUsername"
//                             required
//                         />
//                     </Col>

//                     <Col xs lg="2">
                    
//                         <input
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                             placeholder="Email address"
//                             type="email"
//                             name="email"
//                             required
//                         />
//                     </Col>

//                     <Col xs lg="2">
//                         <input
//                             value={password}
//                             onChange={e => setPassword(e.target.value)}
//                             placeholder="Password"
//                             type="password"
//                             name="password"
//                             required
//                         />
//                     </Col>

                    
//                 </Row> 
//                 <Button onClick={handleClick}>
//                         Upload a file
//                         </Button>
//                         <input
//                         type="file"
//                         ref={hiddenFileInput}
//                         onChange={handleChange}
//                         style={{display: 'none'}} 
//                     />

//             </Container>
//             <button type="submit">Submit</button>
//         </div>
//     </form>

// );
//     };
//     export default Form;


// // // const Button = styled.button`
// // //   /* Insert your favorite CSS code to style a button */
// // // `;
// // const FileUploader = props => {  // Create a reference to the hidden file input element
// // const hiddenFileInput = React.useRef(null);

// //   // Programatically click the hidden file input element
// //   // when the Button component is clicked
// // const handleClick = event => {
// //     hiddenFileInput.current.click();
// //   };  // Call a function (passed as a prop from the parent component)
// //   // to handle the user-selected file 
// // const handleChange = event => {
// //     const fileUploaded = event.target.files[0];
// //     props.handleFile(fileUploaded);
// // };  return (
// //     <>
// //         <Button onClick={handleClick}>
// //         Upload a file
// //         </Button>
// //         <input
// //         type="file"
// //         ref={hiddenFileInput}
// //         onChange={handleChange}
// //         style={{display: 'none'}} 
// //     />
// //     </>
// // );
// // export default FileUploader;



// // // Style the Button component
// // // const Button = styled.button`
// //   /* Insert your favorite CSS code to style a button */
// // // `;
// // const FileUploader = props => {
// //     // Create a reference to the hidden file input element
// // const hiddenFileInput = React.useRef(null);

// //     // Programatically click the hidden file input element
// //     // when the Button component is clicked
// // const handleClick = event => {
// //     hiddenFileInput.current.click();
// // };
// //     // Call a function (passed as a prop from the parent component)
// //     // to handle the user-selected file 
// // const handleChange = event => {
// //     const fileUploaded = event.target.files[0];
// //     props.handleFile(fileUploaded);
// //     };
// //     return (
// //     <>
// //     <Button onClick={handleClick}>
// //         Upload a file
// //     </Button>
// //     <input
// //         type="file"
// //         ref={hiddenFileInput}
// //         onChange={handleChange}
// //         style={{display: 'none'}} 
// //     />
// //     </>
// //     );


// // export default Form;


// // };
// // export default Form FileUploader;


// // ------------------------

// // import React, { useState } from 'react';
// // import ImageUploader from 'react-images-upload';
// // import Axios from 'axios';

// // // import './App.css';

// // const UploadComponent = props => (
// //     <form>
// //         <label>
// //             File Upload URL:
// //             <input id="urlInput" type="text" onChange={props.onUrlChange} value={props.url}></input>
// //         </label>
// //         <ImageUploader
// //             key="image-uploader"
// //             withIcon={true}
// //             singleImage={true}
// //             withPreview={true}
// //             label="Maximum size file: 5MB"
// //             buttonText="Choose an image"
// //             onChange={props.onImage}
// //             imgExtension={['.jpg', '.png', '.jpeg']}
// //             maxFileSize={5242880}
// //         ></ImageUploader>
// //     </form>
// // );

// // const App = () => {
// //     const [progress, setProgress] = useState('getUpload');
// //     const [url, setImageURL] = useState(undefined);
// //     const [errorMessage, setErrorMessage] = useState('');

// //     const onUrlChange = e => {
// //         setImageURL(e.target.value);
// //     };

// //     const onImage = async (failedImages, successImages) => {
// //         if (!url) {
// //             console.log('missing Url');
// //             setErrorMessage('missing a url to upload to');
// //             setProgress('uploadError');
// //             return;
// //         }

// //         setProgress('uploading');

// //         try {
// //             console.log('successImages', successImages);
// //             const parts = successImages[0].split(';');
// //             const mime = parts[0].split(':')[1];
// //             const name = parts[1].split('=')[1];
// //             const data = parts[2];
// //             const res = await Axios.post(url, { mime, name, image: data });

// //             setImageURL(res.data.imageURL);
// //             setProgress('uploaded');
// //         } catch (error) {
// //             console.log('error in upload', error);
// //             setErrorMessage(error.message);
// //             setProgress('uploadError');
// //         }
// //     };

// //     const content = () => {
// //         switch (progress) {
// //             case 'getUpload':
// //                 return <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url} />;
// //             case 'uploading':
// //                 return <h2>Uploading....</h2>;
// //             case 'uploaded':
// //                 return <img src={url} alt="uploaded" />;
// //             case 'uploadError':
// //                 return (
// //                     <>
// //                         <div>Error message = {errorMessage}</div>
// //                         <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url} />
// //                     </>
// //                 );
// //         }
// //     };

// //     return (
// //         <div className="App">
// //             <h1>Image Upload Website</h1>
// //             {content()}
// //         </div>
// //     );
// // };

// // export default App;

// // -------------



// // import React from 'react';
// // import ImageUploader from 'react-images-upload';

// // class App extends React.Component {

// //     constructor(props) {
// //         super(props);
// //         this.state = { pictures: [] };
// //         this.onDrop = this.onDrop.bind(this);
// //     }

// //     onDrop(picture) {
// //         this.setState({
// //             pictures: this.state.pictures.concat(picture),
// //         });
// //     }

// //     render() {
// //         return (
// //             <ImageUploader
// //                 withIcon={true}
// //                 buttonText='Choose images'
// //                 onChange={this.onDrop}
// //                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
// //                 maxFileSize={5242880}
// //             />
// //         );
// //     }
// // }

// // ------------------------

// // import React from 'react';
// // import FileUpload from './components/FileUpload';
// // import './App.css';

// // const App = () => (
// //     <div className='container mt-4'>    
// //         <h4 className='display-4 text-center mb-4'>
// //             <i className='fab fa-react' /> React File Upload
// //         </h4>

// //         <FileUpload />
// //     </div>
// // );

// // export default App;
