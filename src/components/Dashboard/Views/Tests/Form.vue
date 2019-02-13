<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <h4 slot="header" class="card-title">Registrar prova</h4>
            <small>Status: </small> <span class="badge badge-primary">{{tests.status}}</span>
            <form>
              <div class="row">
                  <div class="col-md-6">
                  <fg-input type="textarea"
                            label="Título"
                            placeholder="Título da prova"
                            v-model="tests.title">
                  </fg-input>
                  </div>
                  <div class="col-md-3">
                  <fg-input type="text"
                            label="Nível"
                            placeholder="Nível da prova"
                            v-model="tests.level">
                  </fg-input>
                  </div>
                  <div class="col-md-3">
                  <fg-input type="text"
                            label="Matéria"
                            placeholder="Matéria da prova"
                            v-model="tests.subjects">
                  </fg-input>
                  </div>
              </div>
              <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-fill float-right" @click.prevent="save()">
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
            <h4 slot="header" class="card-title">Buscar questões</h4>
            <div class="row">
              <div class="col-md-4">
                <label>Áreas</label>
                <select v-model="areas" class="form-control">
                  <option v-for="option in selects.areas" v-bind:key="option.value">
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-4">
                <label>Dificuldade</label>
                <select v-model="tests.level" class="form-control">
                  <option v-for="option in selects.level" v-bind:key="option.value">
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-4">
                <label>Assunto</label>
                <select v-model="tests.subjects" class="form-control">
                  <option v-for="option in selects.subjects" v-bind:key="option.value">
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label>Questões</label>
                <select v-model="tests.questions" class="form-control" multiple>
                  <option v-for="option in selects.questions" v-bind:key="option.value">
                    {{ option.statementQuestion }}
                  </option>
                </select>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-fill float-right" @click.prevent="saveQuestion()" >
                <i class="fa fa-floppy-o"></i> Adicionar questão
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
                <h4 slot="header" class="card-title">Relação de questões</h4>
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
                      <tr v-for="result in tests.questions" v-bind:key="result.id">
                        <th>{{result.statementQuestion}}</th>
                        <th>{{result.level}}</th>
                        <th>
                        <button class="btn btn-xs btn-danger" @click="removeQuestion(result.id)">
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

  const baseUrl = Configurations.BASE_URL_API;

  export default {
    components: {
      Card
    },
    data () {
      return {
        tests: {
          date: '',
          title: '',
          level: '',
          status: '',
          subjects: '',
          questions: [],
          users: []
        },
        questions: {
          id : ''
        },
        areas: {
          id: ''
        },
        selects: {
          questions: [],
          subjects: [],
          areas: [],
          level: [
            {name: "Fácil", value: "easy"},
            {name: "Intermediário", value: "intermediate"},
            {name: "Difícil", value: "hard"}]
        },
        notifications: {
          topCenter: false
        }
      }
    },
    created() {
      this.fetchDataQuestions()
      this.fetchDataSubjects()
      this.fetchDataAreas()

      if (this.$route.params.id) {
        this.fetchData()
      }
    },
    methods: {
      fetchData() {
        if (this.$route.params.id) {
          // getting data
          this.axios.get(`${baseUrl}tests/`+this.$route.params.id)
          .then((response) => {
            this.tests.date = response.data.data.date
            this.tests.title = response.data.data.title
            this.tests.level = response.data.data.level
            this.tests.status = response.data.data.status
            this.tests.subjects = response.data.data.subjects
            this.tests.questions = response.data.data.questions
            this.tests.users = response.data.data.users
          })
          .catch((response) => {
            console.error(response);
          });
        }
      },
      fetchDataQuestions() {
        this.axios.get(`${baseUrl}questions`)
          .then((response) => {
            this.selects.questions = response.data.data
          })
          .catch((response) => {
            console.error(response);
          });
      },
      fetchDataSubjects() {
        this.axios.get(`${baseUrl}subjects`)
          .then((response) => {
            this.selects.subjects = response.data.data
          })
          .catch((response) => {
            console.error(response);
          });
      },
      fetchDataAreas() {
        this.axios.get(`${baseUrl}areas`)
          .then((response) => {
            this.selects.areas = response.data.data
          })
          .catch((response) => {
            console.error(response);
          });
      },
      save () {
        if (this.$route.params.id) {
          this.axios.put(`${baseUrl}tests/${this.$route.params.id}`, {
            title: this.tests.title,
            level: this.tests.level,
            subjects: this.tests.subjects,
            questions: this.tests.questions
          }).then((response) => {
            this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
            this.fetchData()
          })
          .catch((response) => {
            this.notifyVue('Erro ao executar operação!', 'danger', 'top', 'right')
          });
        } else {
          this.axios.post(`${baseUrl}tests`, {
            title: this.tests.title,
            level: this.tests.level,
            subjects: this.tests.subjects,
            questions: this.tests.questions
          }).then((response) => {
            this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
          }).catch((response) => {
            this.notifyVue('Sucesso ao executar operação!', 'success', 'top', 'right')
          });
        }
      },
      saveQuestion() {
        this.axios.post(`${baseUrl}tests`, {
          text: this.alternatives.alternative,
          questionId: this.questions.id,
          isRight: this.alternatives.isRight
        }).then((response) => {

        }).catch((response) => {
          console.log(response)
        });
      },
      removeQuestion() {
        this.axios.delete(`${baseUrl}tests/${id}`)
          .then((response) => {
            console.log(response)
            if (response.status === 204) {
              
            }
          })
          .catch((response) => {
            console.error(response);
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
