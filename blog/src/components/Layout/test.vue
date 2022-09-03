<template>
  <Layout>
    <template v-slot:left>
        left
    </template>
    <template #middle>
        middle
    </template>
    <template #right>
        right
    </template>
  </Layout>
</template>

<script>
import Layout from "./index.vue";
export default {
    components:{
        Layout
    }
}
</script>

<style>

</style>