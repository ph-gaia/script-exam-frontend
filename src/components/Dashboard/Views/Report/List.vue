<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <card style="width: 20rem;">
            <h4 class="card-title">Estatísticas de erros e acertos</h4>
            <h6 class="card-subtitle mb-2 text-muted">erros e acertos</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link" @click="notifyVue('top', 'left')">Acessar aqui</a>
            <a href="#" class="card-link" @click="notifyVue('bottom', 'right')">Acessar aqui</a>
          </card>
        </div>
        <div class="col-4">
          <card style="width: 20rem;">
            <h4 class="card-title">Gestão do conhecimento</h4>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link" @click="notifyVue('top', 'center')">Acessar aqui</a>
            <a href="#" class="card-link" @click="notifyVue('bottom', 'right')">Acessar aqui</a>
          </card>
        </div>
        <div class="col-4">
          <card style="width: 20rem;">
            <h4 class="card-title">Desempenhos dos alunos</h4>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link" @click="notifyVue('bottom', 'left')">Acessar aqui</a>
            <a href="#" class="card-link" @click="notifyVue('bottom', 'right')">Acessar aqui</a>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Configurations from 'src/common/Configurations'
  import functions from 'src/common/Functions';
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  const baseUrl = Configurations.BASE_URL_API;

  export default {
    components: {
      Card
    },
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      goTo(url) {
        if (url) {
          this.$router.push(url);
        }
      },
      notifyVue (verticalAlign, horizontalAlign) {
        const notification = {
          template: `<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>`
        }

        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            component: notification,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }
</script>
<style>
</style>
