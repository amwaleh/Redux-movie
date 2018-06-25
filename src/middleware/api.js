import axios from 'axios';


const api = ({dispatch, getState}) => next => action => {

    if (action.type !== 'API') {
        return next(action)
    }
    const {url, config, success} = action.payload
    axios.get(url, config)
        .then((res) => {
            dispatch(success(res))
        })
        .catch((error) => {
            //TODO: fix this
            console.log('error', error)
            dispatch({
                type: 'FETCH_ALL',
                payload: error
            })

        })

    return next(action)
}

export default api