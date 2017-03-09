// @flow

import attributesMap from './attributesMap';

type Attrs = { [key: string]: string };

type MapAttributesFunc = (attrs: Attrs) => Attrs;

const mapAttributes: MapAttributesFunc = (attrs = {}) => Object.keys(
  attrs
).reduce(
  (memo, key) => {
    memo[attributesMap[key] || key] = attrs[key];
    return memo;
  },
  {}
);

export default mapAttributes;
