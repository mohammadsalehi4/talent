const initialState={
    IsOpenMenu:false
}

const reducer=(state=initialState,action)=>{
    if(action.type==="CHANGEMENU"){
        return {
            ...state,
            IsOpenMenu:action.value
        }
    }
    return state
}

export default reducer