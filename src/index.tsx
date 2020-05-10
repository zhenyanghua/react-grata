import React, { ReactElement, useLayoutEffect } from 'react'
import { connect, deriveAutoDimensions, deriveMsDimension } from './utils'
import { GridBaseProps } from './typings'
import { createStyle, insertRules, removeStyle } from './cssom'

const GRID_CLASS_NAME = 'grata-container'
// const CELL_CLASS_NAME = 'grata-cell'
/**
 * ie fake gap by creating extra track for layout, this behavior should
 * be managed separately for ie.
 *
 * @example
 * rows={["70px", "70px", "70px", "70px", "70px"]}
 * columns={["1fr", "1fr", "1fr"]}
 */
//
// export const GridBase = styled.div`
//   /* non essential css */
//   border: 4px solid red;
//   /* non essential css */
//
//   display: grid;
//   display: -ms-grid;
//   ${(props) => {
//     let { rows, columns } = props
//     const { rowGap = 0, columnGap = 0, children } = props
//
//     const autoDimensions = deriveAutoDimensions(children)
//
//     if (!rows) {
//       rows = autoDimensions.rows
//     }
//     if (!columns) {
//       columns = autoDimensions.columns
//     }
//
//     // Account for ie fake gap
//     const msRows = deriveMsDimension(rows, rowGap)
//     const msColumns = deriveMsDimension(columns, columnGap)
//
//     return css`
//       grid-row-gap: ${rowGap};
//       grid-column-gap: ${columnGap};
//       grid-template-rows: ${connect(rows)};
//       grid-template-columns: ${connect(columns)};
//
//       -ms-grid-rows: ${msRows};
//       -ms-grid-columns: ${msColumns};
//     `
//   }}
// `

export const GridBase: React.FC<GridBaseProps> = (props) => {
  let { rows, columns } = props
  const { rowGap = 0, columnGap = 0, children } = props

  const autoDimensions = deriveAutoDimensions(children as ReactElement)

  if (!rows) {
    rows = autoDimensions.rows
  }
  if (!columns) {
    columns = autoDimensions.columns
  }

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

  const rules = `
  .${GRID_CLASS_NAME} {
    /* non essential css */
    border: 4px solid red;
    /* non essential css */

    display: grid;
    display: -ms-grid;

  ${dynamicRules}
  }
 `

  useLayoutEffect(() => {
    const sheet = createStyle()
    insertRules(sheet, rules)

    return () => {
      removeStyle()
    }
  }, [])

  return <div className={GRID_CLASS_NAME}>{props.children}</div>
}
