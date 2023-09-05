import {Col, Nav, Collapse, Image, Row} from "react-bootstrap";
import { useState } from 'react'
import { overviewData } from './componenData.json'


const DashOverview = props => {

    return (
        <Row>
            {overviewData.map(({title, faClasses, bodyText}, i) => (
                <Col 
                    xs={6} 
                    className='welcome-card'
                    key={i}
                >
                    <h3>{title}<i className={faClasses}></i></h3>
                    <p>{bodyText}</p>    
                </Col>
            ))}
        </Row>
    )
}

export default DashOverview

