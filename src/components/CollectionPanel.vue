<template>
  <div class="collection-panel card">
    <h4>{{ title }}</h4>

    <div class="items-row">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :isSelected="selectedIds.includes(item.id)"
        @click="onItemClick(item)"
      />
    </div>
  </div>
</template>

<script setup>
import ItemCard from './ItemCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  },
  selectedIds: {
    type: Array,
    default: () => []
  },
  selectionType: {
    type: String,
    default: 'multiple'
  },
  maxSelectable: {
    type: Number,
    default: 6
  }
})

const emit = defineEmits(['toggleSelect'])

function onItemClick(item) {
  emit('toggleSelect', item)
}
</script>

<style scoped>
.collection-panel {
  flex: 1;
  min-height: 420px;
}

.items-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}
</style>