import { Col, Row, Card, Form, FloatingLabel, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from 'react'

const MerchantBot = props => {

    const [activeQuestion, setActiveQuestion] = useState(null)
    const [loading, setLoading] = useState(false)
    const [answer, setAnswer] = useState(null)
    const [isnotDefault, setIsNotDefault] = useState(false)
    const [sources, setSources] = useState([])

        useEffect(() => {
            let value = document.querySelector('input[name="responseType"]:checked').value;
            let extraContext = document.getElementById('floatingTextarea3')

            if (activeQuestion) {

                let finalQuestion = activeQuestion

                if (value != 'default') {
                    console.log('added modification')
                    finalQuestion += '; answer this as an ' + value;
                }

                if (extraContext) {
                    finalQuestion += '; here is more context to help answer the question: '+extraContext.value
                }

                finalQuestion += '; this is for the Google Merchant Center'

                setLoading(true)

                fetch('http://localhost:3001/api/merchantChat', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                },
                    body: JSON.stringify({
                        question: finalQuestion
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        setSources(data.source)
                        setAnswer(data.result.text)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        }, [activeQuestion]);


    const handleQuestionSubmit = (e) => {
        let form = document.getElementById('floatingTextarea2')
        setActiveQuestion(form.value)
    }

    const handleClick = (e) => {
        if(e.target instanceof HTMLInputElement && e.target.parentNode.children[0].value.match(/email/) != null) {
            setIsNotDefault(true)
        } else if (e.target.parentNode.children[0].value.match(/email/) == null && isnotDefault){
            setIsNotDefault(false)
        }
    }

    return (
        <Row>
            <Col xs={4}>
                <Card className="holo-card full-card">
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                        as="textarea"
                        placeholder="Ask the GMC..."
                        style={{ height: '45vh', backgroundColor: 'rgba(0, 66, 102, 0.203)' }}
                        />
                    </FloatingLabel>
                    <Button id="ask-button" onClick={handleQuestionSubmit}>Ask the GMC</Button>
                </Card>
            </Col>
            <Col xs={4}>
                    <Card className="holo-card full-card">
                        <h5>Format response as ...</h5>
                        <Form id="response-type-form" onClick={handleClick}>
                            <Form.Check className='radio-container' type='radio'>
                                <Form.Check.Input type='radio' className='radio' name='responseType' value='default' defaultChecked={true}/>
                                <Form.Check.Label>Default output</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className='radio-container' type='radio'>
                                <Form.Check.Input type='radio' className='radio' name='responseType' value='internal email'/>
                                <Form.Check.Label>Internal company email</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className='radio-container' type='radio' >
                                <Form.Check.Input type='radio' className='radio' name='responseType' value='external email' />
                                <Form.Check.Label>External client email</Form.Check.Label>
                            </Form.Check>
                        </Form>
                        {isnotDefault? (
                            <FloatingLabel controlId="floatingTextarea3">
                                <Form.Control
                                as="textarea"
                                placeholder="Add additional context (initial question, GMC history, suspension deadlines, etc.) . . ."
                                style={{ height: '20vh', backgroundColor: 'rgba(0, 66, 102, 0.203)' }}
                                />
                            </FloatingLabel>
                        ): (
                            false
                        )}
                    </Card>
            </Col>
            <Col xs={4}>
                    <Card className="holo-card three-quarter-card overflow">
                        {loading? (
                            <Spinner animation="border" role="status"></Spinner>
                        ): (
                            <p id='chat-response'>{answer}</p>
                        )}
                    </Card>
                    <Card id="source-area"className="holo-card quarter-card">
                        {loading ? (
                            <Spinner animation="border" role="status"></Spinner>
                        ) : (
                            sources.length > 0 ? (
                                sources.map(source => (
                                    <p key={source.id}><a href={source}>{source}</a></p>
                                ))
                            ) : (
                                <p></p> 
                            )
                        )}
                    </Card>
            </Col>
        </Row>
    )
}

export default MerchantBot