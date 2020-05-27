/**
 * https://github.com/styled-components/styled-components/blob/v5.1.1/packages/styled-components/src/utils/generateComponentId.js
 */

import generateAlphabeticName from './generateAlphabeticName'
import { hash } from './hash'

export default (str: string): string => {
  return generateAlphabeticName(hash(str) >>> 0)
}
