<!--import components, defineEmits(), defineProps(), ref(), computed, methods, watchers-->
<script setup>
    const posts = usePosts()

    const text = ref("")
    const isPrivate = ref(false)

    async function uploadPost() {
        posts.uploadPost({
            text: text.value,
            postSetting: isPrivate.value ? "private" : "public"
        })
    }

</script>


<template>
<div>
    <textarea v-model="text" placeholder="Your post"/>
    <br>
    <input type="checkbox" v-model="isPrivate">
    Private
    <br>
    <button @click="uploadPost">Upload</button>
</div>
</template>


<script>
    import { useUserData } from "~/stores/useUserDataStore"
    import { usePosts } from "~/stores/usePostsStore"
    import { storeToRefs } from "pinia"
</script>