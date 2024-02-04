<script setup lang="ts">
import { computed, ref, watch } from "vue";
import facebookIcon from "@/assets/facebook.svg";
import twitterIcon from "@/assets/twitter.svg";
import instagramIcon from "@/assets/instagram.svg";
import { useInterval, useIntervalFn, useMousePressed } from "@vueuse/core";
import { useHoldEvent } from "../use/useHoldEvent";
const tags = ref([
  { name: "Organic", color: "#ccc" },
  { name: "Leather", color: "#ccc" },
  { name: "PP", color: "#ccc" },
  { name: "Orange", color: "#ccc" },
  { name: "Black and White", color: "#ccc" },
]);

const variants = ref ([
  {name: "Black", color:"#fff", backgroundColor:"#000"},
  {name: "White", color:"#000", backgroundColor:"#fff"},
  {name: "Purple", color:"#fff", backgroundColor:"#df6bdd"},
])

const selectedVariant = ref (0)
const article =
  "Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits.";

const qty = ref(0);
const canIcrease = computed(() => qty.value < 20);
const canDecrease = computed(() => qty.value > 0);

const increaseQty = () => {
  if (canIcrease.value === true) qty.value += 1;
};
function decreaseQty() {
  if (canDecrease.value === true) qty.value -= 1;
}
const incBtnRef = ref();
useHoldEvent({
  target: incBtnRef,
  fn: increaseQty
})
const decBtnRef = ref();
useHoldEvent({
  target: decBtnRef,
  fn: decreaseQty
})

</script>

<template>
  <div class="mainwrap">
    <div class="wrap">
      <img class="mainImage" src="/src/assets/nikeAir.jpeg" />
      <div class="wrapm">
        <img
          v-for="i in 5"
          key="i"
          class="cardm"
          src="/src/assets/nikeAir.jpeg"
        />
      </div>
      <h2 class="tags">Tags</h2>
      <div class="tagwrap">
        <div class="tag" v-for="tag in tags" key="">
          {{ tag.name }}
        </div>
      </div>
      <h2 class="sharenow">Share now</h2>
      <div class="wrapicons">
        <facebookIcon />
        <twitterIcon />
        <instagramIcon />
      </div>
    </div>
    <div class="info">
      <div class="description">
        <h2>Description</h2>
        <div class="article">
          {{ article }}
        </div>
      </div>
      <div>
        <h2>Variant</h2>
        <div class="variantWrap">
        <div class="variant" :class="{active:selectedVariant===index}" 
         v-for="(variant,index) in variants" 
          key="" 
          :style="{color:variant.color,background:variant.backgroundColor}" 
          @click="selectedVariant=index"
          >
          {{ variant.name }}
        </div>
       </div>
        <h2>Size</h2>
        <div class="sizewrap">
          <div class="size">S</div>
          <div class="size">M</div>
        </div>
        <h2>Qty</h2>
        <div class="qtywrap">
          <div id="qty">{{ qty }}</div>
          <div class="counterWrap">
            <div id="plusButton" ref="incBtnRef" @click="increaseQty">+</div>
            <div id="minusButton" ref="decBtnRef" @click="decreaseQty">-</div>
          </div>
          <div class="price">$50</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainImage {
  object-fit: contain;
  height: 400px;
  width: 400px;
}
.cardm {
  height: 60px;
  width: 60px;
  object-fit: cover;
}
.wrapm {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.wrap {
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
}
.tag {
  background-color: #f1f1f1;
  border-radius: 28px;
  border: 1px solid #d3d3d3;
  display: inline-block;
  color: #000000;
  font-family: Arial;
  font-size: 10px;
  padding: 4px 17px;
  text-decoration: none;
}
.tagwrap {
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
}
h2 {
  color: #000000;
}
.mainwrap {
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;

  @media (max-width: 1220px) {
    flex-direction: column;
  }
}
.article {
  font-size: 21px;
  width: 634px;
}
.wrapicons {
  display: flex;
  gap: 20px;
}
.sizewrap {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.size {
  background-color: #e3e3e3;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 23px;
  padding: 4px 26px;
  text-decoration: none;
  font-weight: 400;
  animation-duration: 1s;
}
.size:hover {
  background-color: #b8b6b6;
  transition-duration: 0.3s;
}
.qtywrap {
  display: flex;
  flex-direction: row;
}
#qty {
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 23px;
  padding: 4px 26px;
  text-decoration: none;
  font-weight: 400;
  border: 1px solid #999999;
}
.price {
  font-size: 26px;
  color: #000000;
  margin-left: 30rem;
}
.variant {
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-family: Arial;
  font-size: 15px;
  padding: 4px 16px;
  text-decoration: none;
  font-weight: 400;
  border: 1px solid #999999;
  width: 40px;
}
.variant.active::before{
  position: absolute;
  content: "" ;
  left: -5px;
  bottom: -5px;
  top: -5px;
  right:-5px;
  border: 2px solid #000;
  
}

.variantWrap{
  display: flex;
  gap: 10px;
}
.variant.active {
  border-color: transparent;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.counterWrap > div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #999999;
  background-color: #e3e3e3;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
}
.counterWrap > div:hover {
  border-radius: 40px;
  background-color: #b8b6b6;
}
.counterWrap {
  margin-left: 20px;
  width: 100px;
  font-weight: 50;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

</style>
