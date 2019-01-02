import React from 'react'
import { render } from 'react-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleRight, faSearch } from '@fortawesome/free-solid-svg-icons'

import App from './App'
import './index.scss'

declare let module: any

addLocaleData(en)

library.add(faAngleDoubleRight, faSearch)

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
