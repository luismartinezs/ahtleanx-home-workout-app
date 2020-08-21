<template>
  <div class="w-full">
    <span>
    {{timer}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TheTimer',
  data () {
    return {
      timer: '1:00'
    }
  }
}
</script>
