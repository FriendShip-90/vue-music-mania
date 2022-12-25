<template>
  <h1>
    사람
    {{ searchMusic }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted(){
    this.$store.dispatch('music/createMusic')
  },
  computed:{
    searchMusic() {
      return this.$store.state.music.musics;
    }
  }
};
</script>