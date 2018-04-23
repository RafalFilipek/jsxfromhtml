// @flow

import createGetTagFunction from './createGetTagFunction';
import textToDOM from './textToDOM';
import toJSX from './toJSX';

type ElementsMap = { [key: string]: string | boolean } | false;

type ConvertFunc = (
  html: string,
  mapElements?: ElementsMap,
  mapInline?: string | Function,
  mapBlock?: string | Function
) => any;

const convert: ConvertFunc = (html, mapElements, mapInline, mapBlock) => {
  const getTag = createGetTagFunction(mapElements, mapInline, mapBlock);
  const dom = textToDOM(html);
  return toJSX(dom, getTag);
};
export default convert;
