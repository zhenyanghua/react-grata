/**
 * Singleton class that provides the stylesheet
 */
class StyleSheetProvider {
  private static INSTANCE: StyleSheetProvider
  private readonly sheet: CSSStyleSheet

  constructor() {
    const style = document.createElement('style')
    style.setAttribute('data-grata', '')
    document.head.appendChild(style)
    this.sheet = style.sheet as CSSStyleSheet
  }

  static get instance() {
    if (!StyleSheetProvider.INSTANCE) {
      StyleSheetProvider.INSTANCE = new StyleSheetProvider()
    }

    return StyleSheetProvider.INSTANCE
  }

  get styleSheet(): CSSStyleSheet {
    return this.sheet
  }
}

export const removeStyle = (style: HTMLStyleElement) => {
  if (style) {
    document.head.removeChild(style)
  }
}

export const insertRules = (rules: string) => {
  const sheet = StyleSheetProvider.instance.styleSheet
  if (!sheet) {
    throw new Error('Failed to find CSSStyleSheet from the style element')
  }

  sheet.insertRule(rules, sheet.cssRules.length)
}
