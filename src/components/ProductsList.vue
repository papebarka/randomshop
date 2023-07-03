<script>
import ProductCard from './ProductCard.vue';


export default {
    props: ['products'],
    components: {
        ProductCard
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main v-if="products.length > 0">
        <ProductCard
            v-for="product in products"
            :key="product.id" 
            :title="product.title"
            :img="product.image"
            :price="product.price"
            />
    </main>
    <main v-else>
        <p>There are no products in this store!</p>
    </main>
</template>

<style scoped>
    main {
        width: 100vw;
        padding: 20px 60px;
        display: grid;
        gap: 30px;
        grid-template-rows: repeat(4, 400px);
        grid-template-columns: repeat(3, 400px);

    }
</style>