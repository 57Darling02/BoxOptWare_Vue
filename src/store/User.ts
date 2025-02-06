import { defineStore } from "pinia";

export const useUserStore = defineStore('User',{
    state() {
        return {
            access_token:JSON.parse(localStorage.getItem('access_token') as string) || '',     
            main_container_list:JSON.parse(localStorage.getItem('main_container_list') as string )|| [],
            module_container_list:JSON.parse(localStorage.getItem('module_container_list') as string )|| [],
            box_list:JSON.parse(localStorage.getItem('box_list') as string )|| [],
        }
    },
    
})