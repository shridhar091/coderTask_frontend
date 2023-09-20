import { toast } from 'react-toastify'
import axios from '../config/axios'

export const CREATE_USER = 'CREATE_USER'

export const createUser = (data) => {
    return {
        type: CREATE_USER,
        payload: data
    }
  }


export const registerUser = (formData,reset) => {
    return (dispatch) => {
       ( async () => {
            try {
                const result = await axios.post('/api/user', formData)
                reset()
                console.log(result.data)
                dispatch(createUser(result.data))
                toast.success('Register Succesfull', {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "colored",
                    });
            } catch (e) {
                console.log(e.message)
                toast.error(e.message, {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "colored",
                    });
            }
        }
     )()}
}

