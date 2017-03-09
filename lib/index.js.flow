// @flow

import { PropTypes, PureComponent } from 'react';

import convert from './convert';

type Props = {
  html: string,
  mapElements?: { [key: string]: any },
  mapInline?: string | Function,
  mapBlock?: string | Function,
  children?: Function | null
};

class JsxHtml extends PureComponent {
  static displayName = 'JsxHtml';

  props: Props;

  static propTypes = {
    html: PropTypes.string,
    mapElements: PropTypes.object,
    mapInline: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    mapBlock: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.func
  };

  static defaultProps: Props = {
    html: '',
    mapElements: {},
    mapInline: '',
    mapBlock: '',
    children: null
  };

  state = {};

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.html !== prevProps.html) {
      this.setContent();
    }
  }

  setContent() {
    convert(
      this.props.html,
      this.props.mapElements,
      this.props.mapInline,
      this.props.mapBlock
    ).then(content => {
      this.setState({ content });
    });
  }

  render() {
    if (typeof this.props.children === 'function') {
      return this.props.children(this.state.content || null);
    }
    return this.state.content || null;
  }
}

export default JsxHtml;
