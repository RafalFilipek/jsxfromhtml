// @flow

import React from 'react';

import { type GetTagFunc } from './createGetTagFunction';
import step, { type DOMElement } from './step';

const toJSX = (dom: DOMElement, getTag: GetTagFunc) => {
  if (!Array.isArray(dom)) {
    const Component = getTag('span');
    return <Component data-jsx-to-html-root />;
  }
  const rootNode = {
    name: 'span',
    type: 'tag',
    children: dom,
    attribs: { 'data-jsx-to-html-root': true }
  };
  return step(
    rootNode,
    0,
    { name: 'span', type: 'tag', data: '', children: [rootNode], attribs: {} },
    getTag
  );
};

export default toJSX;
