<template>
  <div class="NewPost">
    <NewPostIt/>
  </div>
</template>

<script>
import NewPostIt from "@/components/NewPostIt";

export default {
  name: "NewPost",
  components: {NewPostIt}
}
</script>

<style scoped>
.NewPost{
  display: flex;
  justify-content: center;
}

</style>