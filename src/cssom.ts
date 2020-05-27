// todo - reuse one style element for all.

export const createStyle = (): HTMLStyleElement => {
  const style = document.createElement('style')
  document.head.appendChild(style)
  return style
}

export const removeStyle = (style: HTMLStyleElement) => {
  if (style) {
    document.head.removeChild(style)
  }
}

export const insertRules = (style: HTMLStyleElement, rules: string) => {
  const sheet = style.sheet as CSSStyleSheet
  if (!sheet) {
    throw new Error('Failed to find CSSStyleSheet from the style element')
  }

  sheet.insertRule(rules, sheet.cssRules.length)
}
