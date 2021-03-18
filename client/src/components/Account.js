import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from "react";
import {FileUpload} from "./FileUpload";

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

                {/* <Button onClick={handleClick}>
                        Upload a file
                        </Button>
                        <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display: 'none'}} 
                    /> */}

                <h4 className='display-4 text-center mb-4'>
                    <i className='fab fa-react' /> 
                    </h4>

                    <FileUpload />

            </Container>

            {/* <button type="submit">Submit</button> */}
        </div>
    </form>
    );
};

export default Form;

// ---------------------------

// import React from "react";
// import { Link } from "react-router-dom";
// import { Button, Row, Col, Container } from 'react-bootstrap';
// import styled from 'styled-components';
// import { useState } from "react";
// import {FileUpload} from "./FileUpload";

// function Form(props) {
//     const [Username, setUsername] = useState("");
//     // const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const hiddenFileInput = React.useRef(null);
    
//       // Programatically click the hidden file input element
//       // when the Button component is clicked
//     const handleClick = event => {
//         hiddenFileInput.current.click();
//         FileUpload()
//       };  // Call a function (passed as a prop from the parent component)
//       // to handle the user-selected file 
//     const handleChange = event => {
//         const fileUploaded = event.target.files[0];
//         props.handleFile(fileUploaded);
//         };
    
//     const Button = styled.button`
//        /* Insert your favorite CSS code to style a button */
//     `;
//     // const FileUploader = props => {  // Create a reference to the hidden file input element
    
//     // };
    
//     return (
//         <form>
//             <div className="text-center" style ={{paddingTop: "25vh"}}>
//                 <div id="logo-container">
//                         <div id="openVessel-logo">
//                             <img alt="default_user image" src={process.env.PUBLIC_URL + '/img/default_user.png'} style={{width: '20%', height: '20%'}}></img>
//                         </div>
//                     </div>
            
//                 <Container>
//                     <Row className="justify-content-md-center">
//                     <Col xs lg="2">
//                     <input
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
//     );
// };

// export default Form;






