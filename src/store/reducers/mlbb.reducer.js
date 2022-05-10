import { actionTypes } from '../actionsType'

const initState = {
  isLoading: false,
  heroList: null,
  heroDetailList: null,
}

const hero = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HERO_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.HERO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        heroList: action.payload.data || null,
      }
    case actionTypes.HERO_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    case actionTypes.HERO_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.HERO_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        heroDetailList: action.payload.data || null,
      }
    case actionTypes.HERO_DETAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    default:
      return state
  }
}

export default hero
