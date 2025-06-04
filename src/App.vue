<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Savdo App</router-link>
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/cart">Cart</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>