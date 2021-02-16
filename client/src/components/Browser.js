import React, { useState } from "react";
import { Button } from 'react-bootstrap';

import { orthancQuery } from '../backendTools';

const Browser = () => {

    const [studies, setStudies] = useState([]);
    
    const getStudies = () => {
        orthancQuery('/studies')
        .then(studyIDs => {
            studyIDs.map((id, i) => {
                orthancQuery(`/studies/${id}`)
                .then(studyData => {
                    console.log(studyData)
                })
                .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="jumbotron mt-5">
            <h1>Browser</h1>
            <Button onClick={getStudies}>Get Studies</Button>
            {
                studies.map((studyId, i) => {
                    return(<li key={i}>{studyId}</li>)
                })
            }
        </div>
    );
    };

export default Browser;