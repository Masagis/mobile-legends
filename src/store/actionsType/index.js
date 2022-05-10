import { heroActionType } from './mlbb.actionType'

export const actionTypes = {
  ...heroActionType,
}

export const receiveSuccess = (typeAction, response) => {
  return {
    type: actionTypes[typeAction],
    payload: response.data,
  }
}

export const receiveError = (type, error) => {
  return {
    type,
    message: error,
  }
}
