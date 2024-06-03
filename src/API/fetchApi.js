import axios from 'axios'
// https://65d65800f6967ba8e3bdf757.mockapi.io/adverts/auto/
axios.defaults.baseURL='https://65d65800f6967ba8e3bdf757.mockapi.io/adverts/auto/cars'

export async function getCars() {
    const response=await axios.get('');
    return response.data;
}
