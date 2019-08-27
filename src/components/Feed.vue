<template>
<div class='feed'>
  <div class='content'>
    <div class="topic-box">
      <h5 class="username" v-if="logged">Olá {{ user.username }}</h5>
      <img src='../assets/mega.png'>
      <h1>DEBATE</h1>
      <p class="topico" style="text-align: center; margin-bottom: 0;">Tópico do dia:</p>
      <h3 style="font-family: 'wrangell'">{{ topico }}</h3>
      <b-alert
      :show="alert.time"
      :variant="alert.variant"
      @dismissed="alert.time=0"
      >
        <p style="margin: 0;">{{ alert.message }}</p>
      </b-alert>
    </div>
    <div class="opinions-box">
      <div class="row">
        <div v-for="(item, idx) in feed" :key="idx" class="col-sm-6 col-md-4 col-lg-4 opinion">
          <div @click="setFocused(idx)">
            <h3 style="font-family: 'wrangell'"><b>{{ item.headliner }}</b></h3>
            <h5 style="text-align: left; color: darkgray">por: {{ item.author }}</h5>
            <p v-if="item.body.length > 200">{{ item.body.substring(0, 200) + "..." }}</p>
            <p v-else>{{ item.body }}</p>
          </div>
          <div class='row reactions'>
            <div v-if="item.reaction == 'l'" class="col-6 reaction-holder" style="width: 100%; text-align: left">
              <img src="@/assets/liked.svg" alt="dislike" @click="react(idx, 'dislike', item.id)">
            </div>
            <div v-else class="col-6 reaction-holder" style="width: 100%; text-align: left">
              <img src="@/assets/like.svg" alt="like" @click="react(idx, 'like', item.id)">
            </div>
            <div v-if="item.reaction == 'd'" class="col-6 reaction-holder" style="width: 100%; text-align: right">
              <img src="@/assets/disliked.svg" alt="dislike" @click="react(idx, 'dislike', item.id)">
            </div>
            <div v-else class="col-6 reaction-holder" style="width: 100%; text-align: right">
              <img src="@/assets/dislike.svg" alt="dislike" @click="react(idx, 'dislike', item.id)">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class='btn btn-default' @click="actionModal()">Dê sua opinião</button>
    </div>
  </div>
  <b-modal class="modal-themed" ref="login-modal" hide-footer hide-header title="Faça login para continuar">
    <div class="d-block text-center nmodal">
      <div class='ntitle'>
        <h4 style="margin: 0;">Faça login para opinar</h4>
        <p style="margin: 0;">Fure a bolha!</p>
      </div>
      <div class='divider'>
      </div>
      <div class='nbody'>
        <b-alert :show="errAlert" variant="danger" dismissible>
          Erro!
        </b-alert>
        <div class="form-group text-left">
          <label for="user">Usuário:</label>
          <input v-model="user.username" type="text" class="form-control">
        </div>
        <div class="form-group text-left">
          <label for="user">Senha:</label>
          <input v-model="user.pass" type="password" class="form-control">
        </div>
        <div>
          <button class="btn-default" @click="handleLogin()">Entrar!</button>
        </div>
      </div>
      <div class='nfooter'>
        <p>O debate está em fase de desenvolvimento, somente convidados podem utiliza-lo</p>
      </div>
    </div>
  </b-modal>

  <b-modal class="modal-themed" ref="post-modal" hide-footer hide-header title="Faça login para continuar">
    <div class="d-block text-center nmodal">
      <b-alert :show="errAlert" variant="danger" dismissible>
        Erro!
      </b-alert>
      <div class='ntitle'>
        <h4 style="margin: 0;">Dê sua opinião</h4>
      </div>
      <div class='divider'>
      </div>
      <div class='nbody'>
        <div class="form-group text-left">
          <label for="user">Headliner:</label>
          <input v-model="post.headliner" type="text" class="form-control" placeholder="Frase de efeito">
        </div>
        <div class="form-group text-left">
          <label for="user">Desenvolva:</label>
          <textarea v-model="post.body" type="text" class="form-control" rows="5" placeholder="Detalhe sua opinião"></textarea>
        </div>
        <div>
          <button class="btn-default" @click="postOpinion()">OPINAR!</button>
        </div>
      </div>
    </div>
  </b-modal>

    <b-modal class="modal-themed" ref="focus-modal" hide-footer hide-header title="Faça login para continuar">
    <div class="d-block text-center nmodal">
      <div class='ntitle'>
        <h4 style="margin: 0;">{{ selected.headliner }}</h4>
      </div>
      <div class='divider'>
      </div>
      <div class='nbody'>
        <p>{{ selected.body }}</p>
        <div class='row reactions'>
            <div v-if="selected.reaction == 'l'" class="col-6 reaction-holder" style="width: 100%; text-align: left">
              <img src="@/assets/liked.svg" alt="dislike" @click="react(selected.idx, 'dislike', selected.id)">
            </div>
            <div v-else class="col-6 reaction-holder" style="width: 100%; text-align: left">
              <img src="@/assets/like.svg" alt="like" @click="react(selected.idx, 'like', selected.id)">
            </div>
            <div v-if="selected.reaction == 'd'" class="col-6 reaction-holder" style="width: 100%; text-align: right">
              <img src="@/assets/disliked.svg" alt="dislike" @click="react(selected.idx, 'dislike', selected.id)">
            </div>
            <div v-else class="col-6 reaction-holder" style="width: 100%; text-align: right">
              <img src="@/assets/dislike.svg" alt="dislike" @click="react(selected.idx, 'dislike', selected.id)">
            </div>
          </div>
      </div>
    </div>
  </b-modal>

