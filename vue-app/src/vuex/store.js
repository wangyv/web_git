import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


const state = {
    photoList:[]
}
const mutations = {
    getPhotoList(state, status){
        state.photoList = status;
    }
}
const actions = {
    getPhoto({commit},status){
        // axios.get('/static/data/photodata.json')
        // .then(res =>{
            commit('getPhotoList',status)
        // })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})