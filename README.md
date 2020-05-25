# react-grata

> Light weight react grid layout component that support IE 11. What you draw is what you get.

[![NPM](https://img.shields.io/npm/v/react-grata.svg)](https://www.npmjs.com/package/react-grata) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-grata
```

## Usage

```tsx
import React from 'react'

import { Grid, Cell } from 'react-grata'

const App = () => {
  const matrix = [
    [1, 1, 1],
    [2, 3, 3],
    [2, 5, 6],
    [7, 7, 6],
    [8, 8, 8],
  ];
  const rowGap = "10px"
  const columnGap = "24px"

  return (
    <Grid rowGap={rowGap} columnGap={columnGap} matrix={matrix}>
      <Cell id={1}>Component One</Cell>
      <Cell id={2}>Component Two</Cell>
      <Cell id={3}>Component Three</Cell>
      <Cell id={5}>Component Five</Cell>
      <Cell id={6}>Component Six</Cell>
      <Cell id={7}>Component Seven</Cell>
      <Cell id={8}>Component Eight</Cell>
    </Grid>
  )
}
```

[More Usages](docs/usages.md)

[API Reference](docs/API.md)

## License

MIT © [zhenyanghua](https://github.com/zhenyanghua)
