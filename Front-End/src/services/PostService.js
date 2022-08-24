import axios from "../axios";

class PostService {
    postPost = async (data) => {
        
        const promise = new Promise((resolve, reject) => {
            console.log("form data: " + data)
            axios.post('post', data) 
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchPost = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('post')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putPost = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('post/'+data+'')
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deletePost = async (id) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('post/'+id+'')
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
export default new PostService();