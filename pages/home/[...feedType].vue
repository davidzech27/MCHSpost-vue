<!--import components, defineEmits(), defineProps(), ref(), computed, methods, watchers-->
<script setup>
    const userData = useUserData()
    const { profile, alerts } = storeToRefs(userData)

    const posts = usePosts()
    const feedType = useRoute().params.feedType || "public"
    const feed = storeToRefs(posts)[feedType + "Posts"]

    onBeforeMount(() => {
        userData.getProfile()
        userData.getAlerts()

        posts.getPosts(feedType)//*actually getting all posts
    })



    const postText = ref("")
    const postSetting = ref("public")

    async function uploadPost() {
        posts.uploadPost({
            text: postText.value,
            postSetting: postSetting.value
        })
    }






</script>



<template>
<div class="column">
    <div class="card">
        <!-- <div v-if="userData.isLoaded && userData.isAuthenticated" class="column"> -->
        <div v-if="userData.isLoaded" class="column">    
            <div class="flex items-center ml-2">
                <img :src="profile.photo" class="rounded-md h-6 w-6 mr-4"/>
                <span class="mr-2">{{ profile.name }}</span><span class="text-subtext">{{ profile.email }}</span>
            </div>
            <div class="flex justify-start">
                <textarea v-model="postText" placeholder="Post something" class="text-field !h-20 pt-3 resize-none focus:(!bg-background !bg-opacity-50)"/>
                <button class="button h-20 w-1/2 mx-4 text-2xl bg-hover bg-opacity-20 hover:bg-opacity-50 transitions" @click="uploadPost">Upload</button>
                <div>
                    <input type="radio" v-model="postSetting" value="public" id="public-radio" class="border-4 border-hover rounded-full appearance-none mt-2 mr-2">
                    <label for="public-radio">Public</label>
                    <input type="radio" v-model="postSetting" value="private" id="private-radio" class="mt-2 mr-2">
                    <label for="private-radio">Private</label>
                </div>
            </div>
        </div>
        <div v-else-if="!userData.isLoaded">
            Loading...
        </div>
        <div v-else-if="!userData.isAuthenticated">
            Not logged in
        </div>
    </div>
    
    <div class="card">
        <div v-if="posts.isLoaded(feedType)" class="column">
            <post-card v-for="post in feed" :post="post" :key="post._id"/>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</div>
</template>




<script>
    import { useUserData } from "~/stores/useUserDataStore"
    import { usePosts } from "~/stores/usePostsStore"
    import { storeToRefs } from "pinia"

    //401 for when people try to get their profile or create posts before signing in, 403 when people try to modify or access data they're not supposed to
    //make sure all buttons that make http requests disappear after being used to prevent impulsive spamming

    //TODO LIST

    //TODO1: remake views with stores and decent css
    //TODO1: make view for single user page
    //TODO1: add feed endpoints
    //TODO: add a /posts extension endpoint to every user endpoint

    //TODO2: finish alerts
    //TODO2: make forms
    //TODO2: figure out how user will navigate between feed types
    //TODO2: finish right column in default layout
    //TODO2: make all forms delete text when submitted, and have button be disabled when there is no text




    //TODO eventually: look more into feasbility of different photo upload methods. remember cloudinary



    //*loading state should not be handled within post component. but should loading state be handled within profile component?
</script>

<!--scaffolding
<script setup>





</script>





<template>
<div>

</div>
</template>



<script> 
    import { useUserData } from "~/stores/useUserDataStore"
    import { usePosts } from "~/stores/usePostsStore"
    import { storeToRefs } from "pinia"
</script>
-->