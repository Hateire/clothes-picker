import { ref } from 'vue'

export function useSelection({ maxLeft = 6 } = {}) {
  const selectedLeft = ref([])
  const selectedRight = ref(null)

  function toggleLeft(item) {
    const index = selectedLeft.value.findIndex(i => i.id === item.id)

    if (index !== -1) {
      selectedLeft.value.splice(index, 1)
      return
    }

    if (selectedLeft.value.length >= maxLeft) {
      alert(`Нельзя выбрать больше ${maxLeft} предметов.`)
      return
    }

    selectedLeft.value.push(item)
  }

  function removeFromLeft(id) {
    const index = selectedLeft.value.findIndex(i => i.id === id)
    if (index !== -1) {
      selectedLeft.value.splice(index, 1)
    }
  }

  function toggleRight(item) {
    if (selectedRight.value?.id === item.id) {
      selectedRight.value = null
      return
    }

    selectedRight.value = item
  }

  function clearRight() {
    selectedRight.value = null
  }

  return {
    selectedLeft,
    selectedRight,
    toggleLeft,
    removeFromLeft,
    toggleRight,
    clearRight
  }
}