// based on https://gist.github.com/goldhand/70de06a3bdbdb51565878ad1ee37e92b

type parseInlineStyleFunc = (styling: string) => {};

const parseInlineStyle: parseInlineStyleFunc = styling =>
  styling
    .split(';')
    .filter(style => style.split(':')[0] && style.split(':')[1])
    .map(style => [
      style.split(':')[0].trim().replace(/-./g, c => c.substr(1).toUpperCase()),
      style.split(':')[1].trim()
    ])
    .reduce(
      (styleObj, style) => ({
        ...styleObj,
        [style[0]]: style[1]
      }),
      {}
    );

export default parseInlineStyle;
