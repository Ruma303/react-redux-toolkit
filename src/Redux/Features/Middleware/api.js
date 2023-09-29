import axios from "axios";
import { fetchDogsStart, fetchDogsSuccess, fetchDogsFailure } from '../functions/dogSlice';

const api = ({ dispatch }) => next => async action => {
    if (action.type === fetchDogsStart.type) {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/list/all');
            console.log(response)
            dispatch(fetchDogsSuccess(response.data.message));
        } catch (error) {
            dispatch(fetchDogsFailure(error.message));
        }
    } else {
        next(action);
    }
}

export default api;
