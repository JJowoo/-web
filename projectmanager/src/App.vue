<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    
    <button v-on:click="fetchData">get data</button>
    <button type="button" @click="fetchNewsList"> test</button>
    <div >
      <p>테스트:{{newsList}}</p>
    </div>
  

    <button type="button1" @click="searchWeather">보기</button>
    <div v-if='view === true'>
      <h2>국가명 : {{ country }}</h2>
      <p>도시명 : {{ city }}</p>
    </div>

    <!--login page-->
    <div v-if='view === false'>
      <h2>로그인</h2>
      <p>아이디 : <input type="text" v-model="id"></p>
      <p>비밀번호 : <input type="password" v-model="pw"></p>
      <button type="button" @click="login">로그인</button>
    </div> 

    <div id="nav">
      <router-link to="/home">home</router-link>|
      <router-link to="/index">index</router-link>
    </div>
    <router-view/>


  </div>
</template>

<script>
import { fetchNewsList } from './api/index.js';

export default {
  data() {
    return {
      news:[],
      view: false,
      country: '',
      city: '',

      userId:'',
      userPw:''
    
    }
  },
  computed: {
      hasResult: function() {
        return this.posts.length > 0
      }
  },

  methods: { //다른 테스트용
    searchWeather() {
      const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=5dc753fbb35d7e99e7fd80b06a9a18a7'
      this.$http.get(`${BASE_URL}`)
      .then((result) => {
        this.country = result.data.sys.country
        this.city = result.data.name
        this.view = true
        console.log(result)
      })
    },

    //로그인
    login() {
      if(this.id === 'admin' && this.pw === '1234') {
        this.view = true
      } else {
        alert('아이디와 비밀번호를 확인해주세요.')
      }
    },
  },

  created() {
    fetchNewsList()
      .then(response => {
        this.news = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
