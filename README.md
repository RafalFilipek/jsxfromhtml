# JSXFromHTML

[![Greenkeeper badge](https://badges.greenkeeper.io/RafalFilipek/jsxfromhtml.svg)](https://greenkeeper.io/)

With `jsxfromhtml` you can easily convert html strings into React / React Native / Preact / Inferno (you know, JSX in general) components.

## Demo

Like always on [now](https://now.sh) :) - [**jsxfromhtml.now.sh**](https://jsxfromhtml.now.sh/)

## Installation

```
yarn add jsxfromhtml

// or

npm install -S jsxfromhtml
```

Also for React-Native you have to install some Node specific modules

```
yarn add stream buffer events

// or

npm install -S stream buffer events
```

## Usage

### Web

Web is quite simple. All you have to do is:

```jsx
const html = `<p>
  <span>text</span>
</p>`

() => <JSXFromHTML html={html} />
```

### Mapping

But you can do more! `jsxfromhtml` allows you to map HTML tags into custom components.

```jsx
const html = `<p>
  <a href="https://twitter.com/rafalfilipek">rafalfilipek</a>
</p>`

const SuperLink = (props) => {
  const { href, children } = props;
  const parts = href.match(/twitter\.com\/(.*)\/?/);
  if (parts) {
    const name = parts[1];
    return (
      <span>
        <img src={`https://twitter.com/${name}/profile_image?size=mini`} />
        <a href={href}>{name}</a>
      </span>
    );
  } else {
    return <a {...props} />;
  }
};

() => <JSXFromHTML html={html} mapElements={{ a: SuperLink }} />
```

With `mapElements` you can map any HTML tag into a custom componetn. In this example we want to use our `SuperLink` component to show profile picture next to the twitter username.

### Omitting

Sometimes you will get tags you don't want. Like `style` or `script`. To get rid of them just map them to `false`.

```jsx
const html = `<p>
  <span>hello</span>
  <script>alert(1)</script>
</p>`
```

### General mapping / React Native

While `mapElements` is quite cool for web we have to handle all tags in native with just `Text` and `View` components. That's why there are two more props `mapInline` and `mapBlock`.

```jsx
const html = `<p>
  hello <span>world</span> !
</p>`

  () => <JSXFromHTML mapInline={Text} mapBlock={View} html={html} />
```

You will get:

```jsx
  <View>
    <Text>hello </Text><Text>World</Text><Text> !</Text>
  </View>
```

As you can see `jsxfromhtml` will wrap every text with is not inside inline tag.

### Styling

Every HTML tag has some default styles. You will probaly want to mimic that in your app. Each component will get `data-tag` prop.

```jsx
const html = '<strong>text</strong>'

const InlineElement = (props) => {
  const stylesMap = {
    strong: { fontWeight: '600' },
  };
  return <Text style={stylesMap[props.tag]}>{props.children}</Text>
}

() => <JSXFromHTML mapInline={InlineElement} html={html} />
```

> **Info**: you can still use `mapElements` for other tags.

### Attributes

All html attributes will be converted into proper jsx form. So `for` -> `htmlFor`, `class` -> `className` etc. You will receive them like regular props.

```jsx
const html = `<a class="link" href="https://twitter.com/rafalfilipek" title="Rafał Filipek">rafalfilipek</a>`

const InlineElement = (props) => (
  /* props:
      - children: rafalfilipek
      - className: link
      - tag: a
      - href: https://twitter.com/rafalfilipek
      - title: Rafał Filipek
  */
  <a {...props} />
)

() => <JSXFromHTML mapInline={InlineElement} html={html} />
```

### Map order

We have `mapElement`, `mapInline`, `mapBlock` props.

1. if `mapElements` value for tag is `false` then the tag is omitted.
2. use value from `mapElements` if defined
3. for inline elements use value from `mapInline` if defined
4. for block elements use value from `mapBlock` if defined
5. use tag name

## React Native inline

There is no `display: inline` in React Native. You can't have two inline tags (like `Text`) in one line. The only solution I know is to wrap them with another `Text` component. This sucks:

```jsx
<span>
  <span>one</span>
  <span>line</span>
</span>
```
Thats why `jsxfromhtml` handles that for you 💥! We will group inline tags inside block tags and wrap them with `span` (`Text`) tag 🤙.

```jsx
//input
<div>
  <span>one</span>
  <span>two</span>
  <p>
    <span>three</span>
    <span>four</span>
  </p>
  <span>five</span>
</div>

//output
<div>
  <span> // group
    <span>one</span>
    <span>two</span>
  </span>
  <p>
    <span>  // group
      <span>three</span>
      <span>four</span>
    </span>
  </p>
  <span>five</span>
</div>
```

## FAQ

**Q: Is there a wrapper for my HTML?**

A: Yes, always a `div` tag.

**Q: How is plain text handled inside block tags?**

A: Text is wrapped with `span` tag.

**Q: How do you detect a root element?**

A: The root component has `data-jsx-to-html-root` prop.

## LICENSE

MIT
