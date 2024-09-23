import { defineStore } from "pinia";
import { useAxios } from '@vueuse/integrations/useAxios';
import { ref } from "vue";


export const useProductStore = defineStore('productStore', () => {

  const product = ref([])

  const { data, isFinished } = useAxios('https://jsonplaceholder.typicode.com/todos/1')

  product.value = data.value;

  console.log(data, 'data')

  return{data}
})

