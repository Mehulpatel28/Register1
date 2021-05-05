import {delay,takeLatest,takeEvery,put,call} from 'redux-saga/effects';
import axios from 'axios';


// Worker Function
function* fetchUserRequest(action){
    try{
        const apiConfig={
            method:'get',
            url:'https://reqres.in/api/users/'
        };

        const response = yield call(axios,apiConfig);
        console.log('Response Data:',response.data)
        yield put({type:'FETCH_USER_SUCCESS',payload:response.data});

    }
    catch(e){
        console.log(e);
        yield put({type:'FETCH_USER_FAILURE',payload:e.message})
    }
}


// Watcher Function
function* rootSaga(){
    yield takeLatest('FETCH_USER_REQUEST',fetchUserRequest);
}

export default rootSaga








































// import { takeEvery, put,delay, takeLatest, call } from 'redux-saga/effects';

// FETCH API IN MIDDLEWARE
// ?Pure function
// import {fetchUsers} from '../reducers/FetchAPIApp/actions'


// // handler or worker
// function* fetchUser(action){
//     try{
//         const user = yield call(fetchUsers,action);
//         yield put({type:"FETCH_USER_SUCCESS",payload:user});
//     }
//     catch(e)
//     {
//         yield put({type:"FETCH_USER_FAILURE",payload:e.message});
//     }
// }


// // watcher
// function* watchFetchUserRequest(){
//     yield takeLatest("FETCH_USER_REQUEST",fetchUser);
// }
// export default watchFetchUserRequest;