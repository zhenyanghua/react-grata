const STYLE_SHEET_ID = 'react-grata-style-sheet'

export const createStyle = (): CSSStyleSheet => {
  const style = document.createElement('style')
  style.setAttribute('id', STYLE_SHEET_ID)
  document.head.appendChild(style)

  if (!style.sheet) {
    throw new Error('Cannot inject new stylesheet')
  }
  return style.sheet as CSSStyleSheet
}

export const removeStyle = () => {
  const style = document.getElementById(STYLE_SHEET_ID)
  if (style) {
    document.head.removeChild(style)
  }
}

export const insertRules = (sheet: CSSStyleSheet, rules: string) => {
  sheet.insertRule(rules)
}
