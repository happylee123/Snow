export default {
    state: {
       user:0
    },
    getters:{
      
        
    },
    mutations: {     
        save(state,num){
            state.user=num;
            localStorage.user=num;
            console.log(state.user)
          },
          con(state){
              console.log(state.user)
          }
    },
    actions: {
       
    }
}