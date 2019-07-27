export default {
    state: {
       user:''
    },
    getters:{
      
        
    },
    mutations: {     
        save(state,num){
            state.user=num;
            localStorage.user=num.user_id;
            console.log(state.user)
          },
          delete(state){
            state.user='';
            delete localStorage.user;
          },
          con(state){
              console.log(state.user)
          }
    },
    actions: {
       
    }
}