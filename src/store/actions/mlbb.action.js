import axios from 'axios'
import { URL_API } from '../../configs/keys'
import { actionTypes } from '../actionsType/index'

export function fetchDataHero(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.HERO_REQUEST, loading: true })
    return axios({
      method: 'GET',
      url: `${URL_API}/hero/list`,
      params,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.HERO_SUCCESS,
          payload: response.data,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.HERO_FAILED })
        throw err
      })
  }
}

export function fetchDataHeroDetail(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.HERO_DETAIL_REQUEST, loading: true })
    return axios({
      method: 'GET',
      url: `${URL_API}/hero/detail`,
      params,
    })
      .then((response) => {
        dispatch({
          type: actionTypes.HERO_DETAIL_SUCCESS,
          payload: response.data,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.HERO_DETAIL_FAILED })
        throw err
      })
  }
}
