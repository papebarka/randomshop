<script>
    export default {
        props: ['title', 'img', 'price', 'id'],
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="product-card">
        <img :src="img" :alt="title">
        <div class="product-card-details">
            <div class="product-card-title">
                <p>{{ title }}</p>
            </div>
            <div class="product-card-price">
                <p>${{ price }}</p>
            </div>
            <div class="product-card-display-link">
                <router-link :to="{ name: 'product', params: {id: id} }">
                    VOIR
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 300px;
        height: 300px;
    }
</style>