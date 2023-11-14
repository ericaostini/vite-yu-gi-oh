<template>
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-1">
                <select class="form-select" aria-label="Default select example" v-model="typeCards">
                    <option value="All"></option>
                    <option value="">Alien</option>
                    <option value="2">Infernoble Arms</option>
                    <option value="3">Noble Knight</option>
                    <option value="4">Melodious</option>
                    <option value="5">Archfiend</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchComponent',
    data() {
        return {
            typeCards: ""
        }
    },
}
</script>

<style lang="scss" scoped></style>