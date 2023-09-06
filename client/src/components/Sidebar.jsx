import { Col, Nav, Collapse, Image } from "react-bootstrap";
import { useState } from "react";
import DropdownNav from './DropdownNav'
import { sidebarLinkDropdowns } from './componenData.json'

const Sidebar = ({currentPage, handlePageChange}) => {

    const [activeDropdown, setActiveDropdown] = useState(null)

    return (
        <Col xs={2} id='sidebar'>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Image src='Picture1.png' id='roi-logo' onClick={() => handlePageChange('ROI x AI')}/>
            {sidebarLinkDropdowns.map(({parentName, childLinks}) => (
                <DropdownNav 
                    handleClick={setActiveDropdown} 
                    key={parentName} 
                    parentName={parentName} 
                    childLinks={childLinks}
                    openTab={activeDropdown}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            ))}
            </Nav>
        </Col>
    )
}

export default Sidebar