<template>
  <div class="signup">
    <h1>アカウント登録</h1>
   	<!-- <input type="text" placeholder="ユーザー名" v-model="username">-->
		<input type="text" placeholder="name" v-model="username">
		<input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button v-on:click="signUp">登録</button>
    <p>
      <router-link to="/login">ログインはこちらからできます</router-link>
    </p>
	<p>
      <router-link to="/">Top画面に戻る</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      username: '',
	 		email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
					this.$firestore
        		.collection('users')
        		.doc(this.username)
        		.set({
          		name: this.username,
          		email: this.email,
							icon: '',
							group: ''
          	//	icon: user.photoURL
        		})
						.then(function() {
   						 console.log("Document successfully written!");
						})
						.catch(function(error) {
					    console.error("Error writing document: ", error);
						});
          alert('アカウント登録が完了しました。Top画面に飛びます', user.email)
          this.$router.push('/')
        })
        .catch(error => {
          alert('アカウント作成に失敗: '+error.message)
        })
    }
  }
}
</script>
