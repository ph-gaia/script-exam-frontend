<template>
  <div class="content">
    <div class="container-fluid">
      
      <div class="row">
        <div class="col-md-12">
          <card>
            <h4 slot="header" class="card-title">Registrar questão</h4>
            <form>
              <div class="row">
                <div class="col-md-12">
                  <label>Enunciado</label>
                  <vue-editor v-model="questions.statementQuestion"></vue-editor>
                </div>
                <div class="col-md-12">
                  <fg-input type="text"
                            label="Nível"
                            placeholder="Nível da questão (Ex.: Fácil, médio, difícil)"
                            v-model="questions.level">
                  </fg-input>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-fill float-right" @click.prevent="saveQuestion()">
                Salvar
                </button>
              </div>
              <div class="clearfix"></div>
            </form>
          </card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <card>
            <h4 slot="header" class="card-title">Cadastrar alternativa</h4>
            <div class="row">
              <div class="col-md-12">
                <fg-input type="text"
                          label="Nova alternativa"
                          placeholder="Nova alternativa"
                          v-model="alternatives.alternative">
                  </fg-input>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-fill float-right" @click.prevent="saveAlternative()" >
                <i class="fa fa-floppy-o"></i> Adicionar Alternativa
              </button>
            </div>
          </card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <card>
            <div class="row">
              <div class="col-md-12">
                <h4 slot="header" class="card-title">Relação de Alternativas</h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Alternativas</th>
                        <th>Certa</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="result in questions.alternatives" v-bind:key="result.id">
                        <th>{{result.text}}</th>
                        <th>
                          <button type="button"
                            v-bind:class="[result.isRight == 'yes' ? 'btn btn-success' : 'btn btn-primary']"
                            @click="markRight(result.id)">
                            {{ result.isRight }}
                          </button>
                        </th>
                        <th>
                        <button class="btn btn-xs btn-danger" @click="removeAlternative(result.id)">
                          <i class="fa fa-close"></i>
                        </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import Configurations from 'src/common/Configurations'
  import { VueEditor } from 'vue2-editor'

  const baseUrl = Configurations.BASE_URL_API;

  export default {
    components: {
      Card,
      VueEditor
    },
    created() {
      if (this.$route.params.id) {
        this.fetchData();
      }
    },
    data () {
      return {
        questions: {
          id: '',
          statementQuestion: '',
          level: '',
          areas: [],
          alternatives: [],
          isActive: true
        },
        alternatives: {
          id : '',
          alternative : '',
          isRight: 'no'
        },
        lastQuestionId: '',
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      };
    },
    methods: {
      fetchData() {
        if (this.$route.params.id) {
          // getting data
          this.axios.get(`${baseUrl}questions/`+this.$route.params.id)
            .then((response) => {
              this.questions.id = response.data.data.id
              this.questions.statementQuestion = response.data.data.statementQuestion
              this.questions.level = response.data.data.level
              this.questions.area = response.data.data.areas
              this.questions.alternatives = response.data.data.alternatives
            })
            .catch((response) => {
              console.error(response);
            });
        }
      },
      saveQuestion () {
        if (this.$route.params.id) {
          this.axios.put(`${baseUrl}questions/${this.$route.params.id}`, {
            statementQuestion: this.questions.statementQuestion,
            level: this.questions.level
          }).then((response) => {
            console.log(response)
            this.questions.id = response.data.data.id
            this.questions.statementQuestion = response.data.data.statementQuestion
            this.questions.level = response.data.data.level

            this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
          })
          .catch((response) => {
            //console.log(response)
            this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
          });
        } else {
          this.axios.post(`${baseUrl}questions`, {
            statementQuestion: this.questions.statementQuestion,
            level: this.questions.level
          }).then((response) => {

            this.questions.id = response.data.data.id
            this.questions.statementQuestion = response.data.data.statementQuestion
            this.questions.level = response.data.data.level

            this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
          }).catch((response) => {
            this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
          });
        }
      },
      saveAlternative() {
        this.axios.post(`${baseUrl}alternatives`, {
          text: this.alternatives.alternative,
          questionId: this.questions.id,
          isRight: this.alternatives.isRight
        }).then((response) => {
          this.alternatives.alternative = null
          this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
          this.fetchData()
        }).catch((response) => {
          this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
        });
      },
      removeAlternative(id) {
        this.axios.delete(`${baseUrl}alternatives/${id}`)
          .then((response) => {
            if (response.status === 204) {
              this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
              this.fetchData()
            }
          }).catch((response) => {
            this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
          });
      },
      markRight (id) {
        this.axios.put(`${baseUrl}alternatives/changeRightAlternative`, {
            id: id,
            questionId: this.questions.id
          }).then((response) => {
            this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
            this.fetchData()
          })
          .catch((response) => {
            this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
          });
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
