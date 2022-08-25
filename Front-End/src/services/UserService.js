import axios from "../axios";

class UserService {
    postUser = async (data) => {  
        const promise = new Promise((resolve, reject) => {
            console.log("form data: " + data)
            axios.post('user', data)   
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('user')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
           console.log(data)
           axios.put('customer', data)
           .then((res) => {
               return resolve(res)
           })
           .catch((err) => {
               return resolve(err)
           })
        })
        return await promise;
   };
   
   deleteUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
           axios.delete('user', {params: params})
           .then((res) => {
               return resolve(res)
           }) 
           .catch((err) => {
               return resolve(err)
           })
        })
        return await promise;
   };

    getUserById = async (id) => {
         const promise = new Promise((resolve, reject) => {
            axios.get('user/'+id+'')
            .then((res) => {
                return resolve(res)
            }) 
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
}

export default new UserService();