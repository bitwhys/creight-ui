import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { foundations } from '@creight/system'
import '@creight/fonts/sunny-catalina.css'

const styles = {
  global: {
    'html,body,#root': {
      h: 'full',
    },
  },
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme({ ...foundations, styles })}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
