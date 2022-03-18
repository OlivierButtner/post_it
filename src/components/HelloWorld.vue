<template>
<!--  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Les post it seront affichés ici</p>
    <h3>TEst de visualisation</h3>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
  </div>-->

  <div class="addPost-it"> <!-- permet de rentrer les nouveaux post it -->
    <input type="text" v-model="postIts.title"/> | titre de mon post it {{ postIts.title }}
  </div>


</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>       /* Add "scoped" attribute to limit CSS to this component only */
body {
}
.hello {
  max-width: 1024px;
  background-color: lightgrey;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
