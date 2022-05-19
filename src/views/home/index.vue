<template>
  <HeroImageOverlay>
    <div class="max-w-xl">
      <h1 class="text-accent-lightest leading-tight">Turn-Key Solutions</h1>
      <h2 class="text-accent-lightest mt-2">
        for Wallboard Manufacturing.
        <p class="text-accent-lightest mt-2">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo ad non deserunt suntui irure qui lorem.
        </p>
      </h2>
    </div>
  </HeroImageOverlay>

  <OverlapImageCTA />
  
  <Container class="bg-accent-lightest">
    <h2>At A Glance</h2>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="(item, index) in glance" :key="index">
        <img :src="item.image" alt="" />
        <h3 class="text-lg mb-1">{{ item.title }}</h3>
        <p class="text-sm max-w-sm">
          {{ item.description }}
        </p>
        <div class="todo">do paths and images</div>
        <router-link :to="{ name: item.path }">
          <p class="text-sm max-w-sm">
          Learn More
          </p>
        </router-link>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";
import OverlapImageCTA from "@/components/layouts/cta/OverlapImageCTA.vue";

const getImage = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};

const glance = [
  {
    image: getImage("/images/fence.png"),
    title: "Wallboard & plaster Plants",
    description:
      "Turnkey or upgrade, our complete solutions take you from raw gypsum to a superior finished product.",
    path: "home",
  },
  {
    image: getImage("/images/fence.png"),
    title: "Why Choose Gyptech?",
    description:
      "Our plants lead the industry for a reason; superior machinery backed by seasoned professionals.",
    path: "home",
  },
  {
    image: getImage("/images/fence.png"),
    title: "Gyptech Equipment",
    description:
      "We supply only equipment that adheres to our strict standard of quality and performance.",
    path: "home",
  },
  {
    image: getImage("/images/fence.png"),
    title: "Gyptech Replacement Parts",
    description:
      "Gyptech is making it easier to order spare parts. Learn more about our customer service department.",
    path: "home",
  },
];
</script>
