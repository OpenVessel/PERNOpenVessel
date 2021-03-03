import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from 'react-bootstrap';
// import React from 'react';
import styled from 'styled-components';// Style the Button component

// import React from 'react';
// import styled from 'components';

// const Account = () => {
// return (
//     <div className="jumbotron mt-5">
//         <h1>Account Page</h1>
//         <div className="text-center" style ={{paddingTop: "5vh"}}>
            
//             <div id="logo-container">
//                 <div id="openVessel-logo">
//                     <img alt="OpenVessel Logo" src={process.env.PUBLIC_URL + '/img/OpenVessel Logo.png'} style={{width: '70%', height: '40%'}}></img>
//                 </div>
//             </div>

//             {/* <div class="content-section">
//                 <div className="text-center">
// 		            <img alt="rounded-circle account-img" src={process.env.PUBLIC_URL + 'data:image/jpeg;charset=utf-8'} style={{width: '70%', height: '40%'}}></img>
// 		            <div class="media-body">
// 		            <h2 style='color: white;' id='username-text'>{{current_user.username }}</h2>
// 	                <p style='color: white;' id='email-text'>{{current_user.email }}</p>
// 		            </div>
//                 </div>
//             </div> */}
            

//             <div>
//             <Container>
//                 <Row className="justify-content-md-center">
//                 <Col xs lg="2">
//                     <Link to="/Upload"><Button>Upload Image</Button></Link>
//                 </Col>
//                     <Col xs lg="2">
//                     <Link to="/Update"><Button>Update Profile Information</Button></Link>
//                 </Col>
//                 </Row>
//             </Container>
//             </div>
//     </div>
//     </div>
// );
// };

// export default Account;



// import React, { useState } from "react";
// import "client/src/App.css";
function Form(props) {
const [Username, setUsername] = useState("");
// const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
const handleClick = event => {
    hiddenFileInput.current.click();
  };  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
    };

const Button = styled.button`
   /* Insert your favorite CSS code to style a button */
`;
// const FileUploader = props => {  // Create a reference to the hidden file input element

// };

return (
    <form>
        <div className="text-center" style ={{paddingTop: "25vh"}}>
            <div id="logo-container">
                    <div id="openVessel-logo">
                        <img alt="default_user image" src={process.env.PUBLIC_URL + '/img/default_user.png'} style={{width: '20%', height: '20%'}}></img>
                    </div>
                </div>
        
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <input
                            value={Username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username"
                            type="text"
                            name="setUsername"
                            required
                        />
                    </Col>

                    <Col xs lg="2">
                    
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email address"
                            type="email"
                            name="email"
                            required
                        />
                    </Col>

                    <Col xs lg="2">
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                        />
                    </Col>

                    
                </Row> 
                <Button onClick={handleClick}>
                        Upload a file
                        </Button>
                        <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display: 'none'}} 
                    />

            </Container>
            <button type="submit">Submit</button>
        </div>
    </form>

);
    };
    export default Form;


// // const Button = styled.button`
// //   /* Insert your favorite CSS code to style a button */
// // `;
// const FileUploader = props => {  // Create a reference to the hidden file input element
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
// };  return (
//     <>
//         <Button onClick={handleClick}>
//         Upload a file
//         </Button>
//         <input
//         type="file"
//         ref={hiddenFileInput}
//         onChange={handleChange}
//         style={{display: 'none'}} 
//     />
//     </>
// );
// export default FileUploader;



// // Style the Button component
// // const Button = styled.button`
//   /* Insert your favorite CSS code to style a button */
// // `;
// const FileUploader = props => {
//     // Create a reference to the hidden file input element
// const hiddenFileInput = React.useRef(null);

//     // Programatically click the hidden file input element
//     // when the Button component is clicked
// const handleClick = event => {
//     hiddenFileInput.current.click();
// };
//     // Call a function (passed as a prop from the parent component)
//     // to handle the user-selected file 
// const handleChange = event => {
//     const fileUploaded = event.target.files[0];
//     props.handleFile(fileUploaded);
//     };
//     return (
//     <>
//     <Button onClick={handleClick}>
//         Upload a file
//     </Button>
//     <input
//         type="file"
//         ref={hiddenFileInput}
//         onChange={handleChange}
//         style={{display: 'none'}} 
//     />
//     </>
//     );


// export default Form;


// };
// export default Form FileUploader;
