const {createApp} = Vue;

createApp ({
  data(){

    return {
      apiUrl : 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails : [],


    }
  },
  methods : {
    getApi (){
      axios.get(this.apiUrl)
      .then (result => {
        console.log(result.data.response);
        this.emails.push(result.data.response)
        console.log(this.emails)
      })
    }
  },

  mounted(){
    for (let i = 0; i < 10; i++) {
          this.getApi();     
    }
  }

}).mount('#app')