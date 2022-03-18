<template>
  <div class="display-vue">
    <Affichage/>
  </div>
</template>

<script>
import Affichage from "@/components/Affichage";

export default {
  name: "display",
  components: {Affichage}
}
</script>

<style scoped>
.display-vue {
  display: flex;
  justify-content: center;
}
</style>