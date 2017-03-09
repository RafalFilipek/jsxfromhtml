// @flow

import { Parser, DomHandler } from 'htmlparser2';

const textToDOM = (html: string): Promise<*> =>
  new Promise((resolve, reject) => {
    const handler = new DomHandler((error, dom) => {
      error ? reject(error) : resolve(dom);
    });
    const parser = new Parser(handler);
    parser.write(html);
    parser.done();
  });

export default textToDOM;
