
import axiosClient from './AxiosClient'

class ProductAPI  {
    getAll = (params) => {
        const url = '/products/all';
        return axiosClient.get(url,{params});
    };
    getByType = (typeName,params) => {
        const url = '/products/' + typeName;
        return axiosClient.get(url, { params });
    };
    
}
const productApi = new ProductAPI();
export default productApi;