<template>
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-1">
                <select class="form-select" aria-label="Default select example" v-model="typeCards" @change="getArchetype">
                    <option value="All"></option>
                    <option value="Alien">Alien</option>
                    <option value="Chaos">Chaos</option>
                    <option value="Dark Magician">Dark Magiciant</option>
                    <option value="HERO">HERO</option>
                    <option value="Thunder Dragon">Thunder Dragon</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import { getConstantType } from '@vue/compiler-core';

export default {
    name: 'SearchComponent',
    data() {
        return {
            typeCards: ""
        }
    },
    methods: {
        getArchetype() {
            this.$emit("getType", this.typeCards)
        }
    }
}
</script>

<style lang="scss" scoped></style>