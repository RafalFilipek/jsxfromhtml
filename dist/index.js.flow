// @flow

import PropTypes from 'prop-types';

import { PureComponent } from 'react';

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
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps: Props = {
    html: '',
    mapElements: {},
    mapInline: '',
    mapBlock: '',
    children: null
  };

  state = {
    content: null,
    setHtmlProp: false
  };

  mounted = false;

  componentDidMount() {
    this.mounted = true;
    this.setContent();
  }

  componentDidUpdate(prevProps: Props) {
    const oldHtml = JsxHtml.pickHtml(prevProps);
    const newHtml = JsxHtml.pickHtml(this.props);
    if (newHtml !== oldHtml) {
      if (this.props.html && !this.state.setHtmlProp) {
        this.setState({ setHtmlProp: true });
      }
      this.setContent();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  static pickHtml(props: JsxHtml) {
    if (props.html) {
      return props.html;
    }
    if (typeof props.children === 'string') {
      return props.children;
    }
    return null;
  }

  setContent() {
    const html = JsxHtml.pickHtml(this.props);
    const content = convert(
      html || '',
      this.props.mapElements,
      this.props.mapInline,
      this.props.mapBlock
    );
    if (this.mounted) {
      this.setState({ content });
    }
  }

  render() {
    return typeof this.props.children === 'function'
      ? this.props.children(this.state.content)
      : this.state.content;
  }
}

export default JsxHtml;
