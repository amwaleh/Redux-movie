
export const movieReducers = (state={data:[]}, action) =>{
    console.log(action)
    switch(action.type){
        case 'FETCH_ALL':
            return {
                ...state,
                ...action.payload
            }

        case 'SEARCH_TERM':
            return {
                ...state,
                ...action.payload
            }
    default:
    return state
    }
}