<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <button class="btn btn-primary" @click="goTo(`/admin/questions/create`)">Nova questão</button>
            <template slot="header">
              <h4 class="card-title">Questões</h4>
              <p class="card-category">Relação de questões</p>
            </template>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Enunciado</th>
                    <th>Nível</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="result in results" v-bind:key="result.id">
                    <th>{{result.statementQuestion}}</th>
                    <th>{{result.level}}</th>
                    <th>
                      <button class="btn btn-xs btn-success" @click="edit(result.id)">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-xs btn-danger" @click="remove(result.id)">
                        <i class="fa fa-close"></i>
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
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
        results: [],
        dataQuestions: {},
        allResults: 0,
        maxPerPage: 50,
        current: 0,
        notifications: {
          topCenter: false
        }
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.axios.get(`${baseUrl}questions`)
          .then((response) => {
            this.results = response.data.data;
            this.allResults = response.data.allResults;
          })
          .catch((response) => {
            console.error(response);
          });
      },
      remove(id) {
        this.axios.delete(`${baseUrl}questions/${id}`)
          .then((response) => {
            console.log(response)
            if (response.status === 204) {
              this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
              this.fetchData()
            }
          })
          .catch((response) => {
            this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
          });
      },
      edit(id) {
        this.$router.push(`/questions/edit/${id}`);
      },
      goTo(url) {
        if (url) {
          this.$router.push(url);
        }
      },
      notifyVue (text, type, verticalAlign, horizontalAlign) {
        const notification = {
          template: '<span> ' + text + '</span>'
        }

        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            component: notification,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: type
          })
      }
    }
  }
</script>
<style>
</style>
