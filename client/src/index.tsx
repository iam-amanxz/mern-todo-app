import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { App } from './components'
import reportWebVitals from './reportWebVitals'
import store from './store'
import '@fontsource/roboto'

const colors = {
  brand: '#3a0ca3',
  success: '#38b000',
  danger: '#e5383b',
}

const fonts = {
  heading: '"Roboto", sans-serif',
  body: '"Roboto", sans-serif',
}

const theme = extendTheme({ colors, fonts })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
