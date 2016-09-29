// Inicializamos o angular

// A navegação do angular é baseada em rotas
// Pra cada página que abriremos no navegador, temos que dar um apelido
(function(){
    angular.module("app", ['ngRoute', 'ngMaterial', 'ngMdIcons']);

    angular.module("app")
        .config(configurarRota);

    configurarRota.$inject = ['$routeProvider', '$mdThemingProvider'];

    function configurarRota($routeProvider, $mdThemingProvider){

        $mdThemingProvider.theme('default')
            .primaryPalette('pink', {
            'default': '400', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            .accentPalette('purple', {
            'default': '200' // use shade 200 for default, and keep all other shades the same
            });


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