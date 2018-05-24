<template>
  <div class="container">
    {{hello}}
    <!-- <mptoast /> -->
    <div>
      <card :text="test"></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
// import mptoast from 'mptoast'

export default {
  components:{
    card
  },
  data () {
    return {
      hello:'hello',
      test: 'test'
    }
  },

  methods: {
    // showToast () {
    //   this.$mptoast('我是提示信息')
    // }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style scoped>

</style>
