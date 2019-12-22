/**
 *  Where to store information of logged in users
 */

const state = {
    user: {},
    loggedIn: false
};

const actions = {

};

const getters = {

    getUser: (state) => state.user,
    getLoggedIn: (state) => state.loggedIn
};

const mutations = {
    setUser: (state, user) => {
        state.user = user;
    },
    setLoggedIn: (state, logged) => {
        state.loggedIn = logged;
    },
    setUserProfile: (state, obj) => {
        state.user.name = obj.name;
        state.user.occupation = obj.occupation;
        state.user.age = obj.age;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};