<script setup>
import { ArrowCircleRightIcon } from "@heroicons/vue/outline";
import { defineProps } from 'vue';

const props = defineProps({
  items: Array
})
</script>

<template>
  <ul class="unstyled space-y-2">
    <li v-for="(item, index) in props.items" :key="index" class="flex items-start">
      <ArrowCircleRightIcon class="mr-2 w-4 h-4 mt-1.5 flex-shrink-0 text-accent" />
      {{ item }}
    </li>
  </ul>
</template>