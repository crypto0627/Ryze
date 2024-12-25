<template>
  <div id="app">
    <header class="bg-blue-500 text-white p-4">
      <nav>
        <ul class="flex gap-4">
          <li><router-link to="/main">Home</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li v-if="isMerchant"><router-link to="/merchant-management">Merchant</router-link></li>
          <li v-if="isAdmin"><router-link to="/admin-dashboard">Admin</router-link></li>
          <li><button @click="logout">Logout</button></li>
        </ul>
      </nav>
    </header>
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

// Simulating user role from localStorage
const userRole = localStorage.getItem('userRole'); // Replace with Vuex or Pinia in production
const isMerchant = computed(() => userRole === 'merchant');
const isAdmin = computed(() => userRole === 'admin');

const router = useRouter();

const logout = () => {
  localStorage.removeItem('userRole');
  router.push('/');
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

header ul li {
  margin: 0;
}

header ul li a {
  text-decoration: none;
  color: white;
}

header ul li button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
