import { CREATE_USER } from "../actions/userActions";

const userInitialState = {
      data:''
}

const userReducers = (state= userInitialState,action)=>{
    switch(action.type){
        default :{
          return  {...state}
        }
    }
}

export default userReducers