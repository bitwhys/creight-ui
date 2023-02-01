import { extendTheme } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'
import * as components from './atoms'
import { foundations,purple } from '@creight/system'
import { semanticTokens } from './tokens/foundations'
import colors from "@creight/system/src/tokens/colors";

export { defineTokens } from './utils/defineTokens'

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  colors: {
    ...foundations.colors,
    brand: purple
  },
  semanticTokens,
  components: { ...components },
  space: {
    '4.5': '1.125rem',
  },
})
