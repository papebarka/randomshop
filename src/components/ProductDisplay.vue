<script>
export default {
    props: ['product']
}
</script>

<template>
    <div class="product">
        <div class="product-image">
            <img :src="product.image" :alt="product.title">
        </div>
        <div class="product-details">
            <div>
                <h2>{{ product.title }}</h2>
                <p>${{ product.price }}</p>
            </div>

            <button>To Cart</button>

            <p>{{ product.description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .product {
        display: flex;
    }

    .product-image, .product-details {
        padding: 10px;
    }
</style>