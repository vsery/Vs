export default {
    namespaced: true,
    state: {
        count: 12
    },
    mutations: {
        updateMessage(state, message) {
            state.obj.message = message
        },
        increment(state) {
            state.count++
        }
    }
}
