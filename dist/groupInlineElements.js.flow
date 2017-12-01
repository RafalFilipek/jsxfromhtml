// @flow

import inlineElements from './inlineElements';

const getFromGroup = group => group.length === 1
  ? group[0]
  : {
      name: 'span',
      type: 'tag',
      attribs: {},
      data: '',
      children: group.map(el => {
        el.parent = {
          name: 'span',
          type: 'tag',
          attribs: {},
          data: ''
        };
        return el;
      })
    };

const groupInlineElements = (collection: Object[]) => {
  const result = [];
  let inGroup = false;
  let group = [];
  collection.forEach(el => {
    if (!inlineElements.indexOf(el.name) === -1) {
      result.push(el);
      if (inGroup) {
        result.push(getFromGroup(group));
        inGroup = false;
        group = [];
      }
    } else {
      inGroup = true;
      group.push(el);
    }
  });
  if (inGroup) {
    result.push(getFromGroup(group));
  }
  return result;
};

export default groupInlineElements;
