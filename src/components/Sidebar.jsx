import {Col, Nav, Collapse, Image} from "react-bootstrap";
import DropdownNav from './DropdownNav'
import {sidebarLinkDropdowns} from './componenData.json'

const Sidebar = props => {

    return (
        <Col xs={2} id='sidebar'>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Image src='Picture1.png' id='roi-logo'/>
            {sidebarLinkDropdowns.map(({parentName, childLinks}) => (
                <DropdownNav key={parentName} parentName={parentName} childLinks={childLinks}/>
            ))}
            </Nav>
        </Col>
    )
}

export default Sidebar