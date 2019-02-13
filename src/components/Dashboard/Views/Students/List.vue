<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <button class="btn btn-primary" @click="goTo(`/admin/students/create`)">Novo estudante</button>
            <template slot="header">
              <h4 class="card-title">Estudantes</h4>
              <p class="card-category">Relação de estudantes</p>
            </template>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data de nascimento</th>
                    <th>Sexo</th>
                    <th>Endereço</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="result in results" v-bind:key="result.id">
                    <th>{{result.name}}</th>
                    <th>{{result.dateBorn}}</th>
                    <th>{{result.sex}}</th>
                    <th>{{result.address.street}}</th>
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
        current: 0
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.axios.get(`${baseUrl}users`)
          .then((response) => {
            this.results = response.data.data;
            this.allResults = response.data.allResults;
          })
          .catch((response) => {
            console.error(response);
          });
      },
      remove(id) {
        this.axios.delete(`${baseUrl}users/${id}`)
          .then((response) => {
            console.log(response)
            if (response.status === 204) {
              
            }
          })
          .catch((response) => {
            console.error(response);
          });
      },
      edit(id) {
        this.$router.push(`/students/edit/${id}`);
      },
      goTo(url) {
        if (url) {
          this.$router.push(url);
        }
      }
    }
  }
</script>
<style>
</style>
