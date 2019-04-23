import axios from 'axios';

export function loadProducts(data) {
    const url = 'https://catalog.api.onliner.by/search/products?query=%D0%BF%D0%B5%D1%87%D0%B8';
     return async (dispatch) => {
        const response = await axios.get(url)
        const data = {
            isLoading: false,
            data: response.data.products.map(e => {
                return {
                    key: e.key,
                    img: e.images.header,
                    title: e.full_name,
                    subTitle: e.description,
                    rate: e.reviews.rating
                }
            })
        }
        return dispatch({type: "LOAD_PRODUCTS", data})
     }
     

}