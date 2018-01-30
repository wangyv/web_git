<template>
    <div>
        <h1>{{$store.state.count}}</h1>
        <button @click="addAction('add',10)">add</button>
        <button @click="reduceAction('reduce')">reduce</button>
    </div>
</template>

<script>
import store from '@/vuex/store.js'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  store,
  //   computed: {
  //     count () {
  //       return this.$store.state.count
  //     }
  //   }
  //   computed: mapState({
  //     count: state => state.count
  //   })
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<style scoped>

</style>
