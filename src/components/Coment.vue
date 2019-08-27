<template>
  <div class='coment'>
    <div class='ja2'>
        <h1><b><i>Headliner de opinão</i></b></h1>
        <p class='opinion'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p class='user'>por: User456</p>
          <img src='../assets/like.svg' style='max-width: 5%;'> 1k
          <img src='../assets/deslike.svg' style='max-width: 5%;'> 1k
      <div class='comentario' v-for='item in mock.content'>
          <h6>{{item['author']}}</h6>
            <p>{{item['content']}}</p>
            <img class='core' src='../assets/like.svg'>1k
            <img class='core' src='../assets/deslike.svg'>1k
      </div>
      <input type='text' placeholder='Debata essa opinião...'><!--Não sabia como colocar o botão dentro do input fiquei com sono e fui dormir-->
    </div>
  </div>
</template>

<script>
export default {
name: 'coment',
  data(){
    return{
      mock: {
        "status": "success",
          "content": [
          {
            "author": "João Pedro",
            "content": "Falou pouco mais falou bostxx",
            "id": "eev6ce0dlj774ekiafnydc"
          },
          {
            "author": "João Pedro",
            "content": "Falou pouco mais falou bosta",
            "id": "tt8dl58m4pb4dlbl4r5q4d"
          }
        ]
      }
    }
  }
}

</script>

<style lang="css">
@font-face{
  font-family: 'psans';
  src: url('../assets/fonts/psans.ttf');
}
.core{
  max-width: 3%;
}
.comentario{
  margin-top: 2%;
  padding: 1%;
  margin-bottom: 2%;
  background-color:  rgb(233, 228, 206) !important;
}
.user{
  color: rgba(149, 165, 166, 0.9);
}
.ja2{
  padding-top: 1%;
  padding-bottom: 1%;
  color: black;
  border: 1px solid;
  padding-right: 2%;
  padding-left: 2%;
  text-align: left;
  font-family: 'psans';
  margin-right: 30%;
  margin-left: 30%;
  box-sizing: border-box;
  box-shadow:  -10px 0px 10px 1px #aaaaaa;
}
.opinion{
  font-size: 1.5em;
}
input{
  width: 100%
}
</style>