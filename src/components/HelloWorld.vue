<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <SignIn></SignIn>
  </div>
</template>

<script>
import SignIn from '../components/login/SignIn'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Please Sign In'
    }
  },
  components: {
  	SignIn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
