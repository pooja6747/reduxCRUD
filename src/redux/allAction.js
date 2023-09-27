export const userRegister = (data) =>{
    return{
        type:'ADD_USER',
        payload : data
    }
}

export const deleteUser = (id) =>{
    return{
        type:'DELETE_USER',
        payload : id
    }
}

export const userInfo = (data) =>{
    return{
        type:'USER_INFO',
        payload : data
    }
}


export const updateUser = (data) =>{
    return{
        type:'UPDATE_USER',
        payload : data
    }
}

