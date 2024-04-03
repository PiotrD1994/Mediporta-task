import axios from 'axios'

export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST'
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS'
export const FETCH_TAGS_FAILURE = 'FETCH_TAGS_FAILURE'

export const fetchTagsRequest = () => ({
    type: FETCH_TAGS_REQUEST
})

export const fetchTagsSuccess = (tags) => ({
    type: FETCH_TAGS_SUCCESS,
    payload: tags,
})

export const fetchTagsFaulure = (error) => ({
    type: FETCH_TAGS_FAILURE,
    payload: error,
})

export const fetchTags = () => {
    return dispatch => {
        dispatch(fetchTagsRequest())
        return axios.get('https://api.stackexchange.com/2.3/tags')
        .then(response => {
            console.log('dane:', response.data.items)
            dispatch(fetchTagsSuccess(response.data.items))
        })
        .catch(error => {
            dispatch(fetchTagsFaulure(error.message))
        })
    }
}