<script setup>
import { useBodyMassIndexStore } from './stores/BodyMassIndexStore.js'
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

const bmiStore = useBodyMassIndexStore()

</script>

<template>
  <div>
    <h1> Body Mass Index Calculator</h1>

    <!-- Checkbox for selecting unit system -->
    <div class="checkbox-center">
      <label>
        <input type="checkbox" v-model="bmiStore.isMetricSelected" />
        Use metric units (height in meters, weight in kilograms)
      </label>
    </div>

    <!-- Include the BodyMassIndexForm component, connected to the store -->
    <BodyMassIndexForm />

    <!-- Display the BMI result -->
    <p v-if="bmiStore.bmi !== null">BMI is: {{ bmiStore.bmi.toFixed(2) }}</p>
    <p v-else> No valid data yet</p>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: lightseagreen ;
}

body {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.checkbox-center {
  text-align: center;
  margin-bottom: 20px;
}
</style>
