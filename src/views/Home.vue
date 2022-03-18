<template>
  <div class="home">
    <img class="logo" alt="logo-post-it" src="../assets/logo-post-it.jpg"><br>
    <h1>Bienvenue sur Post-it !</h1>
    <div class="addPost-it">
      <router-link to="/addNewPost">
        <button class="rond" > + Add a new post-it</button>
      </router-link>
    </div>
    <div class="displayAll">
      <PostIts v-for="postIt in postIts" v-bind:key="postIt._id" :title="postIt.title" :content="postIt.content[0]" :_id="postIt._id"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import PostIts from "@/components/PostIts";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    PostIts
  },
  data() {
    return {
      postIts: [],
    }
  },
  beforeCreate() {                    /* marche aussi avec beforeCreate. Lequel est mieux ?*/
  axios.get('http://5.135.119.239:3090/notes')
      .then(response => {
        this.postIts = response.data.notes
      })
      .catch(error => {
        console.log(error)
      })
},
  mounted() {
    axios.get('http://5.135.119.239:3090/notes')
        .then(response => {
          this.postIts = response.data.notes
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style>
.logo {
  width: 200px;
}

.displayAll {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.addPost-it {
  padding-top: 20px;
}
.rond{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  background-color: dodgerblue;

}
</style>