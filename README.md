# react-simple-slider

![](https://raw.githubusercontent.com/MaxMEllon/demos/master/react-simple-slider/demo.gif)

Usage
---

`react-simple-slider` requires **React >= 0.14.0**

```
npm install --save react-simple-slider
```

This Components is available on the default export.

```
import Slider from 'react-simple-slider';
```

This plugin is used babel-plugin-add-module-exports. so you not need `.default`

```
const Slider = require('react-simple-slider');
```

API reference
---

- *Properties:*
  - `max` - max value.
    - **required**
    - type: `number`
    - Example: 100
  - `width` - DOM width. (px)
    - **required**
    - type: `number`
    - Example: 100
  - `height` - DOM height. (px)
    - **required**
    - type: `number`
    - Example: 10
  - `backStyle` - background of bar the style
    - **optional**
    - type: `object`
    - default: { backgroundColor: 'gray'}
  - `frontStyle` - foreground of bar the style
    - **optional**
    - type: `object`
    - default: { backgroundColor: 'aqua'}
  - `default` - default value
    - **optional**
    - type: `number`
    - default: 50
    - Example: 10
  - `onChange` - changes value callback function.
    - **optional**
    - type: `function`

Start Development
---

Clone this repository and Install node. Then,

```
cd path/to/react-simple-slider
npm install
npm run dev
```

LICENSE
---

Copyright © 2016 Kento TSUJI

The MIT License (MIT)

See: [LICENSE.txt](./LICENSE.txt)
