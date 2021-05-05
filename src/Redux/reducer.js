// import {combineReducers} from 'redux';

// export default combineReducers({
//     libraries:()=>[]
// });
const initialState = {
   
    loading:false,
    data:[],
  }
  console.log('Start- ', initialState.loading,initialState.data)
  
  const FetchApiReducer = (state = initialState, action) => {
    switch (action.type) {
      
     
  
      case 'FETCH_USER_REQUEST':
        return{
          loading:true,
          ...state,
        }
      case 'FETCH_USER_SUCCESS':
        return{
          loading:false,
          data:action.payload,
          error:'',
        }  
      case 'FETCH_USER_FAILURE':
        return{
          loading:false,
          data:[],
          error:action.payload,
        }
  
  
    }
    // console.log('state.counter- ',state.counter)
    // console.log('state- ',counter)
    // console.log('state- ',state)
  
    return state
  }
  
  export default FetchApiReducer;