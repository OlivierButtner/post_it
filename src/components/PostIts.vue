<template>

  <div class="post-it">
    <div class="postIt-title"><strong> {{ title }} </strong></div>
    <div class="postIt-note"> {{ content }}</div>
    <div class="postIt-bouton">
      <router-link :to="{ name: 'display', params: { _id }}"><button class="bouton">Voir</button></router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "PostIts",
  props: {
    title: String,
    content: String,
    _id: String
  },

  methods: {

  },

}

</script>

<style>

.post-it {
  width: 150px;
  height: 150px;
 background-color: limegreen;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -10px 10px 1em grey;
  margin-top: 10px;
  overflow: auto;

}

.postIt-bouton {
  display: flex;
  justify-content: flex-end;
  padding-right: 7px;
  padding-bottom: 7px;
}

.bouton {
  background-color: dodgerblue;
  border-radius: 20px;
}
</style>