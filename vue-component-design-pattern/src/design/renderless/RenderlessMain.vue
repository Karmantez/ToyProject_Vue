<template>
  <div>
    <h1>Renderless Pattern</h1>
    <FetchData url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          <p>name: {{ response.name }}</p>
          <p>email: {{ response.email }}</p>
        </div>
        <div v-if="loading">Loading...</div>
      </div>
    </FetchData>
  </div>
</template>

<script>
import FetchData from './FetchData';

export default {
  components: {
    FetchData,
  },
};
</script>

<style></style>
