import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: null,
        users: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
        addUser(state, user) {
            // назначать id лучше в action, оставляя тут только изменение данных в state
            user.id = state.users.length
            state.users.push(user)
        },
        updateUser(state, user) {
            let oldUserData = state.users.find(item => item.id == user.id);
            // Object.assign тут очень к месту, код будет короче
            // и опять же все подобные действия должны быть в actions
            oldUserData.name = user.name;
            oldUserData.date = user.date;
            oldUserData.email = user.email;
            oldUserData.phone = user.phone;
            oldUserData.distance = user.distance;
            oldUserData.payment = user.payment;
            oldUserData.addProfile = user.addProfile;
            oldUserData.pass = user.pass;
        },
        authUser(state, user) {
            state.currentUser = user;
        },
    },
    actions: {
        setUsers({ commit }, users) {
            commit('setUsers', users)
        },
        addUser({ commit }, user) {
            commit('addUser', user)
        },
        updateUser({ commit }, user) {
            commit('updateUser', user)
        },
        authUser({ commit }, user) {
            commit('authUser', user)
        },

    },
    getters: {
        users: s => s.users,
        currentUser: s => s.currentUser
    }
})