import React, { PureComponent } from 'react';

import JsxHtml from '../lib';

import './styles';
import { Container, Box, Title, Header, Info, Pre } from './ui';
import data from './data';

import TwitterLink from './TwitterLink';

export default class App extends PureComponent {

  render() {
    return (
      <div>
        <Header><code>JSXFromHTML</code></Header>
        <Container>
          <Box>
            <Title>Simple</Title>
            <Info>Input:</Info>
            <Pre>{data.simple}</Pre>
            <Info>Output:</Info>
            <JsxHtml html={data.simple} mapElements={{ strong: false }} />
            <Info>Info:</Info>
            <p>
              You can check generated JSX in React DevTools.
            </p>
          </Box>
          <Box>
            <Title>Omitting</Title>
            <Info>Input:</Info>
            <Pre>{data.omitting}</Pre>
            <Info>Output:</Info>
            <JsxHtml html={data.omitting} mapElements={{ strong: false }} />
            <Info>Info:</Info>
            <p>
              To remove <code>strong</code> tags you just have to map them to <code>false</code>.
            </p>
          </Box>
          <Box>
            <Title>Custom Twitter Link</Title>
            <Info>Input:</Info>
            <Pre>{data.twitter}</Pre>
            <Info>Output:</Info>
            <JsxHtml html={data.twitter} mapElements={{a: TwitterLink}} />
            <Info>Info:</Info>
            <p>
              Twitter links are converted by <code>TwitterLink</code> component.
            </p>
          </Box>
          <p>
            <a href="https://github.com/RafalFilipek/jsxfromhtml">jsxfromhtml</a> by <a href="https://github.com/RafalFilipek">rafalfilipek</a>
          </p>
        </Container>
      </div>
    );
  }

}
