import './App.css'
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from './components/Sidebar.jsx'
import DashOverview from './components/DashOverview';
import { useState } from 'react';
import MerchantBot from './components/MerchantBot';
import SEOBot from './components/SEOBot';
import BudgetProj from './components/BudgetProj';
import FeedTest from './components/FeedTest';
import ChannelAnalysis from './components/ChannelAnalysis';
import SearchTerm from './components/SearchTerm';
import FeedCat from './components/FeedCat';

function App() {

  const [currentPage, setCurrentPage] = useState('Overview');

  const renderPage = () => {
    if (currentPage === 'MerchantBot') {
      return <MerchantBot />;
    }
    if (currentPage === 'SEOBot') {
      return <SEOBot />;
    }
    if (currentPage === 'Budget Projections') {
      return <BudgetProj />;
    }
    if (currentPage === 'Feed Test Projections') {
      return <FeedTest />;
    }
    if (currentPage === 'Channel Analysis') {
      return <ChannelAnalysis />;
    }
    if (currentPage === 'Search Term Grouping') {
      return <SearchTerm />;
    }
    if (currentPage === 'Feed Categories') {
      return <FeedCat />;
    }
    return <DashOverview />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Container fluid>
        <Row id='main'>
          <Sidebar currentPage={currentPage} handlePageChange={handlePageChange}/>
          <Col xs={10} id='dash'>
            <Row id='dash-header'>
              <h1>ROI x AI</h1>
            </Row>
            {renderPage()}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App


