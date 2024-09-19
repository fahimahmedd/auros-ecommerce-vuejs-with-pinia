import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore('productStore', () => {
     
    const products = ref([]);
    const loading = ref(false);
    const error = ref(null);
     
    const fetchAllProducts = async () =>{
       loading.value = true;
       error.value = null;

       try {
        const response = await axios.get('http://127.0.0.1:8001/api/all-product');
        products.value = response.data; 

        console.log(products.value , 'In Scoped')

       } catch (error) {
        error.value = 'Failed to fetch products';
       }finally{
        loading.value = false;
       }
    }
    
    console.log(products.value , 'Out Scoped')

    
    return { products, loading, error, fetchAllProducts }
    
})