</div>   
</template>

<script>
import { fetchInitialData as fid, login, post } from '@/api/requests'
export default {
  name: 'feed',
  data () {
    return {
      logged: 0,
      topico: null,
      feed: [],
      user: {
        username: null,
        pass: null
      },
      post: {
        headliner: null,
        body: null
      },
      alert: {
        variant: null,
        time: 0,
        message: null
      },
      npost: null,
      errAlert: false,
      selected: {}
    }
  },
  sockets: {
    connect () {
      console.log('connecting')
    },
    resultpost (status) {
      console.log('uou')
      if (status == "success") {
        this.$refs['post-modal'].hide()
        this.fetchInPack()
        this.alert.time = 5
        this.alert.message = "Opinião postada com sucesso!"
        this.alert.variant = "success"
      } else {
        this.errAlert = true
      }
    },
    newpost (data) {
      console.log('triggered', data)
      this.feed.push(data)
    },
    liked (data) {
      if (data.status == "fail") {
        this.feed[data.idx].reaction = null
      } else {
        // lay ok
      }
    },
    disliked (data) {
      if (data.status == "fail") {
        this.feed[data.idx].reaction = null
      } else {
        // lay ok
      }
    }
  },
  methods: {
    fetchInPack () {
      fid()
      .then(res => {
        this.topico = res.data.topic
        this.feed = res.data.feed
        let crrnt
        // for (let a = 0; a < this.feed.length; a++) {
        //   if ()
        // }
      })
      .catch(err => {
        console.log(err)
        // Err modal call in
      })
    },
    actionModal () {
      if (!this.logged) {
        this.$refs['login-modal'].show()
      } else {
        this.$refs['post-modal'].show()
      }
    },
    handleLogin () {
      login(this.user)
      .then(x => {
        if (x.data.status == "success") {
          this.logged = 1
          this.$refs['login-modal'].hide()
          this.$refs['post-modal'].show()
        } else {
          this.errAlert = true
        }
      })
      .catch(err => {
        this.errAlert = true
      })
    },
    postOpinion () {
      this.post.author = this.user.username
      this.post.topic = this.topico
      this.$socket.emit('post', this.post)
    },
    react (idx, type, id) {
      let details = {
        id,
        type
      }
      console.log(type)
      if (type === 'like' && localStorage.disliked) {
        let crrnt = JSON.parse(localStorage.disliked)
        if(crrnt.findIndex(x => x.id == id) > -1) {
          let a = crrnt.findIndex(x => x.id == id)
          crrnt.splice(a, 1)
          localStorage.disliked = JSON.stringify(crrnt)
        }
      }
      if (type === 'dislike' && localStorage.liked) {
        let crrnt = JSON.parse(localStorage.liked)
        if(crrnt.findIndex(x => x.id == id) > -1) {
          let a = crrnt.findIndex(x => x.id == id)
          crrnt.splice(a, 1)
          localStorage.liked = JSON.stringify(crrnt)
        }
      }
      this.$socket.emit('reaction', details)
      this.localAction(type+'d', id)
      this.$set(this.feed[idx], 'reaction', type[0])
    },
    unreact () {
      let details = {
        id,
        type
      }
      console.log(idx, type, id)
      if (type === 'like' && localStorage.disliked) {
        let crrnt = JSON.parse(localStorage.disliked)
        if(crrnt.findIndex(x => x.id == id) > -1) {
          let a = crrnt.findIndex(x => x.id == id)
          crrnt.splice(a, 1)
          localStorage.disliked = JSON.stringify(crrnt)
        }
      }
      if (type === 'dislike' && localStorage.liked) {
        let crrnt = JSON.parse(localStorage.liked)
        if(crrnt.findIndex(x => x.id == id) > -1) {
          let a = crrnt.findIndex(x => x.id == id)
          crrnt.splice(a, 1)
          localStorage.liked = JSON.stringify(crrnt)
        }
      }
      this.$socket.emit('unreaction', details)
      this.$set(this.feed[idx], 'reaction', null)
    },
    localAction (type, id) {
      if (type === "liked") {
        if (localStorage.liked) {
          let crrnt = JSON.parse(localStorage.liked)
          crrnt.push({type, id})
          localStorage.liked = JSON.stringify(crrnt)
        } else {
          localStorage.liked = JSON.stringify([{type, id}])
        }
      } else if (type === "disliked") {
        if (localStorage.disliked) {
          let crrnt = JSON.parse(localStorage.disliked)
          crrnt.push({type, id})
          localStorage.disliked = JSON.stringify(crrnt)
        } else {
          localStorage.disliked = JSON.stringify([{type, id}])
        }
      }
    },
    setFocused (idx) {
      this.selected = this.feed[idx]
      this.$set(this.selected, 'idx', idx)
      this.$refs['focus-modal'].show()
    }
  },
  beforeMount () {
    this.fetchInPack()
    if (!localStorage.liked) localStorage.liked = JSON.stringify([{type: "header", id: "header"}])
    if (!localStorage.disliked) localStorage.disliked = JSON.stringify([{type: "header", id: "header"}])
  }
}
</script>

