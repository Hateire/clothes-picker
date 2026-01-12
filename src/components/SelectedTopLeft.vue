<template>
  <div class="selected-top-left">
    <div v-if="items.length === 0" class="hint">
      No items selected
    </div>

    <div v-else class="items-row">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :isSelected="true"
        @click="emitRemove(item.id)"
      />
    </div>
  </div>
</template>

<script setup>
import ItemCard from './ItemCard.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['remove'])

function emitRemove(id) {
  emit('remove', id)
}
</script>

<style scoped>
.items-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.hint {
  color: #666;
  margin-top: 8px;
}
</style>