import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// Geral View
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Site module
import Site from '../components/GeneralViews/Site/landing.vue'
import AppHeader from "src/components/Dashboard/layout/AppHeader.vue";
import AppFooter from "src/components/Dashboard/layout/AppFooter.vue";
// Admin pages
import Overview from 'src/components/Dashboard/Views/Home/Overview.vue'
// Questions module
import Questions from 'src/components/Dashboard/Views/Questions/List.vue'
import QuestionsForm from 'src/components/Dashboard/Views/Questions/Form.vue'
// Tests module
import Tests from 'src/components/Dashboard/Views/Tests/List.vue'
import TestsForm from 'src/components/Dashboard/Views/Tests/Form.vue'
// User module
import UserProfile from 'src/components/Dashboard/Views/UserProfile/UserProfile.vue'
// Studente module
import Students from 'src/components/Dashboard/Views/Students/List.vue'
import StudentsForm from 'src/components/Dashboard/Views/Students/Form.vue'
// Report module
import Report from 'src/components/Dashboard/Views/Report/List.vue'
// Teachers module
import Teachers from 'src/components/Dashboard/Views/Teachers/List.vue'
import TeachersForm from 'src/components/Dashboard/Views/Teachers/Form.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'Usuário',
        component: UserProfile
      },
      {
        path: 'questions',
        name: 'Questões',
        component: Questions
      },
      {
        path: 'questions/create',
        name: 'Nova questão',
        component: QuestionsForm
      },
      {
        path: '/questions/edit/:id',
        name: 'Editar questão',
        component: QuestionsForm
      },
      {
        path: 'tests',
        name: 'Provas',
        component: Tests
      },
      {
        path: '/tests/edit/:id',
        name: 'Editar provas',
        component: TestsForm
      },
      {
        path: 'tests/create',
        name: 'Nova prova',
        component: TestsForm
      },
      {
        path: 'students',
        name: 'Estudantes',
        component: Students
      },
      {
        path: '/students/edit/:id',
        name: 'Editar estudante',
        component: StudentsForm
      },
      {
        path: 'students/create',
        name: 'Nova prova',
        component: StudentsForm
      },
      {
        path: 'report',
        name: 'Relatórios',
        component: Report
      },
      {
        path: 'teachers',
        name: 'Professores',
        component: Teachers
      },
      {
        path: '/teachers/edit/:id',
        name: 'Editar Professor',
        component: TeachersForm
      },
      {
        path: 'teachers/create',
        name: 'Novo professor',
        component: TeachersForm
      }
    ]
  },
  { path: '*', component: NotFound },
  {
    path: '/site',
    name: 'Site Script Exam',
    components: {
      header: AppHeader,
      default: Site,
      footer: AppFooter
    }
  }
]

export default routes