<style lang="css">
.topic-box {
  margin-top: 5%;
  height:fit-content;
  background-color: #FFFAE2;
  width: 100%;
  box-shadow:  10px 10px 10px rgba(0,0,0,.2)
}

.opinions-box {
  height: 67vh;;
  overflow-x: hidden;
  overflow-y : scroll;
}

.opinion {
  border: 1px solid rgba(0, 0, 0, .2);
  margin: 5%;
  padding: 2%;
}

.footer {
  background-color: #FFFAE2;
  border-top: 1px solid rgb(243, 226, 139);
  height: 8vh;
  padding-top: 1%;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0 !important;
}

.btn-default {
  background-color: transparent;
  width: 90%;
  border-radius: 3px !important;
  padding: 1% !important;
  border-color: rgb(243, 226, 139) !important;
  border-style: solid !important;
  border-width: 1px !important;
}

.btn-default:active {
  width: 90%;
  border-radius: 3px !important;
  padding: 1% !important;
  border-color: rgb(177, 162, 87) !important;
  border-style: solid !important;
  border-width: 1px !important;
}

.modal-body {
  font-family: "Wrangell";
  padding: 0 !important;
  background-color: #FFFAE2 !important;
}

.nmodal {
  padding: 3%;
}

.divider {
  width: 94%;
  margin-left: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 3px;
  background-color: rgb(202, 189, 123) !important;
  display: flex;
  justify-items: center;
}

.nbody {
  padding-left: 3%;
  padding-right: 3%;

}

.nfooter {
  margin-top: 5%;
}

.username {
  position: absolute;
  right: 0;
  top: 0;
  margin: 2%;
}

.reactions {
  text-align: right;
}

.reaction-holder img {
  max-width: 20%;
}
</style>
