<script>
    import ProductsList from './ProductsList.vue';

    export default {
        components: {
            ProductsList
        },
        data() {
            return {
                products: []
            }
        },

        methods: {
            async getProducts(){
                let products = await fetch("https://fakestoreapi.com/products");
                products = await products.json()
                console.log(products);
                this.products = products;
            }
        },

        computed: {
            productsLength(){
                return this.products.length;
            }
        },

        created() {
            this.getProducts();
        },

        mounted(){
            console.log(`Component mounted and products are ${this.productsLength}`);
        },
    }
</script>

<template>
    <ProductsList :products="products" />
</template>
