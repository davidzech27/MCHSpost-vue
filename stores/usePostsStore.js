import { defineStore, acceptHMRUpdate } from "pinia"

const [apiGet, apiPost] = [useApiGet(), useApiPost()]


export const usePosts = defineStore("posts", {
    state: () => ({
        friendsPosts: [],
        publicPosts: [],
        loadedPost: {}
    }),
    getters: {
        isLoaded() {
            return (postType) => { return JSON.stringify(this[postType + "Posts"]) !== "[]" }
        },
        postIsLoaded() {
            return JSON.stringify(this.loadedPost) !== "{}"
        }
    },
    actions: {
        async getPosts(postType) {
            if (!this.isLoaded(postType)) this[postType + "Posts"] = await apiGet("/post/all")//TODO change logic once endpoints are updated
        },
        async getPost(postId) {
            if (this.loadedPost._id !== postId || !this.postIsLoaded) {
                this.loadedPost = {}
                this.loadedPost = await apiGet("post/" + postId)
            }
        },
        async uploadPost(data) {
            const newPost = await apiPost("/post/upload", data)
            if (newPost.postSetting === "public") this.publicPosts = [newPost, ... this.publicPosts]//!should also work with private posts
        }
    }
})
//TODO implement getting only a certain amount of posts and then getting some more posts after that

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePosts, import.meta.hot))
}