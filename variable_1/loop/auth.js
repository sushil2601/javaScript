function authenticate(arr,password) {
    let isAuth = false
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==password){
            isAuth = true
            break
        }
    }
    if(isAuth){
        return 'Authenticate'
    }else{
        return 'Not Authenticate'
    }
    
}
const password = ['Password123','dct@academy','sushil@1010','Suman@123','Student@123','Realme@1010']
console.log(authenticate(password,'Student@123'))
console.log(authenticate(password,'dct'))