const [apiGet, apiPost] = [useApiGet(), useApiPost()]



export const useAllPosts = () => {
    const posts = ref("loading")

    onBeforeMount(async () => {
        posts.value = await apiGet("/post/all")
    })

    return posts
}