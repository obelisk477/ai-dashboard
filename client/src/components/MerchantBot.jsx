import { Col, Row, Card, Form, FloatingLabel } from "react-bootstrap";
import { useState } from 'react'

const MerchantBot = props => {

    return (
        <Row>
            <Col xs={4}>
                <Card className="holo-card full-card">
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                        as="textarea"
                        placeholder="Ask the GMC..."
                        style={{ height: '50vh', backgroundColor: 'rgba(0, 66, 102, 0.203)' }}
                        />
                    </FloatingLabel>
                </Card>
            </Col>
            <Col xs={4}>
                    <Card className="holo-card full-card">
                        What is this about?
                        <Form>
                            <Form.Check className='check-container' type='checkbox'>
                                <Form.Check.Input type='checkbox' className='check'/>
                                <Form.Check.Label>Shopping Ads</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className='check-container' type='checkbox'>
                                <Form.Check.Input type='checkbox' className='check' />
                                <Form.Check.Label>Product Data Specifications</Form.Check.Label>
                            </Form.Check>
                        </Form>
                    </Card>
            </Col>
            <Col xs={4}>
                    <Card className="holo-card three-quarter-card">
                        <Form>
                            <Form.Check className='check-container' type='checkbox'>
                                <Form.Check.Input type='checkbox' className='check'/>
                                <Form.Check.Label>This is a checkbox</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className='check-container' type='checkbox'>
                                <Form.Check.Input type='checkbox' className='check' />
                                <Form.Check.Label>This is a checkbox</Form.Check.Label>
                            </Form.Check>
                        </Form>
                    </Card>
                    <Card className="holo-card quarter-card">
                        <p>hello</p>
                    </Card>
            </Col>
        </Row>
    )
}

export default MerchantBot