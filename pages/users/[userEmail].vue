<script setup>





    const userEmail = useRoute().params.userEmail




</script>





<template>
<div class="card">
    user {{ userEmail }}
</div>
</template>



<script> 
    import { useUserData } from "~/stores/useUserDataStore"
    import { usePosts } from "~/stores/usePostsStore"
    import { storeToRefs } from "pinia"
</script>