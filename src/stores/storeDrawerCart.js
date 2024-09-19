import { defineStore } from "pinia"

export const useStoreDrawerCart = defineStore('storeDrawerCart', () => {

    const drawer =  ref(false)
    
    const drawerHandle = () =>{
        drawer.value = !drawer.value
    }


    return { drawer , drawerHandle }
  })