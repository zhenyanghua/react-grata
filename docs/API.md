# API Reference

## Grid
The container for the layout.

|`prop`| required | type | default | description|
|---|---|---|---|---|
|`className`|`false`|`string`|`grata-grid`|The class name to apply on `Grid`|
|`rows`|`false`|`string[]`|`['auto'...]`|A list of string that describes the dimension of each row. the unit could be any css supported. If your target browser does not support a certain unit, you should avoid using it.|
|`columns`|`false`|`string[]`|`['auto'...]`|A list of string that describes the dimension of each column. the unit could be any css supported. If your target browser does not support a certain unit, you should avoid using it.|
|`rowGap`|`false`|`string[]`|`0`|The width between rows|
|`columnGap`|`false`|`string[]`|`0`|The width between columns|
|`layout`|`false`|`CellArea[]`|`undefined`|An array of objects that each describe the location and span of the `Cell` in the `Grid`|
|`matrix`|`false`|`string[][]`, `number[][]`|`undefined`|A two-dimensional array describes the how the layout should look like. The value in the matrix is the `id` for each `Cell`. The rules must be followed to use matrix: 1. each cell area must form a rectangle. 2. each cell could only be used in one rectangle. 3. leave the value as `undefined` to leave an area unoccupied. `matrix` overwrites the `layout`|


## Cell
The cell is the smallest component in a `Grid`.

|`prop`| required | type | default | description|
|---|---|---|---|---|
|`className`|`false`|`string`|`grata-cell`|The class name to apply on `Cell`|
|`id`|`false`|`number`, `string`|`undefined`|The ident of the `Cell`, this must be defined when using `matrix` of `layout` on `Grid`.|
|`row`|`false`|`number`|`0`|The start row number of the `Cell`, 1 based index.|
|`column`|`false`|`number`|`0`|The start column number of the `Cell`, 1 based index.|
|`rowSpan`|`false`|`number`|`1`|The number of rows the `Cell` should span across.|
|`columnSpan`|`false`|`number`|`1`|The number of columns the `Cell` should span across.|


## CellArea
The object specification

|`prop`| required | type | default | description|
|---|---|---|---|---|
|`id`|`true`|`number`, `string`|`undefined`|The ident of the `Cell`, this must be defined when using `matrix` of `layout` on `Grid`.|
|`row`|`true`|`number`|`0`|The start row number of the `Cell`, 1 based index.|
|`column`|`true`|`number`|`0`|The start column number of the `Cell`, 1 based index.|
|`rowSpan`|`false`|`number`|`1`|The number of rows the `Cell` should span across.|
|`columnSpan`|`false`|`number`|`1`|The number of columns the `Cell` should span across.|

## CustomCss
Supported values

|value|where to use|definition|example|
|---|---|---|---|
|`fit-height`|value to assign in the array for `rows` in `<Grid />`|It occupies the remainder height space of the container. There must be up to one row that define `fit-height` custom value.|`<Grid rows={['200px', 'fit-height', '200px']} {...otherProps} />`|
