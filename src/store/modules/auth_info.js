const state = {
    auth_status: 'not login',
    token: null,
    user: {}
}
const getters = {
    isLoggedin: state => !!state.token,
    authStatus: state => state.auth_status
}
const mutations = {

}
const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}