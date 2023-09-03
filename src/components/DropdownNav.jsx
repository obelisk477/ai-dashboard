import {Col, Nav, Collapse, Image} from "react-bootstrap";
import { useState } from 'react'

const DropdownNav = ({parentName, childLinks}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Nav.Link
                onClick={() => setOpen(!open)}
                aria-controls={parentName + "-dropdown"}
                aria-expanded={open}
            >
                {parentName}
            </Nav.Link>
            <Collapse in={open}>
                <div id={parentName + "-dropdown"}>
                    {childLinks.map((childLink, i) => (
                        <Nav.Link key={i}>{childLink}</Nav.Link>
                    ))}
                </div>
            </Collapse>
        </>
    )
}

export default DropdownNav