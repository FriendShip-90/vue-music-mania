<template>
  <RouterView />
</template>

<script>
import HelloWorld from "~/components/HelloWorld";

export default {
  computed: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "~/scss/reset";
@import "~/scss/main";
</style>