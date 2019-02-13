<template>
  <card>
    <h4 slot="header" class="card-title">Editar perfil</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="text"
                    label="Nome"
                    placeholder="Nome"
                    v-model="user.name">
          </fg-input>
        </div>
        <div class="col-md-3">
          <fg-input type="text"
                    label="Usuário"
                    placeholder="Usuário"
                    v-model="user.username">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="password"
                    label="Senha"
                    placeholder="Senha"
                    v-model="user.password">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="date"
                    label="Data de nascimento"
                    v-model="user.dateBorn">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Sexo"
                    placeholder="Use M ou F"
                    v-model="user.sex">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Endereço"
                    placeholder="Endereço"
                    v-model="user.address">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Bairro"
                    placeholder="Bairro"
                    v-model="user.province">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Número"
                    placeholder="Número"
                    v-model="user.addressNumber">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Estado"
                    placeholder="Estado"
                    v-model="user.state">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="number"
                    label="CEP"
                    placeholder="CEP"
                    v-model="user.postalCode">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <fg-input type="text"
                    label="Complemento"
                    placeholder="Complemento"
                    v-model="user.complement">
          </fg-input>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Atualizar usuário
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          name: 'Paulo Henrique',
          username: 'paulo.henrique',
          password : '',
          email: '',
          sex: 'M',
          province: 'Umarizal',
          addressNumber: '1040',
          postalCode: '66050-290',
          address: 'Travessa Manoel Evaristo',
          city: 'Belém',
          state: 'Pará',
          complement: 'Próximo ao formosa'
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
