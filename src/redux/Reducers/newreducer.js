import * as types from "../Actions/actionType";

const newinitialState = {
    newPost:[],
    newLoading:false,
    newError:null,
}
const newReducer = (state = newinitialState,action)=>{
    switch(action.type){
        case types.FETCH_POST_NEW_START:
            return{
                ...state,
                newLoading:true
            };
        case types.FETCH_POST_NEW_SUCCESS:
            return {
                ...state,
                newLoading:false,
                newPost:action.payload
            };

            case types.FETCH_POST_NEW_FAIL:
                return {
                    ...state,
                    newLoading:false,
                    newError:action.payload
                }
                default:
                    return state;
    }
}
export default newReducer;

