var app = new Vue(
  {
      el: "#root",
      data:{
          emails: [],
      },
      methods: {
          generateEmails(){
              for(let i = 0;i < 10; i++){
                  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                  .then((response) =>
                  {
                      this.emails.push(response.data.response);
                  }
              );
              }
          }
      },
      mounted(){ //funzione non ben conosciuta(usata grazie a documentazione online)
          this.generateEmails();
      }
  }
)