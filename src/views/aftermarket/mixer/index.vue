<template>
  <Header />
<<<<<<< HEAD
</template>

<script setup>
import Header from '../../../components/base/Header.vue'

</script>
=======

  <Container>
    <h2>Step Into Our Boots</h2>
    <p class="pb-4">
      Gyptech mixer boots are made from customer specific molds and crafted by
      gypsum industry professionals. Our unique process and innovative chemical
      composition means you will receive flexible, durable and consistently high
      quality boots, designed for exceptional performance in the gypsum
      industry. Play safe — only trust genuine Gyptech brand spare parts and
      Gyptech approved aftermarket parts.
    </p>
    <router-link
      class="btn btn-xl btn-light text-color-accent-dark"
      :to="{ name: 'contact' }"
      >mixer boot contact form</router-link
    >
    <h2 class="pt-20">Single Mixer Boots</h2>
    <div class="grid grid-cols-7">
      <div class="col-span-2 flex items-center">
        <img class="w-3/5" src="@/assets/images/pipe.png" alt="pipe" />
      </div>
      <div class="col-span-5">
        <SimpleStripedTable :headers="headers" :items="items" class="object-cover" />
      </div>
    </div>
    <h2 class="pt-8">Pant Leg Mixer Boots</h2>
    <div class="grid grid-cols-7">
      <div class="col-span-2 flex items-center">
        <img class="w-3/5 " src="@/assets/images/pipe.png" alt="pipe" />
      </div>
      <div class="col-span-5">
        <SimpleStripedTable :headers="headers" :items="items" />
      </div>
    </div>
    <h2 class="pt-8">Dual Stream Mixer Boots</h2>
    <div class="grid grid-cols-7">
      <div class="col-span-2 flex items-center">
        <img class="w-3/5" src="@/assets/images/pipe.png" alt="pipe" />
      </div>
      <div class="col-span-5">
        <SimpleStripedTable :headers="headers" :items="items" />
      </div>
    </div>
  </Container>
  <SplitCTA />
</template>

<script setup>
import SplitCTA from '@/components/layouts/cta/SplitCTA.vue'
import SimpleStripedTable from "../../../components/app/tables/SimpleStripedTable.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header.vue";
</script>
>>>>>>> 556083c331df83dc4aac0f7ed3be84e3505b6e56
