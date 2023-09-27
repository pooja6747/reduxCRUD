import {createStore, combineReducers} from 'redux';
import studentReducer from './reducer/studentReducer';
import userReducer from './reducer/userReducer';



const mainReducer = combineReducers ({
    user : userReducer,
    student : studentReducer
})

const commonData = {
    user :{
        items : [
            {
                id: 1, name :"Sonali Patil" , email :"sonali56@gmail.com" , phone:"9632587412"
            },
            {
                id: 2, name :"Ramdas Patil" , email :"ramdasP123@gmail.com" , phone:"9912999999"
            }
        ]
    },
    student : {
        studentId:123,
        marks:100
    }

}
const store = createStore(mainReducer , commonData);


export default store;