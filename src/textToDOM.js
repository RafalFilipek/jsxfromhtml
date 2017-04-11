// @flow

import { Parser, DomHandler } from 'htmlparser2';

const textToDOM = (html: string): any => {
  const handler = new DomHandler();
  const parser = new Parser(handler);
  parser.write(html);
  parser.done();
  return handler.dom;
};

export default textToDOM;
