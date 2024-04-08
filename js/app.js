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
            array = [];
            for(let i = 0; i < n; i++){
                
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res)=>{
                    
                    this.emails.push(res.data.response);
                    console.log(this.emails);
                })
                
            }

             
           
            
        }
    }
  }).mount('#app')