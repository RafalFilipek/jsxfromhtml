// @flow

import React from 'react';

import selfClosingElements from './selfClosingElements';
import mapAttributes from './mapAttributes';
import groupInlineElements from './groupInlineElements';
import inlineElements from './inlineElements';

type GetTagFunc = (name: string) => any;

export type DOMElement = {
  type: 'tag' | 'text' | 'comment',
  name: string,
  data?: string,
  attribs: { [key: string]: any },
  children: DOMElement[],
  parent?: DOMElement
};

type StepFunc = (
  dom: DOMElement,
  index: number,
  parent?: DOMElement | null,
  getTag: GetTagFunc
) => React.Element<*> | null | string;

const step: StepFunc = (dom, index, parent, getTag) => {
  if (dom.type === 'comment') {
    return null;
  }
  if (dom.type === 'tag' || dom.type === 'script' || dom.type === 'style') {
    const Component = getTag(dom.name);
    if (Component === null) {
      return null;
    }
    if (selfClosingElements.indexOf(dom.name) !== -1) {
      return <Component key={index} {...mapAttributes(dom.attribs)} />;
    }
    const isParentBlock = parent && inlineElements.indexOf(parent.name) === -1;
    const children = isParentBlock
      ? groupInlineElements(dom.children)
      : dom.children;
    return (
      <Component key={index} {...mapAttributes(dom.attribs)}>
        {children.map((item, index) => step(item, index, item.parent, getTag))}
      </Component>
    );
  }
  if (dom.type === 'text') {
    if ((dom.data || '').trim() === '') {
      return null;
    }
    if (parent && inlineElements.indexOf(parent.name) !== -1) {
      return dom.data || null;
    }
    const Component = getTag('span');
    return <Component key={index}>{dom.data}</Component>;
  }
  return null;
};

export default step;
