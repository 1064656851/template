const state = {
    userid:window.localStorage.getItem('userid')||''
};

const actions = {

};

const mutations = {
    USER_ID(state , payload){
        state.userid = payload;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}
