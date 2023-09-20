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
            } catch (e) {
                console.log(e.message)
            }
        }
     )()}
}

