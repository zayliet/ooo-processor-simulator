import React from 'react';
import { useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'; // move into Table.tsx

import { Clock } from "./simulator/clock";
import InstructionList from "./components/InstructionList";
import SimulationControls from "./components/SimulationControls";

const App: React.FC = () => {
  const [clock] = useState(() => new Clock());
  const [cycle, setCycle] = useState(0);

  function handleStep() {
    clock.step();
    setCycle(clock.cycle);
  }
  function handleReset() {
    clock.reset();
    setCycle(clock.cycle);
  }

  const tempInstructions = ["instruction 1", "instruction 2"];
  const fetchTitle = "Fetch";

  
  return (
    <Container className="justify-center">
      <Row>
        <h1>Out-of-Order Processor Simulator</h1>
      </Row>

      <Row className="justify-content-md-center">
        <div className="inline-container">
          <div>
            <p>Cycle: {cycle}</p>
          </div>
          <div>
            <SimulationControls
              onStep={handleStep}
              onReset={handleReset}
            />
          </div>
        </div>
      </Row>

      <Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Stage 1: Fetch</Accordion.Header>
            <Accordion.Body>
              <InstructionList items={tempInstructions}></InstructionList>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Stage 2: Decode</Accordion.Header>
            <Accordion.Body>
              <InstructionList items={tempInstructions}></InstructionList>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion defaultActiveKey="2">
          <Accordion.Item eventKey="2">
            <Accordion.Header>Stage 3: Rename</Accordion.Header>
            <Accordion.Body>
              <div className="pb-3">
                <Container>
                  <Row>
                    <Col>
                      <InstructionList title={'Original Instructions'} items={tempInstructions}></InstructionList>
                    </Col>
                    <Col>
                      <InstructionList title={'Renamed Instructions'} items={tempInstructions}></InstructionList>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0-0">
                  <Accordion.Header>Register Renaming Map</Accordion.Header>
                  <Accordion.Body>
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Architectural Register</th>
                          <th>Ready  Bit</th>
                          <th>Physical Register</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>%r01</td>
                          <td>1</td>
                          <td>%x08</td>
                        </tr>
                        <tr>
                          <td>%r02</td>
                          <td>1</td>
                          <td>%x09</td>
                        </tr>
                        <tr>
                          <td>%r03</td>
                          <td>1</td>
                          <td>%x10</td>
                        </tr>
                        <tr>
                          <td>%r04</td>
                          <td>1</td>
                          <td>%x11</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey = "0-1">
                  <Accordion.Header>Register File</Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion defaultActiveKey="3">
          <Accordion.Item eventKey="3">
            <Accordion.Header>Stage 4: Instruction Queue</Accordion.Header>
            <Accordion.Body>
              <InstructionList items={tempInstructions}></InstructionList>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion defaultActiveKey="4">
          <Accordion.Item eventKey="4">
            <Accordion.Header>Stage 5: Issue</Accordion.Header>
            <Accordion.Body>
              <InstructionList items={tempInstructions}></InstructionList>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion defaultActiveKey="5">
          <Accordion.Item eventKey="5">
            <Accordion.Header>Stage 6: Executiuon Unit</Accordion.Header>
            <Accordion.Body>
              <InstructionList items={tempInstructions}></InstructionList>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}

export default App;