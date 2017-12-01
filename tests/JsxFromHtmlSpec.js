import React from 'react';
import { shallow } from 'enzyme';
import JSXFromHTML from '../src';

describe('JSXFromHTML', () => {
  it('Renders no HTML as an empty element', () => {
    const result = shallow(<JSXFromHTML html={''} />);

    expect(result.html()).toBe('<span data-jsx-to-html-root="true"></span>');
  });

  it('Renders simple HTML as prop with some semblance of sanity', () => {
    const html = '<p><span>text<img src="about:blank"/></span></p>';

    const result = shallow(<JSXFromHTML html={html} />);

    expect(result.html()).toBe(
      '<span data-jsx-to-html-root="true">' +
        '<p><span><span>text<img src="about:blank"/></span></span></p>' +
        '</span>'
    );
  });

  it('Renders slightly complex HTML as prop with inline styles with some semblance of sanity', () => {
    const html = '<p><span class="derp" style="background-color:blue;"><i>text</span> stuff</i></p>';

    const result = shallow(<JSXFromHTML html={html} />);

    expect(result.html()).toBe(
      '<span data-jsx-to-html-root="true">' +
        '<p><span class="derp" style="background-color:blue"><i>text</i></span>' +
        '<span> stuff</span></p></span>'
    );
  });

  it('Renders slightly complex HTML as body with inline styles with some semblance of sanity', () => {
    const html = '<p><span class="derp" style="background-color:blue;"><i>text</span> stuff</i></p>';

    const result = shallow(<JSXFromHTML>{html}</JSXFromHTML>);

    expect(result.html()).toBe(
      '<span data-jsx-to-html-root="true">' +
        '<p><span class="derp" style="background-color:blue"><i>text</i></span>' +
        '<span> stuff</span></p></span>'
    );
  });

  it('Updates rendered HTML with some semblance of sanity', () => {
    const html = '<p><span class="derp" style="background-color:blue;"><i>text</span> stuff</i></p>';
    const html2 = '<p><span class="derp2" style="background-color:blue;"><i>text</span> stuff</i></p>';

    const result = shallow(<JSXFromHTML>{html}</JSXFromHTML>);

    expect(result.html()).toBe(
      '<span data-jsx-to-html-root="true">' +
        '<p><span class="derp" style="background-color:blue"><i>text</i></span>' +
        '<span> stuff</span></p></span>'
    );

    result.setProps({ html: html2 });

    expect(result.html()).toBe(
      '<span data-jsx-to-html-root="true">' +
        '<p><span class="derp2" style="background-color:blue"><i>text</i></span>' +
        '<span> stuff</span></p></span>'
    );
  });
});
