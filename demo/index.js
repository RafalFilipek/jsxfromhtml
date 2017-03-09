import React, { PureComponent } from 'react';

import JsxHtml from '../lib';
import TwitterLink from './TwitterLink';

const html = `<div>
  <p>
    <a href="https://twitter.com/rafalfilipek">rafal</a>
  </p>
  <p>nowy</p>
</div>`;

export default class App extends PureComponent {

  render() {
    return (
      <JsxHtml html={html} mapElements={{a: TwitterLink}} />
    );
  }

}