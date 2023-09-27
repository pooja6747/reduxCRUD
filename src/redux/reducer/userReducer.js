const userReducer = ( state ='' , action )=>{
    console.log(state);
    console.log(action);
   switch(action.type){
    case "ADD_USER":
        return{
            ...state,
          items : [...state.items,action.payload]
        }

        case "DELETE_USER":
            console.log(state , '====');
        return{
            ...state,
          items : state.items.filter((user)=> user.id != action.payload)
        }

        case "USER_INFO":
            console.log(state);
          let userDetails=  state.items.filter((user)=>user.id != action.payload)
          return{
            ...state,
            user:(userDetails.length > 0) ? userDetails[0] :{}
          }

          case "UPDATE_USER":
          
          return{
            ...state,
            items : state.items.filter((user)=> user.id != action.payload.id ? action.payload : user)
          }

        default:
            return state;
   }
   
}

export default userReducer;