<template>
    <h2 class="title">{{ title }}</h2>
</template>

<style lang="scss">
.title {
    font-family: OpenSans-Bold;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 48px;
}
</style>

<script>
export default {
    props: {
        title: String
    }
}
</script>