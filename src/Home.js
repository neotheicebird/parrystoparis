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
      <Flex className="main" p={2} column>
        <Box>
        <Flex id="row-1" align="space-between">
            <Box w={[0, 0, 0]}></Box>
            <Box w={[1, 1, 1]} className="title"><h1>Parry's to Paris</h1></Box>
            <Box w={[0, 0, 0]}></Box>
        </Flex>
        </Box>

        <Box mx={20} p={5} id="row-2">
          <Flex align='center' justify="center">
              <Box w={1/4}></Box>
              <Box w={1/2}>
                <a data-tip="Enna macha?"><img id="logo" src={logo} alt="logo" /></a>
                <p><ReactTooltip class="tooltip" place="right" type="light" effect="float"/></p>
              </Box>
              <Box w={1/4}></Box>
          </Flex>
        </Box>

        <Box id="row-3">
          <Flex>
            <Box w={1/4}></Box>
            <Box w={1/2}>
              <Progress id="progress-bar" percent={1}
                theme={{
                        success: {
                          symbol: '🏄‍',
                          color: 'rgb(223, 105, 180)'
                        },
                        active: {
                          symbol: '😀',
                          color: '#fbc630'
                        },
                        default: {
                          symbol: '😱',
                          color: '#fbc630'
                        }
                      }}/>
            </Box>
            <Box w={1/4}></Box>

          </Flex>
        </Box>

        <Box mt={50} id="row-4">
          <Flex >
            <Box w={1/6}></Box>
            <Box w={1/5} className="chennai">
              <Flex align="center" column>
                <Box><img id="chennai-svg" src={chennai} alt="chennai"/></Box>
                <Box><div id="chennai-text">CHENNAI</div></Box>
              </Flex>
            </Box>
            <Box w={1/3}>
              <form className="subscribe" accept-charset="UTF-8" action="https://usebasin.com/f/8ce893188d33" enctype="multipart/form-data" method="POST">
                <Flex justify="center" column>
                <Box>
                <input type="email" id="email" name="email" placeholder="Email Address" required /></Box>
                <Box>
                <AwesomeButton
                    type="facebook"
                    size="medium"
                    >
                    Subscribe
                </AwesomeButton></Box>
                </Flex>
              </form>
            </Box>
            <Box w={1/5} className="paris">
              <Flex align="center" column>
                <Box><img id="paris-svg" src={paris} alt="paris"/></Box>
                <Box><div id="paris-text">PARIS</div></Box>
              </Flex>
            </Box>
            <Box w={1/6}></Box>
          </Flex>
        </Box>

        <Box>
          <Flex>
            <Box w={1/3}></Box>
            <Box w={1/3}>
              <form className="subscribe" accept-charset="UTF-8" action="https://usebasin.com/f/8ce893188d33" enctype="multipart/form-data" method="POST">
                <input type="email" id="email" name="email" placeholder="Email Address" required />
                <AwesomeButton
                    type="facebook"
                    size="medium"
                    >
                    Subscribe
                  </AwesomeButton>
              </form>
            </Box>
            <Box w={1/3}></Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default Home;
