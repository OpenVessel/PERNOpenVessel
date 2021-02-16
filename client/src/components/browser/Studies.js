import React, { useState, useEffect } from "react";
import { Button, Container, Jumbotron } from 'react-bootstrap';

import { orthancQuery } from '../../backendTools';

const BrowseStudies = () => {

    const [studies, setStudies] = useState([]);
    
    
    useEffect(() => {
        // componentDidMount
        getStudies();

        // componentWillUnmount
        return null
    }, 
    // componentShouldUpdate
    [])

    const getStudies = () => {
        orthancQuery('/studies')
        .then(studyIDs => {
            studyIDs.map((id, i) => {
                orthancQuery(`/studies/${id}`)
                .then(studyData => console.log(studyData))
                .catch(err => console.log(err))
            })
            
        })
        .catch(err => console.log(err))
    }

    return (
        <Container>        
            <Jumbotron className="mt-5">
                <h1>Studies</h1>
                <Button onClick={getStudies}>Get Studies</Button>
                {studies}
            </Jumbotron>
        </Container>
        );
    };

export default BrowseStudies;