export interface CellArea {
  id: string | number
  row: number
  column: number
  rowSpan?: number
  columnSpan?: number
}

export interface BasicProps {
  className?: string
}

export interface GridBaseProps extends BasicProps {
  rows?: string[]
  columns?: string[]
  rowGap?: number | string
  columnGap?: number | string
}

export interface GridProps extends GridBaseProps {
  layout?: CellArea[]
  matrix?: (string | number)[][]
}

export interface CellProps extends BasicProps, CellStyleProps {
  row?: number
  column?: number
  rowSpan?: number
  columnSpan?: number
  id?: number | string
}

export interface CellStyleProps {
  maxContent?: boolean
}

export interface RowsReplacement {
  rows: string[]
  rowGap: number | string
}

export interface ColumnsReplacement {
  columns: string[]
  columnGap: number | string
}
