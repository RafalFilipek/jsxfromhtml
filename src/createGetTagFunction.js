// @flow

import inlineElements from './inlineElements';

type ElementsMap = { [key: string]: string | boolean } | false;

export type GetTagFunc = (name: string) => any;

type CreateGetTagFunc = (
  mapElements?: ElementsMap,
  mapInline?: string | Function,
  mapBlock?: string | Function
) => GetTagFunc;

const createGetTagFunction: CreateGetTagFunc = (
  mapElements = {},
  mapInline = null,
  mapBlock = null
) => name => {
    if (mapElements) {
      if (mapElements[name]) {
        return mapElements[name];
      } else if (mapElements[name] === false) {
        return null;
      }
    }
    const isInline = inlineElements.indexOf(name) !== -1;
    if (isInline && mapInline) {
      return mapInline;
    }
    if (!isInline && mapBlock) {
      return mapBlock;
    }
    return name;
  };

export default createGetTagFunction;
