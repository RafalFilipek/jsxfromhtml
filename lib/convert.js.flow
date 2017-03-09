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
) => Promise<*>;

const convert: ConvertFunc = (html, mapElements, mapInline, mapBlock) => {
  const getTag = createGetTagFunction(mapElements, mapInline, mapBlock);

  return new Promise((resolve, reject) => {
    textToDOM(html)
      .then(dom => {
        try {
          resolve(toJSX(dom, getTag));
        } catch (e) {
          reject(e);
        }
      })
      .catch(reject);
  });
};
export default convert;
