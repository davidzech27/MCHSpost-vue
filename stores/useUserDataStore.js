import { defineStore, acceptHMRUpdate } from "pinia"

const [apiGet, apiPost] = [useApiGet(), useApiPost()]


export const useUserData = defineStore("userData", {
    state: () => ({
        profile: {},
        alerts: []
    }),
    getters: {
        isLoaded() {
            return JSON.stringify(this.profile) !== "{}"
        },
        isAuthenticated() {
            return this.profile !== 401
        }
    },
    actions: {
        async getProfile() {
            if (!this.isLoaded) this.profile = await apiGet("/profile")
        },
        async updateProfile(data) {
            this.profile = await apiPost("/profile/update", data)
        },
        async getAlerts() {
            this.alerts = await apiGet("/alerts")
        }
    }
})

//TODO add subscribe function for alerts

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserData, import.meta.hot))
}