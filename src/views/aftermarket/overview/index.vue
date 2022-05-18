<template>
  <Header />
  
    <Split
      title="Customer Service"
      description="Since being incorporated in 1993, Gyptech has become a global leader in the design, construction, and commissioning of wallboard equipment and services. We have developed a network of highly experienced technical professionals dedicated to customer satisfaction. Our team of management, engineers, designers, operations and maintenance personnel guarantees your success through state-of –the-art design and manufacturing. Many of our employees have years of experience in the gypsum industry, both making gypsum board and designing and maintaining equipment. Put this experience to work for you. <br><br>

With offices in North America, Europe and South America, we have been responsible for supplying the equipment for the majority of new production volumes over the last decade. Our experience designing and commissioning equipment globally, means that we are prepared to meet the unique requirements presented by each of our customers. Our wallboard plants serve a variety of production capacities and can be tailored to surpass expectations of safety, quality and performance in any market. We look forward to partnering with you to start making gypsum products for your market today."
      flip
    >
      <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
      <template v-slot:extra-content>
          Hello World
      </template>
    </Split>
    <Container>
    <h2>Aftermarket Replacement Parts</h2>
    <p>
      Gyptech is pleased to provide the parts, knowledge and expertise to assist
      with all your plant's maintenance and upgrade needs. We supply quality
      replacement parts. Leverage our global reach and purchasing power to get
      the right parts at a great price.
    </p>
    </Container>
    <Split
      title="Our spare part supply includes:"
      description="Since being incorporated in 1993, Gyptech has become a global leader in the design, construction, and commissioning of wallboard equipment and services. We have developed a network of highly experienced technical professionals dedicated to customer satisfaction. Our team of management, engineers, designers, operations and maintenance personnel guarantees your success through state-of –the-art design and manufacturing. Many of our employees have years of experience in the gypsum industry, both making gypsum board and designing and maintaining equipment. Put this experience to work for you. <br><br>

With offices in North America, Europe and South America, we have been responsible for supplying the equipment for the majority of new production volumes over the last decade. Our experience designing and commissioning equipment globally, means that we are prepared to meet the unique requirements presented by each of our customers. Our wallboard plants serve a variety of production capacities and can be tailored to surpass expectations of safety, quality and performance in any market. We look forward to partnering with you to start making gypsum products for your market today."
      flip
    >
      <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
    </Split>

    <SplitCTA />
  
</template>

<script setup>
import Split from "../../../components/layouts/Split.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header.vue";
import SplitCTA from "@/components/layouts/cta/SplitCTA.vue";
</script>