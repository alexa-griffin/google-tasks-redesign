<template>
  <div class="landing">
    <div>
      <h1>Google Tasks Desktop</h1>
      <div class="cta">
        <button class="auth" v-on:click="auth">Go to application</button>
        <a href="https://github.com/alexa-griffin/google-tasks-redesign" target="_blank">See the source</a>
        <a href="https://github.com/alexa-griffin/google-tasks-redesign/blob/master/process/case%20study.md" target="_blank">Read the case study</a>
      </div>  
    </div>
    <div class="img"></div>
    <p class="disclaimer">This application is not made, or endorsed by Google. All images, and fonts are property of Google</p>
  </div>
</template>

<script>

import api from "../api.js"

export default {
  name: "Landing",
  methods: {
    auth() {
      api.auth().then(res => {
        this.$router.push("app")
      })      
    }
  }
}
</script>

<style scoped lang="scss">
@import "../style.scss";

.landing {
  height: 100vh;
  width: 60%;
  max-width: 960px;
  margin: 0 35% 0 5%;
  font-family: $main-font;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    width: 95%;
    margin: 0 auto;
  }
  >div {
    display: flex;
    justify-content: center;
    flex-direction: column;    
  }
  .img {
    position: absolute;
    right: 0;
    background-image: url("../assets/hero.svg");
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    width: 50%;
    height: 100%;
    z-index: -1;
    @media only screen and (max-width: 1240px) {
      opacity: 0.7;
    }
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 3rem;
    letter-spacing: 0.1rem;
  }
  .cta {
    display: flex;
    align-items: center;
    .auth {
      outline: none;
      border: none;
      font-size: 1.3rem;
      padding: 8px 16px;
      border-radius: 8px;
      font-family: $main-font;
      background-color: transparent;
      cursor: pointer;
      border: 1px solid $alt-background;
      color: $main;
      transition: all ease-in-out 0.1s;
      &:hover {
        background-color: rgba($main, 0.1);
        border: 1px solid $main;
      }
    }
    a {
      margin-left: 1rem;
      text-decoration: none;
      color: inherit;
      font-size: 1.1rem;
      border-radius: 8px;
      padding: 6px;
      transition: all ease-in-out 0.1s;
      &:hover {
        background-color: $alt-background;
      }
    }
  }
  .disclaimer {
    position: absolute;
    bottom: 16px;
  }
}
</style>
