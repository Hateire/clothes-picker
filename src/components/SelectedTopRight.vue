<template>
  <div class="selected-top-right">
    <div v-if="!item" class="hint">
      No item selected
    </div>

    <div v-else class="content">
      <div class="big-card">
        {{ item.name }}
      </div>

      <button class="clear-btn" @click="emitClear">
        Clear
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['clear'])

function emitClear() {
  emit('clear')
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.big-card {
  border: 4px solid #222;
  padding: 18px;
  text-align: center;
  font-weight: 700;
}

.clear-btn {
  padding: 6px 10px;
  cursor: pointer;
}

.hint {
  color: #666;
}
</style>