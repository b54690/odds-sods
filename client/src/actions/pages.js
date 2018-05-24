import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCH_DETAILED_PAGE = 'FETCH_DETAILED_PAGE'
export const FETCH_ALL_PAGES = 'FETCH_ALL_PAGES'

export const fetchPage = (pageId) => (dispatch) => {
  request
    .get(`${baseUrl}/pages/${pageId}`)
    .then(response => dispatch({
      type: FETCH_DETAILED_PAGE,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllPages = () => (dispatch) => {
    request
    .get(`${baseUrl}/pages`)
    .then(response => dispatch({
        type: FETCH_ALL_PAGES,
        payload: response.body.pages
    }))
    .catch(err => alert(err))
}