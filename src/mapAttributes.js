// @flow

import attributesMap from './attributesMap';
import parseInlineStyle from './parseInlineStyle';

type Attrs = { [key: string]: string };

type MapAttributesFunc = (attrs: Attrs) => Attrs;

const mapAttributes: MapAttributesFunc = (attrs = {}) => Object.keys(
  attrs
).reduce(
  (memo, key) => {
    if (key === 'style') memo['style'] = parseInlineStyle(attrs['style']);
    else memo[attributesMap[key] || key] = attrs[key];
    return memo;
  },
  {}
);

export default mapAttributes;
