import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.scss'

declare let module: any

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
