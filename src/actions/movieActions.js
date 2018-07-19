export const fetchAll = (search = null, page = 1, ) => {
    const config = {
        params: {
            s: search,
            page: 1,
            apikey: '38f17281'
        }
    }

    return {
        type: 'API',
        payload: {
            success: setListPage,
            url: 'http://www.omdbapi.com/',
            config
        }

    }
}

export const fetchOne = (imdb = null) => {
    const config = {
        params: {
            i: imdb,
            plot: 'full',
            apikey: '38f17281'
        }
    }

    return {
        type: 'API',
        payload: {
            success: setMoviePage,
            url: 'http://www.omdbapi.com/',
            config
        }
    }

}

const setListPage = (payload) => {
    return {
        type: 'FETCH_ALL',
        payload: {
            data: payload.data,
            multiView: true
        }
    }

}

const setMoviePage = (payload) => {
    return {
        type: 'FETCH_ONE',
        payload: {
            data: payload.data,
            multiView: false
        }
    }
}



export const setSearchTerm = (term) => ({
    type: 'SEARCH_TERM',
    payload: {
        search: term
    }
})