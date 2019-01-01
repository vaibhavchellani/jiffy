import React from 'react'
import { render } from 'react-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'

import App from './App'
import './index.scss'

declare let module: any

addLocaleData(en)

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
