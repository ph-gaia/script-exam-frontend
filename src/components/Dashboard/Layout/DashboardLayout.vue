<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Perfil</p>
      </sidebar-link>
      <sidebar-link to="/admin/questions">
        <i class="nc-icon nc-notes"></i>
        <p>Questões</p>
      </sidebar-link>
      <sidebar-link to="/admin/tests">
        <i class="nc-icon nc-ruler-pencil"></i>
        <p>Provas</p>
      </sidebar-link>
      <sidebar-link to="/admin/students">
        <i class="nc-icon nc-backpack"></i>
        <p>Alunos</p>
      </sidebar-link>
      <sidebar-link to="/admin/teachers">
        <i class="nc-icon nc-badge"></i>
        <p>Professores</p>
      </sidebar-link>
      <sidebar-link to="/admin/report">
        <i class="nc-icon nc-chart-pie-36"></i>
        <p>Relatórios</p>
      </sidebar-link>
      <sidebar-link to="/site">
        <i class="nc-icon nc-favourite-28"></i>
        <p>Site</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
