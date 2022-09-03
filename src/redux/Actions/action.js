import * as types from "./actionType";
import axios from 'axios';
const newPostStart = (newPost) => ({
    type: types.FETCH_POST_NEW_START,
    payload:newPost
});

const newPostSuccess = (newPost) => ({
    type: types.FETCH_POST_NEW_SUCCESS,
    payload:newPost
});

const newPostFail = (newPost) => ({
    type: types.FETCH_POST_NEW_FAIL,
    payload:newPost
});
//
const fetchPostStart = (posts) => ({
    type: types.FETCH_POST_START,
    payload:posts
});

const fetchPostSuccess = (posts) => ({
    type:types.FETCH_POST_SUCCESS,
    payload:posts,
})

const fetchPostFail = (error) => ({
    type:types.FETCH_POST_FAIL,
    payload:error
})
let items = [5, 15, 1, 14, 2, 4,7];

export function newPosts(){
    return function(dispatch){
        let selected_category = items[Math.floor(Math.random()*items.length)];
        dispatch(newPostStart());
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${selected_category}`)
        .then((response) =>{
            const newPost = response.data;
            dispatch(newPostSuccess(newPost));
        }).catch((error)=>{
            dispatch(newPostFail(error.message))
        })
    }
}

export function fetchPosts(){
    return function(dispatch){
        let selected_category = items[Math.floor(Math.random()*items.length)];
        dispatch(fetchPostStart());
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${selected_category}`)
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}
export function hatsPosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

export function boxesPosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

export function clothesPosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=15")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

export function sinksPosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=14")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

export function spacePosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

export function sunglasessPosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

export function tiesPosts(){
    return function(dispatch){
        dispatch(fetchPostStart());
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7")
        .then((response) =>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}