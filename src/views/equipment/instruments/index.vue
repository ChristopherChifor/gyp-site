<template>
  <Header />

  <Container>
    <h2>Quality & Analytic Instruments</h2>
    <p>Today's markets can be competitive. Meeting the demand for innovative products and higher quality is essential to
      success. Producing a high quality board requires the ability to collect and analyze data in real time. Gyptech
      understands these demands. As an industry leader we are creating award winning, innovative instruments to gather,
      process and make use of production data. </p>
    <div class="grid gap-5 mt-7">
      <router-link class="btn btn-xl btn-light text-color-accent-dark" :to="{ name: 'equipment/instruments/lasers' }">Laser Dimensioning System
      </router-link>
      <router-link class="btn btn-xl btn-light text-color-accent-dark" :to="{ name: 'equipment/gyptech' }">Gyptech Stucco Analyzer
      </router-link>
      <router-link class="btn btn-xl btn-light text-color-accent-dark" :to="{ name: 'equipment/thermal' }">Thermal Analysis
      </router-link>
    </div>
  </Container>

  <SplitCTA />
</template>

<script setup>
import SplitCTA from '../../../components/layouts/cta/SplitCTA.vue'
import Container from '../../../components/layouts/Container.vue'
import Header from '../../../components/base/Header.vue'

</script>