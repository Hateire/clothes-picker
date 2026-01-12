<template>
  <div class="app">
    <div class="top-row">
      <div class="top-left card">
        <h3>Selected (from left)</h3>

        <SelectedTopLeft
          :items="selectedLeft"
          @remove="removeFromLeft"
        />

        <div class="selected-counter">
          selected: {{ selectedLeft.length }} / {{ MAX_LEFT }}
        </div>
      </div>

      <div class="top-right card">
        <h3>Selected (from right)</h3>

        <SelectedTopRight
          :item="selectedRight"
          @clear="clearRight"
        />
      </div>
    </div>

    <div class="bottom-row">
      <CollectionPanel
        title="Your items"
        :items="leftItems"
        :selectedIds="selectedLeft.map(i => i.id)"
        selection-type="multiple"
        :maxSelectable="MAX_LEFT"
        @toggleSelect="toggleLeft"
      />

      <CollectionPanel
        title="Available items"
        :items="rightItems"
        :selectedIds="selectedRight ? [selectedRight.id] : []"
        selection-type="single"
        @toggleSelect="toggleRight"
      />
    </div>
  </div>
</template>

<script setup>
import CollectionPanel from './components/CollectionPanel.vue'
import SelectedTopLeft from './components/SelectedTopLeft.vue'
import SelectedTopRight from './components/SelectedTopRight.vue'

import { useItems } from './composables/useItems'
import { useSelection } from './composables/useSelection'

const MAX_LEFT = 6

const { leftItems, rightItems } = useItems()

const {
  selectedLeft,
  selectedRight,
  toggleLeft,
  removeFromLeft,
  toggleRight,
  clearRight
} = useSelection({ maxLeft: MAX_LEFT })
</script>


<style scoped>
.app {
  padding: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.top-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.bottom-row {
  display: flex;
  gap: 20px;
}

.card {
  border: 5px solid #111;
  padding: 12px;
  box-sizing: border-box;
}

.top-left {
  flex: 1;
}

.top-right {
  width: 260px;
}

.selected-counter {
  margin-top: 10px;
  font-weight: 600;
}
</style>