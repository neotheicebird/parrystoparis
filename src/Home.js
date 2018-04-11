import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import logo from './logo.png';
import chennai from './lighthouse.svg';
import paris from './tower.svg';
import { Flex, Box } from 'reflexbox'
import './Home.css';
import { AwesomeButton } from 'react-awesome-button';
// import styles from 'react-awesome-button/src/styles/themes/theme-blue';
import 'react-awesome-button/dist/themes/theme-c137.css';
import ReactTooltip from 'react-tooltip';

class Home extends Component {
  render() {
    return (
      <Flex className="main" p={2} justify='space-between' column>
        <Box className="logo">
          <a data-tip="Enna macha?"><img src={logo} alt="logo"/>
          </a>
          <p><ReactTooltip place="right" type="light" effect="float"/></p>
        </Box>
        <Box className="chennai"><img src={chennai} alt="chennai"/></Box>
        <Box className="chennai"><img src={paris} alt="paris"/></Box>
        <Box className="title"><h1>Parry's to Paris</h1></Box>
        <Box className="yellow" ><Progress percent={50}
              theme={{
                success: {
                  symbol: '🏄‍',
                  color: 'rgb(223, 105, 180)'
                }
              }}/>
              <form accept-charset="UTF-8" action="https://usebasin.com/f/8ce893188d33" enctype="multipart/form-data" method="POST">
                <label for="email-address">Email Address</label>
                <input type="email" id="email" name="email" required />

                {/* <button type="submit">Submit</button> */}
                <AwesomeButton
                      type="facebook"
                      size="medium"
                      >
                      Sign Up
                </AwesomeButton>
              </form>
        </Box>
        {/* <Box className="red"><img src={logo} /></Box> */}
        {/* <Box></Box> */}
        {/* <Box><Progress percent={88} /></Box> */}
        {/* <Box><AwesomeButton>Text</AwesomeButton></Box> */}

        {/* <Box className="yellow" px={1} w={[ 1, 1/2, 1/4 ]}>Box B</Box> */}
      </Flex>
    );
  }
}

export default Home;
