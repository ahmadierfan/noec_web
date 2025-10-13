import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isSidebarOpen: false,
    }),
    actions: {
        setSidebar(value) {
            this.isSidebarOpen = value;
        }
    }
});
