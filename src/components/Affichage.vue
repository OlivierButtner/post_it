<template>
  <div class="grand">
    <div class="input-modif"><textarea class="input-haut" v-model="postItDetail.title"></textarea></div>
    <div class="grand-title"><strong> {{ postItDetail.title }} </strong></div>
    <div class="input-modif"><textarea class="input-milieu" v-model="postItDetail.content[0]"></textarea></div>
    <div class="grand-note">{{ postItDetail.content[0] }}</div>
    <div class="postIt-bouton">
      <!--      {{updateContent}}-->
      <router-link to="/">
        <button class="boutonRetour">Retour</button>
      </router-link>
      <router-link to="/">
        <button class="bouton" v-on:click="maj">Mettre à jour</button>
      </router-link>
      <router-link to="/">
        <button class="bouton" v-on:click="effacer">Effacer</button>
      </router-link>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Affichage",
  data() {
    return {
      postItDetail: null,
      title: String,
      content: String,

    }
  },
  props: {},
  mounted() {
    axios.get('http://5.135.119.239:3090/notes/' + this.$route.params._id)
        .then(response => {
          this.postItDetail = response.data.note
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {
    maj: function () {
      axios.put('http://5.135.119.239:3090/notes/' + this.$route.params._id,
          {"title": this.postItDetail.title, "content": [this.postItDetail.content[0]]})
          .catch(error => {
            console.log(error)
          })
    },
    effacer: function () {
      axios.delete('http://5.135.119.239:3090/notes/' + this.postItDetail._id)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error)
          });
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
  box-shadow: -10px 10px 1em grey;
  overflow: auto;
}

.input-milieu {
  width: 350px;
  height: 50px;
  overflow: auto;
}

.input-haut {
  width: 350px;
  height: 25px;
  overflow: auto;
  margin-top: 7px;
}

.grand-note {
  word-break: break-all;
}

.postIt-bouton {
  display: flex;
  justify-content: space-between;
}

.boutonRetour {
  background-color: dodgerblue;
  border-radius: 20px;
  margin-left: 7px;
}


</style>