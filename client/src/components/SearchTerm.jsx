import { Col, Row, Card } from "react-bootstrap";
import { useState } from 'react'

const SearchTerm = props => {


    const handleUploadClick = (e) => {
        const fileElem = document.getElementById("fileElem");

        console.log(e)   
        if (fileElem) {
            fileElem.click();
          }
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                const rows = content.split('\n');
                rows.forEach(row => {
                    const columns = row.split(',');
                    // Do something with the columns here
                    console.log(columns)
                });
            };
            reader.readAsText(file);
        }
    }

    return (
        <Row>
            <Col xs={4}>
                <Card className="holo-card three-quarter-card" id="search-term-instructions">
                    <p>To make the best use of this tool:</p>
                    <ol>
                        <li>
                            Download a search term report from Google Ads
                                <ul>
                                    <li>
                                        Filter out branded and competitor-branded campaigns
                                    </li>
                                    <li>
                                        Filter for "Impressions &gt; 1"
                                    </li>
                                    <li>
                                        Include no more than 30 days worth of data. This can be re-run regularly as needed to analyze seasonal trends. Or ideally, use last years "season" to analyze trends for the upcoming season.
                                    </li>
                                </ul>
                        </li>
                        <li>
                            Upload the file below
                        </li>
                        <li>
                            The output on the right can be considered a broad representation of the concepts around which most searches are based. This can be used to inform search campaign structure
                        </li>
                    </ol>
                </Card>
                <Row>
                    <Col>
                        <Card className="holo-card quarter-card" id="upload-card" onClick={handleUploadClick}>
                            <input
                                type="file"
                                id="fileElem"
                                accept=".csv"
                                style={{display: 'none'}}
                                onChange={handleFileUpload}
                            />
                            <i className="fas fa-file-upload"></i>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="holo-card quarter-card" >
                        </Card>
                    </Col>
                </Row>

            </Col>
            <Col xs={4}>
                    <Card className="holo-card full-card">
                    </Card>
            </Col>
            <Col xs={4}>
                    <Card className="holo-card three-quarter-card overflow">

                    </Card>
            </Col>
        </Row>
    )
}

export default SearchTerm