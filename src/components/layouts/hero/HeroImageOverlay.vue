<template>
  <main class="relative">
    <div class="absolute inset-0 w-full h-full">
      <img
        src="@/assets/images/writing.png"
        alt=""
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-accent-dark opacity-20 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <Container full>
      <slot></slot>
    </Container>
  </main>
</template>

<script setup>
import Container from '../Container.vue'

</script>
