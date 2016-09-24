// Inicializamos o angular

// A navegação do angular é baseada em rotas
// Pra cada página que abriremos no navegador, temos que dar um apelido
(function(){
    angular.module("app", ['ngRoute']);

    angular.module("app")
        .config(configurarRota);

    configurarRota.$inject = ['$routeProvider'];

    function configurarRota($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: 'application/views/home.html'
            })
            .when('/Listar', {
                templateUrl: 'application/views/listar.html'
            })
            .when('/Cadastrar', {
                templateUrl: 'application/views/cadastrar.html'
            })
            // Caso o usuario nao informa uma rota, direcionado para a home
            .otherwise({
                redirectTo: '/home'
            });
    }
})();