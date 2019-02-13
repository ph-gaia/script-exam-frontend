<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="fa fa-pie-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Questões</p>
              <h4 class="card-title">150</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Histórico
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="fa fa-file-text-o text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Provas</p>
              <h4 class="card-title">80</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Histórico
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="fa fa-users text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Alunos</p>
              <h4 class="card-title">35</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Histórico
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="fa fa-user-circle text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Professores</p>
              <h4 class="card-title">5</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Histórico
            </div>
          </stats-card>
        </div>

      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data"
                      :chart-options="lineChart.options"
                      :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Desempenhos dos alunos</h4>
              <p class="card-category">Últimos exames</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Bruno Monteiro
                <i class="fa fa-circle text-danger"></i> Joãozinho
                <i class="fa fa-circle text-warning"></i> Paulo Henrique
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Atualizado a 3 minutos atrás
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Matérias em destaques</h4>
              <p class="card-category">Matérias de maiores acertos</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Biologia
                <i class="fa fa-circle text-danger"></i> Matemática
                <i class="fa fa-circle text-warning"></i> Química
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Último exame 2 dias atrás
              </div>
            </template>
          </chart-card>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'

  export default {
    components: {
      Checkbox,
      Card,
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '40%'],
            series: [40, 20, 40]
          }
        },
        lineChart: {
          data: {
            labels: ['05/01', '12/01', '19/01', '26/01', '02/02', '09/02', '16/02', '23/02'],
            series: [
              [8, 8.5, 9, 10, 10, 9, 8, 10],
              [7, 5, 3, 8, 8, 5, 7, 9],
              [2, 5, 7, 8, 6, 9, 9, 8]
            ]
          },
          options: {
            low: 0,
            high: 10,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        }
      }
    }
  }
</script>
<style>

</style>
