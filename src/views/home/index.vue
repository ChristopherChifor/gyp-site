<template>
  <HeroImageOverlay>
    <div class="max-w-xl">
      <h1 class="text-accent-lightest leading-tight">vancouver's premier Luxury car service</h1>
      <p class="text-accent-lightest mt-2">
        Professional team of chauffeurs providing exceptional services.
      </p>
    </div>
  </HeroImageOverlay>

  <Split title="Hello World" />
  <router-link :to="{ name: 'about' }"> go to about </router-link>

  <Container class="bg-accent-lightest">
    <h2>At A Glance</h2>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="(item, index) in glance" :key="index">
        <img src="{{item.image}}" alt="" />
        <h3 class="text-lg mb-1">{{ item.title }}</h3>
        <p class="text-sm max-w-sm">
          {{ item.description }}
        </p>
        <div class="todo">do paths and images</div>
        <!-- <router-link :to="{ name: item.path }">
          <p class="text-sm max-w-sm">
          hi
          </p>
        </router-link> -->
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";

const glance = [
  {
    image: "@/assets/images/fence.png",
    title: "Wallboard & plaster Plants",
    description:
      "Turnkey or upgrade, our complete solutions take you from raw gypsum to a superior finished product.",
    path: "#",
  },
  {
    image: "@/assets/images/fence.png",
    title: "Why Choose Gyptech?",
    description:
      "Our plants lead the industry for a reason; superior machinery backed by seasoned professionals.",
    path: "#",
  },
  {
    image: "@/assets/images/fence.png",
    title: "Gyptech Equipment",
    description:
      "We supply only equipment that adheres to our strict standard of quality and performance.",
    path: "#",
  },
  {
    image: "@/assets/images/fence.png",
    title: "Gyptech Replacement Parts",
    description:
      "Gyptech is making it easier to order spare parts. Learn more about our customer service department.",
    path: "#",
  },
];
</script>
