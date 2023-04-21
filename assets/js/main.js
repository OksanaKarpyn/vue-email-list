const {
  createApp
} = Vue

createApp({
  data() {
    return {
      emails: [],
      count: 10,
    }
  },

  methods: {
    api() {
      for (let i = 0; i < this.count; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            this.emails.push(res.data.response);
          })
      }


    }
  }
}).mount('#app')