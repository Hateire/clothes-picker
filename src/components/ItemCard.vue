<template>
  <div
    class="item-card"
    :class="{ selected: isSelected }"
    @click="$emit('click')"
  >
    <div class="item-content">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.item-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 52px;
  margin: 8px;
  border: 4px solid #222;
  cursor: pointer;
  user-select: none;
  background: #fff;
  box-sizing: border-box;
}

.item-card.selected {
  outline: 4px solid #0a84ff;
  transform: translateY(-2px);
}

.item-content {
  font-size: 14px;
  text-align: center;
}
</style>