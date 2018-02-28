import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/Root'
import devtools from 'hyperapp-redux-devtools'

let config = [
  state,
  actions,
  view,
  document.body
]

let theApp

if (process.env.NODE_ENV !== 'production') {
  theApp = devtools(app)(...config)
} else {
  theApp = app(...config)
}
