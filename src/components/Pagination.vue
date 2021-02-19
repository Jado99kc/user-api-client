<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a  onclick="paginationChange((pagination.current_page - 1))" class="pagination-previous" title="This is the first page" :disabled="(pagination.current_page - 1) <= 0">Previous</a>
    <a onclick="paginationChange((pagination.current_page + 1))" class="pagination-next" :disabled="(pagination.current_page + 1) > totalPages">Next page</a>
    <ul class="pagination-list">
      <div v-for="page in totalPages">
        <li>
          <a @click="changePage(page)" class="pagination-link" aria-label="Goto page 2" :class="{'is-current': pagination.current_page === page}">{{page}}</a>
        </li>
      </div>

    </ul>
  </nav>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
name: "Pagination",
  props:{
    totalPages: Number,
  },
  methods:{
  ...mapActions(['paginationChange']),
    changePage(page){
    this.paginationChange(page)
    }
  },
  computed:{
  ...mapState(['pagination']),


  }
}
</script>

<style scoped>

</style>