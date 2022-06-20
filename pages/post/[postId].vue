<script setup>
    const userData = useUserData()
    const { profile, alerts } = storeToRefs(userData)

    const posts = usePosts()
    const post = storeToRefs(posts).loadedPost
    const postId = useRoute().params.postId




    onBeforeMount(() => {
        userData.getProfile()
        userData.getAlerts()

        posts.getPost(postId)
    })


</script>






<template>
<div v-if="posts.postIsLoaded" class="card">
    <img :src="post.poster.photo"/>{{ post.poster.name }} {{ post.poster.email }}
    <br>
    {{ post.text }}
    <br>
    {{ new Date(post.postedOn).toDateString() }}
</div>
<div v-else>
    Loading...
</div>
</template>
















<script>
    import { useUserData } from "~/stores/useUserDataStore"
    import { usePosts } from "~/stores/usePostsStore"
    import { storeToRefs } from "pinia"
</script>