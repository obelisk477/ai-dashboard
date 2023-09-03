import './App.css'
// import Dashboard from './pages/Dashboard.jsx'
import {Container, Row, Col, Nav, Collapse, Button, Image} from "react-bootstrap";
import Sidebar from './components/Sidebar.jsx'

function App() {

  return (
    <>
      <Container fluid>
        <Row id='main'>
          <Sidebar />
          <Col xs={10} id='dash'>
            <Row id='dash-header'>
              <h1>ROI x AI</h1>
            </Row>
            <Row>
            <Col className='welcome-card'>
              <h3>NLP / Chatbots<i class="roi-blue fa-regular fa-file-lines"></i></h3>
              <p>Work with custom chatbots & language models trained on ROI best practices, platform documentation, and knowledge from seasoned experts</p>
            </Col>
            <Col className='welcome-card'>
              <h3>Forecasting<i class="roi-blue fa-solid fa-chart-line"></i></h3>
              <p>Use machine learning to predict end-of-month revenues based on client historical data, forecast ROAS trends, and help you hit client budgets</p>
            </Col>
           </Row>
            <Row>
            <Col className='welcome-card'>
              <h3>Clustering<i class="roi-blue fa-solid fa-diagram-project"></i></h3>
              <p>With applications in paid search keywords, SEO research, and product feed categorization, machine learning clustering algorithms can help you dynamically group textual data</p>
            </Col>
            <Col className='welcome-card'>
              <h3>Modeling<i class="roi-blue fa-solid fa-magnifying-glass-chart"></i></h3>
              <p>Use the power of artificial intelligence to help efficiently allocate your clients' marketing budget. Also, insights provided by models can help show the importance of upper funnel spend and channels</p>
            </Col>
           </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App


