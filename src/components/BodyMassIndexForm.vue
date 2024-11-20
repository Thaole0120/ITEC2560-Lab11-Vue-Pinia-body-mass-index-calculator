<script setup>
import { ref, watch } from 'vue'
import { useBodyMassIndexStore } from '../stores/BodyMassIndexStore.js'

const bmiStore = useBodyMassIndexStore()

// Reactive variables for height and weight
const height = ref(bmiStore.height)
const weight = ref(bmiStore.weight)

// Watch for changes in unit selection and reset height and weight when units change
watch(() => bmiStore.isMetricSelected, () => {
  height.value = null
  weight.value = null
})

</script>

<template>
  <div class="bmi-form">
    <h2>Enter your height and weight</h2>

    <!-- Height input-->
    <label for="height"> {{ bmiStore.isMetricSelected ? 'Height in meters' : 'Height in inches'  }}</label>
    <input type="number" id="height" v-model.number="height" :min="1" :max="bmiStore.isMetricSelected ? 3 : 108" @input="bmiStore.setHeight(height)" />

    <!-- Weight input-->
    <label for="weight"> {{ bmiStore.isMetricSelected ? 'Weight in kilograms' : 'Weight in pounds' }}</label>
    <input type="number" id="weight" v-model.number="weight" :min="1" :max="bmiStore.isMetricSelected ? 300 : 1000" @input="bmiStore.setWeight(weight)" />

  </div>
</template>

<style scoped>
.bmi-form {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>