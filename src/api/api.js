import Axios from "axios";


const instanse = Axios.create({
    withCredentials : true,
    headers: {
        "API-KEY": "c375738a-44a1-45e3-b324-0c09d3a37beb"
      },
      baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
        getUsers (page = 1,pageSize = 10) {
        return instanse.get(`users?page=${page}&count=${pageSize}`)
       .then(response =>{
           return response.data});
       },
       follow(userId){
        return instanse.post(
       `follow/${userId}`)
       },
       unfollow(userId){
       return instanse.delete(
        `follow/${userId}`)
          },
       getProfile(userId){
        console.warn("outdated method used");
         return profileAPI.getProfile(userId)
       }   
}

export const profileAPI = {
     getProfile(userId){
       return instanse.get(`profile/` + userId);
     },
     getStatus(userId){
       return instanse.get('profile/status/' + userId);
     },
     updateStatus(status){
       return instanse.put('profile/status/', {status: status});
     }   
}
    

export const authAPI = {
me()
  { return instanse.get(`auth/me`);
},

login(email, password,rememberMe = false)
{ 
    return instanse.post(`auth/login`, {email, password,rememberMe});
},

logout()
 { 
    return instanse.delete(`auth/login`);
}

}




