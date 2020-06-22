# dummy-tag

A dummy JS template literal tag.

```js
import dummyTag from 'dummy-tag';
// const dummyTag  = require('dummy-tag');
// <script src="//unpkg.com/dummy-tag"></script>

dummyTag`one ${2} three`;
// output: "one 2 three"
```

It could be used to trigger CSS minification too, through rollup plugins or others.

```js
import css from 'dummy-tag';

const style = css`
  body {
    color: green;
  }
`;
```
