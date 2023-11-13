<template>
    <header>
        <h1>
            Yu-Gi-Oh Api
        </h1>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
@use '.././assets/styles/partials/variables' as *;

header {
    height: 100px;

    h1 {
        padding: 15px;
        background-color: $lightColor;
    }
}
</style>