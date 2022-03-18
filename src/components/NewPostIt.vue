<template>
  <div>
    <div class="grand">
      <div class="grand-title"><input class="titre" type="text" v-model="title" placeholder="Votre titre"/></div>
      <div class="grand-note"><input class="milieu" type="text" v-model="content" placeholder="Entrer votre post-it"/></div>
      <div class="postIt-bouton">
        <router-link to="/">
          <button class="boutonRetour">Retour</button>
        </router-link>

          <button class="bouton" v-on:click="valider">Valider</button>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewPostIt",
  data() {
    return {
      title: "",
      content: [""],
    }
  },
  methods: {
    valider() {
      axios.post('http://5.135.119.239:3090/notes',
          {title: this.title, content: this.content})
          this.title= ""
          this.content = [""]

    },
  },
}
</script>

<style scoped>
.grand {
  width: 400px;
  height: 400px;
  background-color: limegreen;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 30px;
}

.titre {
  background-color: limegreen;
  width: 90%;
  height: 30px;
  font-size: 30px;
  font-weight: bold;
  border: none;
}

.milieu {
  background-color: limegreen;
  width: 90%;
  height: 250px;
  font-size: 30px;
  border: none;
}

.postIt-bouton {
  display: flex;
  justify-content: space-between;
}
.boutonRetour{
  background-color: dodgerblue;
  border-radius: 20px;
  margin-left: 7px;}
</style>