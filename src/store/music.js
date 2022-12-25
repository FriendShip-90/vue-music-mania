import axios from "axios"

export default {
    namespaced: true,
    state: () => ({
        musics:[],
    }),
    getters:{},
    mutations:{
        updateState( state, payload){
            Object.keys(payload).forEach( key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async createMusic( {commit} ){
            const res = await axios.get(`https://www.maniadb.com/api/album/712017/?key=example&v=0.5`)
            .then( (ress) => {
                console.log("SUCCESS");
                console.log(ress);
            })
            commit( 'updateState', { musics : res })   
        },
    }
}