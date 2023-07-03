<script>
import ProductDisplay from './ProductCard.vue'

export default {
    components: ['ProductDisplay'],

    data(){
        return {
            product: null
        }
    },

    created() {
        const { id } = this.$route.params.id;

    },

    methods: {
        async getProduct(productId) {
            const productFetch = await fetch(`https://fakestoreapi.com/products/${productID}`);
            const product = await productFetch.json();
            this.product = product;
        }
    }
}
</script>