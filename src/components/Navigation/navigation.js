import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './navigation.css';

const LinkButton = styled.button`
  background: ${props => props.primary ? "#B26E63" : "white"};
  color: ${props => props.primary ? "white" : "#B26E63"};
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid #B26E63;
  border-radius: 3px;
  text-decoration: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


const Navigation = () => {
  return (
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Link to="/Character"><img src="https://lh3.googleusercontent.com/proxy/YrWkEVm4a1Pl37NY40iTlrR2uJLCuVy2xSc3d1NKvziA-qLuxUsU9c5soAPInaeexHdXmVKiDg6OqreOT3SFfRqkdib_J43YqcLFh7oclWauils04JOS3b-Ilan1COY" alt="" width="60" height="60" class="d-inline-block align-text-top"></img></Link></a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <LinkButton primary><Link to="/Character">Characters</Link></LinkButton>
        <LinkButton primary><Link to="/About">About</Link></LinkButton>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navigation;
