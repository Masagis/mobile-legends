import { combineReducers } from 'redux'
import hero from './mlbb.reducer'

const appReducer = combineReducers({
  hero,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
