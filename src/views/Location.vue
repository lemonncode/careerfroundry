<template>
    <div>
     
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Home",
  
    data() {
      return {
        ip: "",
        api_key: "77c84b56fd1b70854cfbcc6613bb670c",
        //api_key: "20cbadb793b39c977d03631e9c94bf97",
  
        location: '',
      
      };
    },
   async created() {
      // this.getContinentCode();
      //borrar despues
      this.getCode('EU')
     
    },
  
    methods: {
      async getContinentCode() {
        this.loading = true;
        await fetch("https://api.ipify.org?format=json")
          .then((x) => x.json())
          .then(({ ip }) => {
            this.ip = ip;
          });
        try {
          await axios
            .get(`http://api.ipstack.com/${this.ip}?access_key=${this.api_key}`)
            .then((result) => (this.location = result.data));
           
            this.getCode(this.location.continent_code)
        } catch (err) {
          console.log(err);
        }
        this.loading = false;
      },
  
      getCode(code){
          console.log (code)
          this.$emit("getContinentCode", code);
      }
     
    },
  };
  </script>
  