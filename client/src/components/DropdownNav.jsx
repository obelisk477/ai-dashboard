import {Col, Nav, Collapse, Image} from "react-bootstrap";
import { useState } from 'react'

const DropdownNav = ({openTab, handleClick, parentName, childLinks, handlePageChange}) => {

    const openStatus = openTab == parentName

    return (
        <>
            <Nav.Link
                onClick={() => {
                    handleClick(parentName)

                }}
                aria-controls={parentName + "-dropdown"}
                aria-expanded={openStatus}
                className="parent-link"
            >
                {parentName}
            </Nav.Link>
            <Collapse in={openStatus}>
                <div id={parentName + "-dropdown"}>
                    {childLinks.map((childLink, i) => (
                        <Nav.Link 
                            key={i} 
                            className="child-link"
                            onClick={() => handlePageChange(childLink)}
                        >
                            {childLink}
                        </Nav.Link>
                    ))}
                </div>
            </Collapse>
        </>
    )
}

export default DropdownNav