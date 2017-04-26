var app = angular.module('myApp', [
    //'jcs-autoValidate',
    'ngRoute',
    'angular-loading-bar',

]);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

    when('/', {
        templateUrl: 'signin.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);


app.controller('myCtrl', ['$scope', '$window', '$http', function($scope, $window, $http) {




    Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);


    var userTokenIsValid = Backendless.UserService.isValidLogin();
    if (userTokenIsValid) {
        $window.location.href = "/home";
    } else {
        $scope.login = function() {
            console.log('login');

            var email = this.email;
            var password = this.password;


            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


            if (email && password) {
                $scope.message = " ";
                $scope.Erroremail = " ";
                $scope.Errorpassword = " ";


                if (email.match(pattern)) {


                    if (password.length < 6) {
                        $scope.message = LoginPasswordError();


                    } else {
                        $scope.Errorpassword = " ";
                        $scope.Erroremail = " ";
                        var dataQuery = new Backendless.DataQuery();
                        dataQuery.condition = "email='" + email + "'";

                        var FindEmail = Backendless.Persistence.of(Backendless.User).find(dataQuery);

                        if (FindEmail.data.length > 0) {

                            var serial_number = FindEmail.data[0].serial_number;
                            try {
                                var res = Backendless.UserService.login(serial_number, password, true);

                                $scope.authmessage = " ";
                                document.cookie = 'username=' + res.display_name;
                                document.cookie = 'email=' + res.email;


                                var userToken = Backendless.LocalCache.get("user-token");
                                $window.location.href = "home.html";
                            } catch (err) {
                                console.log("error message - " + err.message);
                                $scope.authmessage = 'Email ou senha inválidos';
                                console.log("error code - " + err.statusCode);
                            }

                        } else {
                            //console.log("Unauthorize User");

                            $scope.message = "Usuário ou senha inválidos";
                        }
                    }

                } else {
                    $scope.Erroremail = "Insira um e-mail válido";
                    $scope.message = LoginEmailError();

                }
            } else {
                if (!email) {
                    $scope.Erroremail = "O e-mail é obrigatório";
                } else {
                    $scope.Erroremail = " ";
                }
                if (!password) {
                    $scope.Errorpassword = "O password é obrigatório";
                } else {
                    $scope.Errorpassword = " ";
                }
            }





            // $scope.authmessage = $scope.log[0];
        }

    }
    //Backendless.UserService.logout();

}]);