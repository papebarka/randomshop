<script>
import ProductDisplay from './ProductCard.vue'

export default {
    components: {
        ProductDisplay
    },

    data(){
        return {
            product: null
        }
    },

    created() {
        const { id } = this.$route.params;
        //console.log(this.$route.params.id);
        //console.log(id)
        this.getProduct(id);
    },

    methods: {
        async getProduct(productId) {
            ///console.log('Product ID', productId)
            //console.log(`https://fakestoreapi.com/products/${productId}`);
            const productFetch = await fetch(`https://fakestoreapi.com/products/${productId}`);
            //console.log(productFetch);
            const product = await productFetch.json();
            console.log(product)
            this.product = product;
        }
    }
}
</script>

<template>
    <ProductDisplay :product="product" />
</template>