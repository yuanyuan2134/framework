<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App',
  mounted() {

    /* 加载腾讯地图库,jsnp回调 */
    this.$jsonp('https://map.qq.com/api/js?v=2.exp',{
      key: '7FYBZ-SKMKW-D5HR6-RUHRK-Z76EE-DNBYL'
    }).then(()=>{
      this.$globalEvent.$emit('mapInited');
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
