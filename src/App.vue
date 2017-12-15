<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <div class="content">
    		<router-view/>
    </div>
    
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld'*/

export default {
  name: 'app'/*,
  components: {
    HelloWorld
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>