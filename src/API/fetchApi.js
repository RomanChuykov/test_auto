import axios from 'axios'
// https://65d65800f6967ba8e3bdf757.mockapi.io/adverts/auto/
axios.defaults.baseURL='https://65d65800f6967ba8e3bdf757.mockapi.io/adverts/auto/cars'

export async function getCars(page) {
    const limit=12
    if (page===0) {
        const response=await axios.get('');
        return response.data;
    }
    const params={
        page:page,
        limit:limit
    }
    const response=await axios.get('',{params});
    return response.data;
}
