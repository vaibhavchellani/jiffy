import React from 'react'
import { render } from 'react-dom'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import JavascriptTimeAgo from 'javascript-time-ago'
import enJs from 'javascript-time-ago/locale/en'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDoubleRight,
  faSearch,
  faAngleRight,
  faAngleLeft,
  faArrowLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

import App from 'components/App'

import './index.scss'

declare let module: any

addLocaleData(en)

JavascriptTimeAgo.locale(enJs)

library.add(
  faAngleDoubleRight,
  faSearch,
  faAngleRight,
  faAngleLeft,
  faArrowLeft,
  faPlus,
)

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
