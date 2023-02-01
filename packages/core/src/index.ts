import { extendTheme } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'
import * as components from './atoms'
import { foundations } from '@creight/system'
import { semanticTokens } from './tokens/foundations'

export { defineTokens } from './utils/defineTokens'

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  semanticTokens,
  components: { ...components },
  space: {
    '4.5': '1.125rem',
  },
})
