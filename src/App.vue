<template>
  <p>
  <router-link to="/">Home</router-link>
  &nbsp;&nbsp;&nbsp;
  <router-link to="/post">Post</router-link>
  &nbsp;&nbsp;&nbsp;
  <router-link to="/modal">Modals</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script setup>

</script>
