// Utilizzando Vue
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare
// 10 indirizzi email e stamparli in pagina all’interno di una lista.


// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.



const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Api Email',
        email: {},
        emails: [],
      }
    },
    methods: {
        generateEmail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                console.log(response.data);
                this.email.text = response.data.response;
            })
        },

        generateEmails(n){
            arrayEmails = [];
            let counterEmail = 0;
            for(let i = 0; i < n; i++){
                
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res)=>{
                    
                    arrayEmails.push(res.data.response);

                    counterEmail++;

                    if(counterEmail === n){
                        this.emails = arrayEmails;
                    }


                    
                })
                
            }
        },

    }
  }).mount('#app')