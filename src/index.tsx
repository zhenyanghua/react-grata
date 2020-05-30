import React, { ReactElement, useLayoutEffect } from 'react'
import {
  assignCellLayout,
  connect,
  deriveAutoDimensions,
  deriveLayout,
  deriveMsDimension,
  replaceCustomGridTemplate
} from './utils'
import { CellProps, GridBaseProps, GridProps } from './typings'
import { insertRules } from './cssom'
import generateComponentId from './generateComponentId'

export enum ClassName {
  GRID = 'grata-grid',
  CELL = 'grata-cell'
}

/**
 * ie fake gap by creating extra track for layout, this behavior should
 * be managed separately for ie.
 *
 * @example
 * rows={["70px", "70px", "70px", "70px", "70px"]}
 * columns={["1fr", "1fr", "1fr"]}
 */
const GridBase: React.FC<GridBaseProps> = (props) => {
  let { rows, columns, ...rest } = props
  const { rowGap = 0, columnGap = 0, children, className } = rest

  const autoDimensions = deriveAutoDimensions(children as ReactElement)

  if (!rows) {
    rows = autoDimensions.rows
  }
  if (!columns) {
    columns = autoDimensions.columns
  }
  // Replace custom css values
  const newGridTemplate = replaceCustomGridTemplate({
    rows,
    columns,
    rowGap,
    columnGap
  })

  rows = newGridTemplate.rows
  columns = newGridTemplate.columns

  // Account for ie fake gap
  const msRows = deriveMsDimension(rows, rowGap)
  const msColumns = deriveMsDimension(columns, columnGap)

  const dynamicRules = `
    grid-row-gap: ${rowGap};
    grid-column-gap: ${columnGap};
    grid-template-rows: ${connect(rows)};
    grid-template-columns: ${connect(columns)};

    -ms-grid-rows: ${msRows};
    -ms-grid-columns: ${msColumns};
  `

  const gridClass = generateComponentId(dynamicRules)
  const rules = `
  .${gridClass} {
    display: grid;
    display: -ms-grid;
  ${dynamicRules}
  }
 `
  const mergedClassName = `${gridClass} ${className || ClassName.GRID}`

  useLayoutEffect(() => {
    insertRules(rules)
  })

  return <div className={mergedClassName}>{children}</div>
}

export const Grid: React.FC<GridProps> = (props) => {
  let { layout } = props
  const { children, matrix, ...rest } = props

  let cells = children

  if (matrix) {
    layout = deriveLayout(matrix)
  }

  if (layout) {
    cells = assignCellLayout(children as ReactElement, layout)
  }

  return React.createElement(GridBase, { ...rest }, cells)
}

export const Cell: React.FC<CellProps> = (props) => {
  const {
    row,
    rowSpan = 1,
    column,
    columnSpan = 1,
    children,
    className,
    maxContent,
    centerJustified,
    centerAligned,
    center
  } = props

  if (!row || !column) {
    return null
  }

  // Account for ie fake gap
  const msRow = 2 * row - 1
  const msRowSpan = 2 * rowSpan - 1
  const msColumn = 2 * column - 1
  const msColumnSpan = 2 * columnSpan - 1

  const dynamicRules = `
    grid-row: ${row} / span ${rowSpan};
    grid-column: ${column} / span ${columnSpan};

    -ms-grid-row: ${msRow};
    -ms-grid-row-span: ${msRowSpan};
    -ms-grid-column: ${msColumn};
    -ms-grid-column-span: ${msColumnSpan};
  `
  const alignmentRules = `
    ${centerJustified || centerAligned || center ? 'display: flex;' : ''}
    ${centerJustified || center ? 'justify-content: center;' : ''}
    ${centerAligned || center ? 'align-items: center;' : ''}
  `

  const additionalRules = `
    ${maxContent ? 'box-sizing: border-box; width: 100%; height: 100%;' : ''}
  `
  const cellClass = generateComponentId(
    dynamicRules + alignmentRules + additionalRules
  )

  const layoutRules = `
  .${cellClass} {
  ${dynamicRules}
  ${alignmentRules}
  }`
  const styleRules = `
  .${cellClass} > * {
  ${additionalRules}
  }`
  const mergedClassName = `${cellClass} ${className || ClassName.CELL}`

  useLayoutEffect(() => {
    insertRules(layoutRules)
    insertRules(styleRules)
  })

  return <div className={mergedClassName}>{children}</div>
}
