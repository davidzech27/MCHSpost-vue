<template>
<slot></slot>
</template>

<script>
export default {
    head: {
        bodyAttrs: {
            class: "overscroll-none"
        }
    }
}
</script>