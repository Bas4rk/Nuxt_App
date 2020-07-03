<template>
  <div class="top">
    <h1>Top画面</h1>
		<p>{{errorMessage}}</p>
		<div v-if="isLogin">
			<p>{{user.email}}でログインしてます。</p>
			<button @click="logOut">ログアウト</button>
		</div>
		<div v-else>
			<p>ログインしていません</p>
		</div>
	<Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
//import firebase from '@/plugins/firebase'

export default {
  name: 'Top',
  data () {
    return {
			isLogin: 'false',
			user: [],
			errorMessage: ''
    }
  },
	mounted: function () {
   this.$auth.onAuthStateChanged(user => {
      this.errorMessage = ''
      if (user) {
				this.isLogin = true
        this.user = user
      } else {
				this.isLogin = false
        this.user = []
      };
    })
  },
  components: {
	Footer
  },
  methods: {
    logOut () {
     this.$auth.signOut()
    }
  }
}
</script>
