<template>
  <div class="signup">
    <h1>ログイン</h1>
   <!-- <input type="text" placeholder="ユーザー名" v-model="username">-->
	<input type="test" placeholder="email" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button v-on:click="signIn">ログイン</button>
		<button @click="googleLogin">Googleでログイン</button>
    <p>
      <router-link to="/register">アカウント登録はこちらからできます</router-link>
    </p>
	<p>
	  <router-link to="/">Top画面に戻る</router-link>
	</p>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  name: '',
  data () {
    return {
      username: '',
	  email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          alert('ログイン成功です。')
		 		 	this.$router.push('/')
        },
        error => {
          alert(error.message)
        }
      )
    },
		googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logOut () {
      firebase.auth().signOut()
    }
  }
}
</script>
