import axios from 'axios'

export function fetchAll(search=null, page=1, ) {
    console.log(search)
    const config = {
        params:{
            s:search||'latest',
            page:1,
            apikey:'38f17281'
        }
    }
    return dispatch =>{
        return axios.get('http://www.omdbapi.com/', config)
        .then((res)=>{
            console.log(res)
            dispatch({
                type:'FETCH_ALL',
                payload: {data :res.data}
            })
        })
        .catch((error)=>{
            console.log('err', error)
            dispatch({
                type: 'FETCH_ALL',
                payload: error
            })

        })

    }
}

export const setSearchTerm = (term) => {
    console.log('SEARCH_TERM', term)
    return {
        type: 'SEARCH_TERM',
        payload:{
            search:term
        }
    }

}