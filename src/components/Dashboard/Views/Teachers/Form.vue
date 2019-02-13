<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <h4 slot="header" class="card-title">Registrar estudante</h4>
            <form>
              <div class="row">
                <div class="col-md-4">
                  <fg-input type="text"
                            label="Nome"
                            placeholder="Nome do estudante"
                            v-model="students.name">
                  </fg-input>
                </div>
                <div class="col-md-4">
                  <label>Sexo</label>
                  <select
                    class="form-control"
                    v-model="students.sex">
                    <option disabled value="">Por favor selecione um</option>
                    <option value="m">M - Masculino</option>
                    <option value="f">F - Feminino</option>
                    <option value="o">O - Outros</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <fg-input type="date"
                            label="Data de nascimento"
                            v-model="students.status">
                  </fg-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <fg-input type="text"
                            label="Endereço"
                            placeholder="Endereço do estudante"
                            v-model="students.address.street">
                  </fg-input>
                </div>
                <div class="col-md-2">
                  <fg-input type="text"
                            label="Número"
                            placeholder="Número"
                            v-model="students.address.addressNumber">
                  </fg-input>
                </div>
                <div class="col-md-2">
                  <fg-input type="text"
                            label="Bairro"
                            placeholder="Bairro"
                            v-model="students.address.province">
                  </fg-input>
                </div>
                <div class="col-md-4">
                  <fg-input type="text"
                            label="Complemento"
                            placeholder="Complemento do estudante"
                            v-model="students.address.complement">
                  </fg-input>
                </div>
              </div>
              <div class="text-center">
                  <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
                  Salvar
                  </button>
              </div>
              <div class="clearfix"></div>
            </form>
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
        students: {
          name: '',
          dateBorn: '',
          sex: '',
          status: '',
          profile: '',
          address: []
        }
      }
    },
    created() {
      if (this.$route.params.id) {
        this.fetchData();
      }
    },
    methods: {
      fetchData() {
        this.axios.get(`${baseUrl}users/`+this.$route.params.id)
          .then((response) => {
            this.students.name = response.data.data.name
            this.students.dateBorn = response.data.data.dateBorn
            this.students.sex = response.data.data.sex
            this.students.status = response.data.data.status
            this.students.profile = response.data.data.profile
            this.students.address = response.data.data.address
          })
          .catch((response) => {
            console.error(response);
          });
      },
      save () {
        if (this.$route.params.id) {
          this.axios.put(`${baseUrl}users/${this.$route.params.id}`, {
            name: this.students.name,
            dateBorn: this.students.dateBorn,
            sex: this.students.sex,
            status: this.students.status,
            profile: this.students.profile,
            address: this.students.address
          }).then((response) => {
            
          })
          .catch((response) => {
            console.log(response)
          });
        } else {
          this.axios.post(`${baseUrl}users`, {
            name: this.students.name,
            dateBorn: this.students.dateBorn,
            sex: this.students.sex,
            status: this.students.status,
            profile: this.students.profile,
            address: this.students.address
          }).then((response) => {

          }).catch((response) => {
            console.log(response)
          });
        }
      }
    }
  }

</script>
<style>

</style>
