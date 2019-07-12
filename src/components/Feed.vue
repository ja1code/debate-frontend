<template>
<div class='feed'>
  <div class="container">
    <div class="row">
      <div v-for='item in mock.content' class='col-4'>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title"><b><i>"{{item["headliner"]}}"</i></b></h4>
              <h6 class="card-subtitle mb-2 text-muted">por {{item["author"]}}</h6>
              <p class="card-text">{{item["body"]}}</p>
              <img class='like' src='../assets/like.svg'> 1k
              <img class='like' src='../assets/deslike.svg'> 1k
              <img class='balao' src='../assets/balao.svg'>
          </div>
        </div>
      </div> 
    </div>  
  </div>
</div>
</template>

<script>
export default {
  name: 'feed',
  data () {
    return {
      mock: {
        "status": "success",
        "content": [
            {
                "id": "0",
                "headliner": "Headliner de uma opinião falsa",
                "body": "Corpo de uma opinião",
                "author": 'João come cu',
                "topic": "tópico"
            },
            {
                "id": "cb1cgnn16loag3fpbfszb",
                "headliner": "Mais uma mock opinion",
                "body": "Corpo bacana de uma mock opinion",
                "author": "João Pedro",
                "topic": "Tópico"
            },
            {
                "id": "marjsrmjenanmbbz3wuxfo",
                "headliner": "Segunda mock opinion",
                "body": "Corpo bacana de uma mock opinion",
                "author": "João Pedro",
                "topic": "Tópico"
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
.feed{
  font-family: 'psans';
  background-color: #FFFAE2;
}
.card{
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(233, 228, 206) !important; /* Você é gay */
  border-width: 0 !important;
}
.like{
  max-width: 10%;
}
.card-subtitle{
  padding-bottom: 2%;
}
.balao{
  float: right;
  max-width: 10%;
}
</style>