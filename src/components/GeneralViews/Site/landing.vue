<template>
  <div>
    <div class="position-relative">
        <!-- shape Hero -->
        <section class="section-shaped my-0">
          <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="container shape-container d-flex">
            <div class="col px-0">
              <div class="row">
                <div class="col-lg-6">
                  <h1 class="display-3  text-white">Script Exam
                    <span>Plataforma que permite a elaboração, organização e correção de provas.</span>
                  </h1>
                  <p class="lead  text-white">Nós somos movidos pelo desejo de ajudar as instituições de ensino a se modernizarem e a melhorarem continuamente o processo de aprendizagem.</p>
                  <div class="btn-wrapper">
                    <base-button tag="a"
                                href="https://www.creative-tim.com/product/argon-design-system"
                                class="mb-3 mb-sm-0"
                                type="white"
                                icon="fa fa-sign-in">
                        Modernize-se agora
                    </base-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                      <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                      </icon>
                      <h6 class="text-primary text-uppercase">Processo de Seleção</h6>
                      <p class="description mt-3">Integre os departamentos e todas as
                          etapas do seu processo de seleção, desde a inscrição até a 
                          classificação e matrícula dos candidatos.</p>
                      <div>
                          <badge type="primary" rounded>Integração</badge>
                          <badge type="primary" rounded>Seleção</badge>
                          <badge type="primary" rounded>Classificação</badge>
                      </div>
                      <base-button tag="a" href="#" type="primary" class="mt-4">
                          Saiba mais
                      </base-button>
                  </card>
              </div>
              <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                      <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                      </icon>
                      <h6 class="text-success text-uppercase">Avaliações Regulares</h6>
                      <p class="description mt-3">Aprimore a criação de provas regulares
                          e proporcione aos professores e alunos Avaliações mais inteligentes.</p>
                      <div>
                          <badge type="success" rounded>Regular</badge>
                          <badge type="success" rounded>Provas</badge>
                          <badge type="success" rounded>Inteligência</badge>
                      </div>
                      <base-button tag="a" href="#" type="success" class="mt-4">
                          Saiba mais
                      </base-button>
                  </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4"></icon>
                  <h6 class="text-warning text-uppercase">Simulados</h6>
                  <p class="description mt-3">Avalie, analise e aumente o desempenho dos seus
                    alunos. Simplifique e otimize a aplicação de simulados.
                  </p>
                  <div>
                    <badge type="warning" rounded>Concursos</badge>
                    <badge type="warning" rounded>Agilidade</badge>
                    <badge type="warning" rounded>Produtividade</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Saiba mais
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
        <div class="container">
            <div class="row row-grid align-items-center">
                <div class="col-md-6 order-md-2">
                    <img src="https://canaldoensino.com.br/blog/wp-content/uploads/2017/11/provas-preambulares.jpg" class="img-fluid floating">
                </div>
                <div class="col-md-6 order-md-1">
                    <div class="pr-md-5">
                        <icon name="fa fa-line-chart" class="mb-5" size="lg" type="info" shadow
                              rounded></icon>
                        <h3>Modernize-se</h3>
                        <p>Utilize soluções que atuam de ponta a ponta em seus processos de avaliações.</p>
                        <ul class="list-unstyled mt-5">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge type="info" circle class="mr-3" icon="fa fa-rocket"></badge>
                                    <h6>35% de redução de custos operacionais</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge type="info" circle class="mr-3" icon="fa fa-hand-scissors-o"></badge>
                                    <h6>70% de redução do tempo gasto com correção de provas</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge type="info" circle class="mr-3" icon="fa fa-hand-spock-o"></badge>
                                    <h6>92% de redução nos pedidos de revisão de prova.</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section bg-secondary">
        <div class="container">
            <div class="row row-grid align-items-center">
                <div class="col-md-6">
                    <div class="card bg-default shadow border-0">
                        <img v-lazy="'static/img/features.png'" class="card-img-top">
                        <blockquote class="card-blockquote">
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                  class="svg-bg">
                                <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                            </svg>
                            <h4 class="display-3 font-weight-bold text-white">Recursos incríveis!</h4>
                            <p class="lead text-italic text-white">Saiba porque nossa plataforma é perfeita para você. </p>
                        </blockquote>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="pl-md-5">
                        <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                        <h3>Funcionalidades</h3>
                        <p class="lead">Correção de Provas e Simulados</p>
                        <p>Gestão do Conhecimento</p>
                        <p>Acesse por tables e smartphones</p>
                        <p>Gerador de cartão de gabarito</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div class="container py-0">
            <div class="row row-grid align-items-center">
              <div class="col-md-6 order-lg-2 ml-lg-auto">
                <div class="position-relative pl-md-5">
                  <img src="static/img/design.svg" class="img-center img-fluid">
                </div>
              </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="d-flex px-3">
                      <div>
                        <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" 
                        shadow rounded></icon>
                      </div>
                      <div class="pl-4">
                        <h4 class="display-3 text-white">Crie Provas e Testes interessantes</h4>
                        <p class="text-white">Crie e desenvolva as melhores provas usando nossa 
                          ferramenta baseada em nuvem que é fácil de usar. Combine texto, vídeo,
                          imagens e exercícios práticos nas suas provas.</p>
                      </div>
                    </div>
                    <card shadow class="shadow-lg--hover mt-5">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="fa fa-database" gradient="success" color="white" 
                                shadow rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h5 class="title text-success">Banco de questões</h5>
                                <p>Crie um banco de questões com várias questões.
                                  Use seu banco de questões para criar provas com facilidade.</p>
                                <a href="#" class="text-success">Saiba mais</a>
                            </div>
                        </div>
                    </card>
                    <card shadow class="shadow-lg--hover mt-5">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="fa fa-area-chart" gradient="warning" color="white" 
                                shadow rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h5 class="title text-warning">Gestão de conhecimento</h5>
                                <p>Relatórios de desempenho customizáveis.</p>
                                <a href="#" class="text-warning">Saiba mais</a>
                            </div>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-lg">
        <div class="container">
            <div class="row justify-content-center text-center mb-lg">
                <div class="col-lg-8">
                    <h2 class="display-3">Escolha o melhor plano para você.</h2>
                    <p class="lead text-muted">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-1-800x800.jpg'"
                              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Gratuito</span>
                                <small class="h6 text-muted">Grátis</small>
                            </h5>
                            <button type="button" class="btn btn-primary">Assinar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-2-800x800.jpg'"
                              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Básico</span>
                                <small class="h6 text-muted">R$ 14.90</small>
                            </h5>
                            <button type="button" class="btn btn-primary">Assinar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-3-800x800.jpg'"
                              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Plus</span>
                                <small class="h6 text-muted">R$ 19.90</small>
                            </h5>
                            <button type="button" class="btn btn-primary">Assinar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'img/theme/team-4-800x800.jpg'"
                              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                              style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">Plano escola</span>
                                <small class="h6 text-muted">Sob Consulta</small>
                            </h5>
                            <div class="mt-3">
                                <button type="button" class="btn btn-primary">Assinar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-lg pt-0">
        <div class="container">
            <card gradient="warning"
                  no-body
                  shadow-size="lg"
                  class="border-0">
                <div class="p-5">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h3 class="text-white">Experimente nossa versão gratuita.</h3>
                            <p class="lead text-white mt-3">
                                - Busque QUESTÕES rapidamente!<br>
                                - Gerencie PROVAS e QUESTÕES facilmente!<br>
                                - Insira suas PRÓPRIAS questões!<br>
                                - Corrija suas provas automaticamente!<br>
                            </p>
                        </div>
                        <div class="col-lg-3 ml-lg-auto">
                            <base-button tag="a" href="#"
                                          type="white" block size="lg">
                                Download agora
                            </base-button>
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-3 bg-gradient-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg pb-300">
            <div class="row text-center justify-content-center">
                <div class="col-lg-10">
                    <h2 class="display-3 text-white">Vantagens</h2>
                    <p class="lead text-white">Saiba todos benefícios que a plataforma te oferece.</p>
                </div>
            </div>
            <div class="row row-grid mt-5">
                <div class="col-lg-4">
                    <icon name="fa fa-folder-open" size="lg" gradient="white" shadow round color="primary"></icon>
                    <h5 class="text-white mt-3">Mantenha-se organizado</h5>
                    <p class="text-white mt-3">Todas suas provas organizadas para você encontrar com rapidez .</p>
                </div>
                <div class="col-lg-4">
                    <icon name="fa fa-file-text-o" size="lg" gradient="white" shadow round color="primary"></icon>
                    <h5 class="text-white mt-3">Armazene suas questões</h5>
                    <p class="text-white mt-3">Todas suas provas e questões organizadas para você.</p>
                </div>
                <div class="col-lg-4">
                    <icon name="fa fa-bar-chart" size="lg" gradient="white" shadow round color="primary"></icon>
                    <h5 class="text-white mt-3">Consulte estatísticas</h5>
                    <p class="text-white mt-3">Estatística dos vestibulares para ajudar você a montar suas provas.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
        <div class="container">
            <div class="row justify-content-center mt--300">
                <div class="col-lg-8">
                    <card gradient="secondary" shadow body-classes="p-lg-5">
                        <h4 class="mb-1">Seja o próximo a mudar a realidade da sua instituição</h4>
                        <p class="mt-0">Preencha o formulário e aguarde nosso contato.</p>
                        <base-input class="mt-5"
                                    alternative
                                    placeholder="Seu nome"
                                    addon-left-icon="fa fa-user">
                        </base-input>
                        <base-input alternative
                                    placeholder="Seu e-mail"
                                    addon-left-icon="fa fa-envelope">
                        </base-input>
                        <base-input alternative
                                    placeholder="Seu telefone"
                                    addon-left-icon="fa fa-phone">
                        </base-input>
                        <base-input alternative
                                    placeholder="Nome da instituição"
                                    addon-left-icon="fa fa-university">
                        </base-input>
                        <base-input alternative
                                    placeholder="Tamanho da instituição"
                                    addon-left-icon="fa fa-heart">
                        </base-input>
                        <base-input class="mb-4">
                                <textarea class="form-control form-control-alternative" name="name" rows="4"
                                          cols="80" placeholder="Nos conte mais..."></textarea>
                        </base-input>
                        <base-button type="default" round block size="lg">
                            Receba nosso contato
                        </base-button>
                    </card>
                </div>
            </div>
        </div>
    </section>
    

  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
