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
    h1 {
        background-color: $lightColor;
    }
}
</style>