<template>
  <div class="container my-4">
    <h1 class="mb-4">Каталог продуктов</h1>
    <router-link to="/cart" class="btn btn-primary mb-3">Корзина</router-link>
    <ShopFilter />
    <div class="row">
      <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-3">
        <ShopCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useShop } from '../shop'
import ShopCart from '../components/ShopCart.vue'
import ShopFilter from '../components/ShopFilter.vue'

const store = useShop()
const filteredProducts = computed(() => store.filteredProducts)
</script>