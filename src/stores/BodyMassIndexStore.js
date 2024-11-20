import { defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useBodyMassIndexStore = defineStore('bmi', () => {
    // Reactive state variables
  const height = ref(null)
  const weight = ref(null)
  const isMetricSelected = ref(true) //Check whether metric units are selected

  // Computed property for BMI calculation
  const bmi = computed(() => {
    if (height.value && weight.value) {
      if (isMetricSelected.value) {
        // Calculate BMI using Metric units 
        return weight.value / (height.value * height.value)
      } else {
        // Calculate BMI using American units 
        return (weight.value / (height.value * height.value)) * 703
      }
    }
    return null // return null if height or weight is not provided
  })

  // Actions to update height, weight, and unit selection
  const setHeight = (newHeight) => {
    height.value = newHeight
  }

  const setWeight = (newWeight) => {
    weight.value = newWeight
  }

  const setIsMetricSelected = (value) => {
    isMetricSelected.value = value
  }

  return {
    height,
    weight,
    isMetricSelected,
    bmi,
    setHeight,
    setWeight,
    setIsMetricSelected,
  }
})
