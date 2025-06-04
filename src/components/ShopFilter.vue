<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Фильтер</h5>
      <div class="row g-3">
        <div class="col-md-4">
          <input v-model="name" class="form-control" placeholder="Имя продукт" />
        </div>
        <div class="col-md-4">
          <select v-model="category" class="form-select">
            <option value="">Категории</option>
            <option value="Electronics">Электроники</option>
            <option value="Clothing">Одежды</option>
          </select>
        </div>
        <div class="col-md-4">
          <input v-model="price" type="number" class="form-control" placeholder="Максимальная цена" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useShop } from '../shop'

const store = useShop()
const name = ref('')
const category = ref('')
const price = ref('')

watch([name, category, price], () => {
  store.updateFilters({ name: name.value, category: category.value, price: price.value })
})
</script>