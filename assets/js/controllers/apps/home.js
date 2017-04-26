app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

    when('/', {
        controller: 'home',
        templateUrl: '/assets/tpl/app/home.html'
    }).
    when('/users', {
        controller: 'userClt',
        templateUrl: '/assets/tpl/app/users.html'
    }).
    when('/modules', {
        controller: 'modulesClt',
        templateUrl: '/assets/tpl/app/modules.html'
    }).
    when('/manuals', {
        controller: 'manualsClt',
        templateUrl: '/assets/tpl/app/manuals.html'
    }).
    when('/text', {
        controller: 'folder',
        templateUrl: '/assets/tpl/app/folder/text.html'
    }).
    when('/photo', {
        controller: 'folder',
        templateUrl: '/assets/tpl/app/folder/photo.html'
    }).
    when('/tips', {
        controller: 'folder',
        templateUrl: '/assets/tpl/app/folder/tips.html'
    }).
    when('/video', {
        controller: 'folder',
        templateUrl: '/assets/tpl/app/folder/video.html'
    }).
    when('/delete', {
        controller: 'userClt',
        templateUrl: '/assets/tpl/app/users.html'
    }).
    when('/setting', {
        controller: 'settingClt',
        templateUrl: '/assets/tpl/app/settings.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

app.config(function($translateProvider) {
    $translateProvider

        .translations('PT-BR', {
        Dashboard_Home: 'Home',
        Dashboard_Users: 'Usuários',
        Dashboard_Modules: 'Manuais',
        Dashboard_Setting: 'Configurações',
        Dashboard_Scaniapp: 'Remap-Mobile',
        Dashboard_Logout: 'Sair',
        Dashboard_Edit_Profile: 'Editar perfil',
        Dashboard_Back: 'Voltar',
        Dashboard_Search: 'Buscar',
        //Setting
        Setting_Setting: 'Configurações',
        Setting_Update_Your_Password: 'Alterar senha',
        Setting_Old_Password: 'Senha atual',
        Setting_New_Password: 'Nova senha',
        Setting_Confirm_Password: 'Confirmar senha',
        Setting_SAVE_PASSWORD: 'Alterar',
        //Users
        User_Users: 'Usuários',
        User_ID: 'ID',
        User_Name: 'Nome',
        User_Email: 'E-mail',
        User_Profile_Picture: 'Avatar',
        User_Roles: 'Papel',
        User_Status: 'Status',
        User_Actions: 'Ações',
        User_Edit_item: 'Editar itens',
        User_Delete_item: 'Excluir itens',
        User_Serial_Numner: 'Serial Numner',
        User_Display_Name: 'Nome de exibição',
        User_User_Roles: 'Papel',
        User_Select_User_Roles: 'Escolher papel do usuário',
        User_Administrator: 'Administrador',
        User_Development: 'Desenvolvimento',
        User_Support: 'Suporte',
        User_Marketing: 'Vendas',
        User_Email: 'E-mail',
        User_Password: 'Senha',
        User_Confirm_Password: 'Confirmar senha',
        User_Create_User: 'Criar usuário',
        User_Cancel: 'Cancelar',
        User_Choose_Profile_Picture: 'Escolher avatar',
        User_Edit_User: 'Editar usuário',
        User_Delete_User: 'Excluir usuário',
        User_USER_EDIT: 'Usuário Editar',
        //Manuals
        Manules_Modules: 'Modulos',
        Manules_ID: 'ID',
        Manules_NAME: 'Nome',
        Manules_DESCRIPTION: 'Descrição',

        Manules_Choose_File: 'Escolher arquivo',
        Manules_please_upload_json_file: 'Escolha um arquivo JSON válido',
        Manules_Add: 'Adicionar',
        Manules_Cancel: 'Cancelar',
        Manules_Quick_Guide: 'Guia Rápido',
        Manules_Technical_Training: 'Treinamento Técnico',
        Manules_Folder_Name: 'Nome',
        Manules_Price: 'PREÇO',
        Manules_Add_Price: 'Adicionar PREÇO',
        Manules_Select_folder: 'Categoria',
        Manules_Select_type_of_folder: 'Tipo',
        Manules_Text: 'Texto',
        Manules_Photos: 'Foto',
        Manules_Video: 'Video',
        Manules_Special_content: 'Dicas da comunidade',
        Manules_Add_folder: 'Adicionar',
        Manules_Cancel: 'Cancelar',

        Manules_File_Name: 'Nome',
        Manules_File_Content: 'Conteúdo',
        Manules_Add_file: 'Adicionar arquivo',
        Manules_Save_file: 'Salvar arquivo',
        Manules_Choose_Picture: 'Escolha as imagens',
        Manules_Upload_Photo: 'Adicionar',
        Manules_Choose_Video: 'Escolha o video',
        Manules_Upload_Video: 'Adicionar',
        Manules_Edit_folder: 'Editar pasta',
        Manules_Delete_folder: ' deste pasta',
        Manules_add_tips: 'Adicionar Dica ',
        community_tip_tilte: 'Dicas da comunidade',
        community_tip_Content: ' Conteúdo',
        //Pagination//
        Page_Previous: 'Anterior',
        Page_Next: 'Próximo',

        //data-title//
        Scroll_to_top_tilte: 'Voltar ao topo',
        New: 'Novo',
        //Dialog
        Dialog_Cancel: 'Cancelar',
        Dialog_Delete: 'Excluir',
        //error
        Required_error_message: 'Campo obrigatório',
        en: 'EN',
        sv: 'PT-BR'
    }).translations('EN', {
        //dashboard
        Dashboard_Home: 'Home',
        Dashboard_Users: 'Users',
        Dashboard_Modules: 'Modules',
        Dashboard_Setting: 'Setting',
        Dashboard_Scaniapp: 'Scaniapp',
        Dashboard_Logout: 'Logout',
        Dashboard_Edit_Profile: 'Edit Profile',
        Dashboard_Back: 'Back',
        Dashboard_Search: 'Search',
        //setting
        Setting_Setting: 'Setting',
        Setting_Update_Your_Password: 'Update Your Password',
        Setting_Old_Password: 'Old Password',
        Setting_New_Password: 'New Password',
        Setting_Confirm_Password: 'Confirm Password',
        Setting_SAVE_PASSWORD: 'SAVE PASSWORD',
        //users
        User_Users: 'Users',
        User_ID: 'ID',
        User_Name: 'Name',
        User_Email: 'Email',
        User_Profile_Picture: 'Profile Picture',
        User_Roles: 'Roles',
        User_Status: 'Status',
        User_Actions: 'Actions',
        User_Edit_item: 'Edit item',
        User_Delete_item: 'Delete item',
        User_Serial_Numner: 'Serial Numner',
        User_Display_Name: 'Display Name',
        User_User_Roles: 'User Roles',
        User_Select_User_Roles: 'Select User Roles',
        User_Administrator: 'Administrator',
        User_Development: 'Development',
        User_Support: 'Support',
        User_Marketing: 'Marketing',
        User_Email: 'Email',
        User_Password: 'Password',
        User_Confirm_Password: 'Confirm Password',
        User_Create_User: 'Create User',
        User_Cancel: 'Cancel',
        User_Choose_Profile_Picture: 'Choose Profile Picture',
        User_Edit_User: 'Edit User',
        User_Delete_User: 'Delete User',

        User_USER_EDIT: 'USER EDIT',
        //Manules
        Manules_Modules: 'Modules',
        Manules_ID: 'ID',
        Manules_NAME: 'NAME',
        Manules_DESCRIPTION: 'DESCRIPTION',

        Manules_Choose_File: 'Choose File',
        Manules_please_upload_json_file: 'please upload json file',
        Manules_Add: 'Add',
        Manules_Cancel: 'Cancel',
        Manules_Price: 'Price',
        Manules_Add_Price: 'Add  Price',
        Manules_Quick_Guide: 'Quick Guide',
        Manules_Technical_Training: 'Technical Training',

        Manules_Folder_Name: 'Folder Name',
        Manules_Select_folder: 'Select folder',
        Manules_Select_type_of_folder: 'Select type of folder',
        Manules_Text: 'Text',
        Manules_Photos: 'Photos',
        Manules_Video: 'Video',
        Manules_Special_content: 'Special content',
        Manules_Add_folder: 'Add folder',
        Manules_Cancel: 'Cancel',

        Manules_File_Name: 'File Name',
        Manules_File_Content: 'File Content',
        Manules_Add_file: 'Add file',
        Manules_Save_file: 'Save file',
        Manules_Choose_Picture: 'Choose Picture',
        Manules_Upload_Photo: 'Upload Photo',
        Manules_Choose_Video: 'Choose Video',
        Manules_Upload_Video: 'Upload Video',
        Manules_Edit_folder: 'Edit folder',
        Manules_Delete_folder: 'Delete Folder',

        community_tip_tilte: 'community_tips',
        community_tip_Content: 'Tips Content',
        Manules_add_tips: 'Add Tip ',
        //data-title//
        Scroll_to_top_tilte: 'Scroll to top ',
        New: 'New',

        //Pagination//
        Page_Previous: 'Previous',
        Page_Next: 'Next',
        //Dialog
        Dialog_Cancel: 'Cancel',
        Dialog_Delete: 'Delete',
        //error
        Required_error_message: 'This field is required',
        en: 'EN',
        sv: 'PT-BR'
    });

    $translateProvider.preferredLanguage('PT-BR');
});

app.controller('home', ['$scope', '$window', '$aside', '$http', '$translate', 'ngTableParams', '$filter', '$location',

    function($scope, $window, $aside, $http, $translate, ngTableParams, $filter, $uibModalInstance, $location) {

        Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);

        $scope.$on('Search-bar-show', function(event, profileObj) {

            $scope.search = profileObj;
        });
        $scope.$emit('Search-bar-show',
            false
        );

        $scope.language = "PT-BR";
        $scope.changelanguage = 'PT-BR';
        $scope.languages = ['PT-BR', 'EN'];
        $scope.updateLanguage = function(language) {

            $scope.changelanguage = language;
            $translate.use(language);
        };

        var token = Backendless.UserService.loggedInUser();
        $scope.loader = {
            loading: false,
        };
        $scope.homectu = true;
        debug(development);

        var userTokenIsValid = Backendless.UserService.isValidLogin();
        $scope.getModules = function() {
            var offset = 0;
            var dataQuery = new Backendless.DataQuery();
            var pagesize = 100;

            dataQuery.options = {
                pageSize: pagesize
            };
            var modules = Backendless.Persistence.of('modulos').find(dataQuery);
            var size = modules.data.length;
            var nextPage = modules._nextPage;

            while (nextPage) {
                modules = modules.getPage(offset, pagesize);
                offset += size;
                var size = modules.data.length;

                for (var i = 0; i < size; i++) {
                    modulesData.push({
                        id: i + 1,
                        objectId: modules.data[i].objectId,
                        name: modules.data[i].name,
                        desc: modules.data[i].description,
                        modulo_id: modules.data[i].modulo_id,
                        created: modules.data[i].created
                    });
                }
                nextPage = modules._nextPage;
                $scope.Modules = modulesData;

            }
        }

        if (userTokenIsValid) {

            $scope.$emit('Search-bar-show',
                false
            );

            $scope.Modules;

            var modulesData = [];
            if ($scope.Modules == undefined) {
                $scope.getModules();

            } else {
                $scope.Modules = modulesData;
            }

            var cookieloginvalue = [];
            var cookieloginarray = document.cookie.split(';');

            for (var i = 0; i < cookieloginarray.length; i++) {

                var key = cookieloginarray[i].split('=')[0];
                var value = cookieloginarray[i].split('=')[1];
                var objcookiearr = {};
                objcookiearr[key] = value;
                cookieloginvalue.push(objcookiearr);
            }

            var jsoncookiearr = JSON.stringify(cookieloginvalue);
            var data = jsoncookiearr.replace(/[\[\]']+/g, '');
            var str = '{' + data.replace(/[{}]/g, "") + '}';
            var cookiestr = str.replace(/ +/g, "");
            var cookiearr = JSON.parse(cookiestr);

            var currentUser = Backendless.UserService.getCurrentUser();

            var log_in_email = cookiearr['email'];

            $window.uploadDoneedit = function(files) {

                var name = files.files[0].name;
                $scope.filenameedit = name;
                $scope.imagefilter = false;
                $scope.imagtypeerror = " ";
            }

            $scope.userback = function() {
                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "email='" + log_in_email + "'";
                var pagesize = 100;
                dataQuery.options = {
                    pageSize: pagesize
                };

                var loged_in_users = Backendless.Persistence.of(Backendless.User).find(dataQuery);

                if (loged_in_users.data.length == 0) {
                    Backendless.UserService.logout();
                    $window.location.href = "/home";
                }
                $scope.u_pic = loged_in_users.data[0].profile_picture_url;
                $scope.user_id = loged_in_users.data[0].objectId;
                $scope.u_name = loged_in_users.data[0].display_name;
                $scope.u_email = loged_in_users.data[0].email;
                $scope.u_type = loged_in_users.data[0].role;

                $scope.admin_name = $scope.u_name;
                $scope.admin_email = $scope.u_email;
                $scope.role = $scope.u_type;
            }

            $scope.userback();

            $scope.logout = function() {
                Backendless.UserService.logout();
                $window.location.href = "/home";

            }
            submitNavbarSearch();
            $scope.submitNavbarSearch = function() {
                $scope.filter = this.filter;
                submitNavbarSearch(this.filter);
            }

            function submitNavbarSearch(filterkey) {
                $scope.filter = filterkey;
                $scope.tableParams = new ngTableParams({
                    page: 1,
                    count: 10,
                    filter: $scope.filter
                }, {
                    debugMode: true,
                    total: $scope.Modules.length,
                    getData: function($defer, params) {
                        var orderedData = params.sorting() ? $filter('orderBy')($scope.Modules, params.orderBy()) : data;
                        orderedData = $filter('filter')(orderedData, params.filter());
                        params.total(orderedData.length);
                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
            }

            // $scope.usersTable = new ngTableParams({
            // page: 1,
            // count: 10,
            //   sorting: {
            //                 name: 'asc'
            //             }
            // }, {
            // total: $scope.Modules.length,
            // getData: function ($defer, params) {
            // $scope.data = params.sorting() ? $filter('orderBy')( $scope.Modules, params.orderBy()) :  $scope.Modules;
            // $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
            // $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            // $defer.resolve($scope.data);
            // }
            // });

        } else {
            Backendless.UserService.logout();
            $window.location.href = "/home";
        }

    }

]);

app.controller('userClt', ['$scope', '$window', '$aside', '$http', 'ngTableParams', '$filter',

    function($scope, $window, $aside, $http, ngTableParams, $filter) {

        setTimeout(function() {
            $scope.$apply(function() {

                GetUsers();
                $scope.loding = true;
            });
        }, 1000);

        $scope.$emit('Search-bar-show',
            false
        );

        $scope.close = function() {

            $scope.Email_Error = " ";
            $scope.mailerr = false;
            $scope.filename = " ";
            $scope.pic = " ";
            $scope.filenameedit = " ";
        }

        Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);

        if ($scope.role === "Administrator") {
            $scope.permision = true;
        } else {
            $scope.permision = false;
        }

        var userTokenIsValid = Backendless.UserService.isValidLogin();

        if (userTokenIsValid) {

            function GetUsers() {

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "userStatus='ENABLED'";
                var pagesize = 100;
                dataQuery.options = {
                    pageSize: pagesize
                };
                var users = Backendless.Persistence.of(Backendless.User).find(dataQuery);

                var UserEditform = $aside({
                    scope: $scope,
                    templateUrl: 'assets/tpl/app/form/UserEditform.html',
                    show: false,
                    placement: 'left',
                    backdrop: false,
                    animation: 'am-slide-left'
                });
                var totalUser = users.data.length;
                var user = [];

                for (var i = 0; i < totalUser; i++) {

                    if (users.data[i].profile_picture_url == " " || null) {
                        var userPhoto = 'assets/img/avatar.png';
                    } else {
                        var userPhoto = users.data[i].profile_picture_url;
                    }
                    user.push({
                        id: i + 1,
                        objectId: users.data[i].objectId,
                        ownerId: users.data[i].ownerId,
                        pic: userPhoto,
                        role: $scope.role,
                        serial_number: users.data[i].serial_number,
                        name: users.data[i].display_name,
                        email: users.data[i].email,
                        created_date: users.data[i].created,
                        lastLogin: users.data[i].lastLogin,
                        updated: users.data[i].updated,
                        userStatus: users.data[i].userStatus,
                        utype: users.data[i].role
                    });
                }
                var alldata = user;
                $scope.tableParams = new ngTableParams({
                    page: 1,
                    count: 10,
                    sorting: {
                        name: 'asc'
                    }
                }, {
                    filterDelay: 50,
                    total: alldata.length, // length of data
                    getData: function($defer, params) {
                        var mydata = [];
                        mydata = alldata;
                        mydata = params.sorting() ? $filter('orderBy')(mydata, params.orderBy()) : mydata;
                        $defer.resolve(mydata.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
                if (user.length >= totalUser) {
                    UserEditform.hide();
                    $scope.edituserloder = false;
                    $scope.userdeleteloader = false;
                }
                return user;

            }

            var UserCreateform = $aside({
                scope: $scope,
                templateUrl: 'assets/tpl/app/form/UserCreateform.html',
                show: false,
                placement: 'left',
                backdrop: false,
                animation: 'am-slide-left'
            });

            $window.uploadDone = function(files) {

                var name = files.files[0].name;
                $scope.filename = name;
                $scope.imagefilter = false;
                $scope.imagtypeerror = " ";
            }
            $window.uploadDoneedit = function(files) {

                var name = files.files[0].name;
                $scope.filenameedit = name;
                $scope.imagefilter = false;
                $scope.imagtypeerror = " ";
            }

            $scope.CreateUser = function() {

                if ($scope.changelanguage == 'EN') {
                    $scope.success_action = "ok";
                    $scope.email_exise = "Email Already Exist";
                } else {
                    $scope.success_action = "OK";
                    $scope.email_exise = "E-mail já cadastrado";
                }

                UserEditform.hide();
                $scope.done = '';
                $scope.serial_number = makeid();
                $scope.Mtitle = "Create User Profile";
                if ($scope.show = true) {
                    UserCreateform.show();
                    $scope.show = false;
                }
                // Create new User
                $scope.CreateNewUser = function(item) {

                    $scope.done = '';

                    var email = item.email;
                    var password = item.password;
                    var confpassword = item.confpassword;
                    var name = item.name;
                    var serial_number = $scope.serial_number;
                    var pic = item.pic;

                    var roles = item.roles;

                    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                    if (email.match(pattern)) {

                        $scope.Email_Error = " ";
                        if (password.length >= 6 && confpassword == password) {

                            $scope.Pass_Error = " ";
                            $scope.ConPass_Error = " ";
                            $scope.Email_Error = " ";

                            var dataQuery = new Backendless.DataQuery();
                            dataQuery.condition = "userStatus='ENABLED' and email='" + email + "'";
                            var pagesize = 100;
                            dataQuery.options = {
                                pageSize: pagesize
                            };
                            var users = Backendless.Persistence.of(Backendless.User).find(dataQuery);

                            if (users.data.length > 0) {

                                var email_exist_form = $aside({
                                    scope: $scope,
                                    templateUrl: 'assets/tpl/app/email_exist_dialog.html',
                                    show: false,
                                    placement: 'top',
                                    backdrop: false,
                                    animation: 'am-slide-top'
                                });

                                email_exist_form.$promise.then(function() {
                                    email_exist_form.show();
                                })
                            } else {

                                var user = new Backendless.User();
                                user.email = email;
                                user.password = password;
                                user.display_name = name;
                                user.serial_number = serial_number;
                                user.role = roles;

                                if (pic == undefined) {
                                    $scope.edituserloder = true;
                                    user.profile_picture_url = " ";
                                    Backendless.UserService.register(user, new Backendless.Async(
                                        function Success(res) {

                                            fileName = " ";
                                            pic = " ";
                                            $scope.filename = " ";
                                            UserCreateform.hide();
                                            $scope.User = GetUsers();
                                        },
                                        function Error(error) {
                                            console.log('error', error);

                                        }));
                                } else {

                                    var fileName = pic.name;

                                    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
                                    if (ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "PNG" || ext == "png") {

                                        $scope.imagtypeerror = "";
                                        $scope.edituserloder = true;

                                        var callback = {};

                                        callback.success = function(result) {

                                            user.profile_picture_url = result.fileURL;
                                            Backendless.UserService.register(user, new Backendless.Async(
                                                function Success(res) {
                                                    fileName = " ";
                                                    pic = " ";
                                                    $scope.filename = " ";
                                                    UserCreateform.hide();
                                                    $scope.User = GetUsers();
                                                },
                                                function Error(error) {
                                                    $scope.edituserloder = false;
                                                    console.log('error', error);

                                                }));
                                        }

                                        callback.fault = function(result) {
                                            $scope.edituserloder = false;
                                            console.log("error - " + result.message);
                                        }

                                        Backendless.Files.upload(pic, "Admin_Profile_pic", true, callback);
                                    } else {
                                        $scope.imgfilter = true;
                                        $scope.edituserloder = false;
                                        $scope.imagtypeerror = imagtypeerror($scope.changelanguage);
                                    }

                                }

                            }
                        } else {

                            if (password.length <= 6) {

                                if ($scope.changelanguage == 'EN')
                                    $scope.Pass_Error = "Please enter at least 6 characters.";
                                else
                                    $scope.Pass_Error = " Mínimo de seis caracteres";

                            }

                            if (confpassword != password) {
                                $scope.ConPass_Error = CnfPasswordError($scope.changelanguage);
                            }

                        }
                    } else {

                        $scope.Email_Error = EmailError($scope.changelanguage);

                        $scope.mailerr = true;
                    }

                }

            }

            var UserEditform = $aside({
                scope: $scope,
                templateUrl: 'assets/tpl/app/form/UserEditform.html',
                show: false,
                placement: 'left',
                backdrop: false,
                animation: 'am-slide-left'
            });
            $scope.editUser = function(item) {
                UserCreateform.hide();
                UserEditform.hide();
                $scope.filenameedit = " ";
                $scope.master = {};
                $scope.email = item.email;
                $scope.name = item.name;
                $scope.utype = item.utype;
                $scope.serial_number = item.serial_number;
                $scope.objectId = item.objectId;
                $scope.path = item.pic;
                UserEditform.show();

                $scope.EditCurrentUser = function(item) {

                    var pic = this.pic;

                    var email = this.email;
                    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                    if (email.match(pattern)) {

                        $scope.Email_Error = " ";

                        var user = new Backendless.User();
                        user.email = this.email;
                        user.display_name = this.name;

                        user.role = this.utype;

                        if (pic == undefined || fileName == pic.name) {
                            $scope.edituserloder = true;

                            user.profile_picture_url = $scope.path;
                            user.objectId = $scope.objectId;
                            Backendless.UserService.update(user, new Backendless.Async(
                                function Success(res) {
                                    $scope.filenameedit = " ";

                                    UserEditform.hide();
                                    $scope.User = GetUsers();
                                },
                                function Error(error) {
                                    $scope.edituserloder = false;
                                    console.log('error', error);
                                }));
                        } else {
                            var fileName = pic.name;
                            var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
                            if (ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "PNG" || ext == "png") {

                                $scope.imagtypeerror = "";
                                $scope.edituserloder = true;

                                var callback = {};
                                callback.success = function(result) {

                                    $scope.profile_picture_url = result.fileURL;

                                    user.profile_picture_url = result.fileURL;
                                    user.objectId = $scope.objectId;
                                    Backendless.UserService.update(user, new Backendless.Async(
                                        function Success(res) {
                                            $scope.filenameedit = " ";
                                            UserEditform.hide();
                                            $scope.User = GetUsers();
                                        },
                                        function Error(error) {
                                            $scope.edituserloder = false;
                                            console.log('error', error);

                                        }));
                                }
                                callback.fault = function(result) {
                                    $scope.edituserloder = false;
                                    console.log("error - " + result.message);
                                }
                                Backendless.Files.upload(pic, "Admin_Profile_pic", true, callback);

                            } else {
                                $scope.imgfilter = true;
                                $scope.edituserloder = false;
                                $scope.imagtypeerror = imagtypeerror($scope.changelanguage);
                            }

                        }

                    } else {
                        $scope.Email_Error = EmailError($scope.changelanguage);
                    }

                }
            }
            var frmtext = $aside({
                scope: $scope,
                templateUrl: 'assets/tpl/app/dialog.html',
                show: false,
                placement: 'top',
                backdrop: true,
                animation: 'am-slide-top'
            });
            $scope.removeUser = function(item) {
                UserEditform.hide();
                UserCreateform.hide();
                if ($scope.changelanguage == 'EN') {
                    $scope.Title_dialog = "Delete User";
                    $scope.message = "Are you sure want to delete this user?";
                } else {
                    $scope.Title_dialog = "deste usuário";
                    $scope.message = "Confirma a exclusão deste usuário?";
                }

                frmtext.show();
                $scope.delete = function() {
                    frmtext.hide();
                    $scope.edituserloder = true;
                    $scope.userdeleteloader = true;
                    var User = Backendless.Data.of(Backendless.User);
                    User.remove(item.objectId, new Backendless.Async(
                        function Success(res) {

                            GetUsers();
                            $scope.edituserloder = false;
                            $scope.userdeleteloader = false;
                        },
                        function Error(res) {
                            $scope.edituserloder = false;
                            $scope.userdeleteloader = false;
                            console.log('Error', res);
                        }));

                }

            }
            $scope.close_side = function() {
                UserCreateform.hide();
                UserEditform.hide();
            }

        } else {
            Backendless.UserService.logout();
            $window.location.href = "/home";
        }
    }

]);

app.controller('modulesClt', ['$scope', '$window', '$aside', '$http', 'ngTableParams', '$filter',
    function($scope, $window, $aside, $http, ngTableParams, $filter) {
        Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);

        $scope.loding = true;
        $scope.done = '';
        $scope.$emit('Search-bar-show',
            true
        );

        var modules = Backendless.Persistence.of('modulos').find();
        if ($scope.role === 'Administrator') {
            $scope.permision = true;
        } else {
            $scope.permision = false;
        }

        $scope.close = function() {

            $scope.filename = " ";
        }

        // var alldata = $scope.Modules;
        // $scope.tableParams = new ngTableParams({
        //     page: 1,
        //     count: 10,
        //     sorting: {
        //         name: 'asc'
        //     }
        // }, {
        //     filterDelay: 50,
        //     total: alldata.length, // length of data
        //     getData: function($defer, params) {
        //         var mydata = [];
        //         mydata = alldata;
        //         mydata = params.sorting() ? $filter('orderBy')(mydata, params.orderBy()) : mydata;
        //         $defer.resolve(mydata.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        //          $defer.resolve($scope.data);

        //    }
        // });

        $scope.ViewModule = function(item) {
            $scope.module_name = item.name;
            $scope.Mtitle = "Module Detail";
            $scope.CreateModuelButton = false;
            $scope.closeButton = "Ok";
            $scope.read_Mname = true;
            $scope.read_Mdesc = true;
            localStorage.setItem("module_name", item.name);
            localStorage.setItem("manual", item.objectId);
            $scope.local = localStorage.setItem("manual", item.objectId);

            $window.location.href = "#/manuals";
        }

        var frmSaveUploadDataModule = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/SavUploadDataModule.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });

        $scope.SaveUploadDataModule = function() {
            if ($scope.changelanguage == 'EN')
                $scope.Mtitle = "Add File";
            else
                $scope.Mtitle = "Adicionar arquivo";

            $scope.CreateModuelButton = true;
            $scope.closeButton = "Cancel";
            $scope.read_Mname = false;
            $scope.read_Mdesc = false;
            frmSaveUploadDataModule.show();
        }

        $scope.get_uploaddatamodule = function(data) {
            $scope.adduploaddatamodule = function(data) {
                Backendless.Files.upload(data.file, "Modulos", true, new Backendless.Async(
                    function Success(res) {

                        $http.get(res.fileURL).success(function(data) {
                            var newdata = [];

                            for (var i = 0; i < data.Modulos.length; i++) {

                                newdata.push({
                                    modulo_id: data.Modulos[i].id,
                                    name: data.Modulos[i].Nome,
                                    description: data.Modulos[i].Descricao
                                });

                                var dataQuery = new Backendless.DataQuery();
                                dataQuery.condition = "modulo_id=" + data.Modulos[i].id + "";
                                var modulos = Backendless.Persistence.of('modulos').find(dataQuery);

                                if (modulos.data.length > 0) {
                                    var modulos_moduloId = modulos.data[0].modulo_id;
                                    var updatedata = modulos.data[0];
                                    updatedata["name"] = data.Modulos[i].Nome;
                                    updatedata["description"] = data.Modulos[i].Descricao;
                                    newdata[i] = updatedata;
                                }

                                Backendless.Persistence.of('modulos').save(newdata[i], new Backendless.Async(
                                    function Success(res) {

                                        frmSaveUploadDataModule.hide();

                                    },
                                    function Error(err) {
                                        console.log('Error', err);
                                    }
                                ));
                            }
                            $window.location.reload();
                        });
                    },
                    function Error(err) {
                        console.log('err', err);
                    }
                ));
            }
        }

        $scope.close_side = function() {
            frmSaveUploadDataModule.hide();
        }
    }
]);

app.controller('manualsClt', ['$scope', '$window', '$aside', '$http',

    function($scope, $window, $aside, $http) {
        Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);

        $scope.$emit('Search-bar-show',
            false
        );
        $scope.close = function() {
            $scope.filename = " ";
        }

        var manualObjectid = localStorage.getItem("manual");
        $scope.current_modulos_id = manualObjectid;
        $scope.moulos_name = localStorage.getItem("module_name");
        var modulos = Backendless.Persistence.of('modulos').findById(manualObjectid);

        function displayData() {
            var modulos = Backendless.Persistence.of('modulos').findById(manualObjectid);

            $scope.cost_price = modulos.technical_training_cost;
            $scope.edit_folder_loder = false;
            var total_Quick_manuals = modulos.quick_guide.length;
            $scope.quick_guideData = [];
            for (var i = 0; i < total_Quick_manuals; i++) {
                $scope.quick_guideData.push({
                    name: modulos.quick_guide[i].name,
                    data: modulos.quick_guide[i].data,
                    objectId: modulos.quick_guide[i].objectId,
                    type: modulos.quick_guide[i].type,
                    created: modulos.quick_guide[i].created,
                    updated: modulos.quick_guide[i].updated
                });
                if ($scope.quick_guideData.length >= total_Training_manulas) {
                    $scope.edit_folder_loder = false;

                }
            }

            var total_Training_manulas = modulos.technical_training.length;
            $scope.technical_trainingData = [];

            for (var i = 0; i < total_Training_manulas; i++) {
                $scope.technical_trainingData.push({
                    name: modulos.technical_training[i].name,
                    data: modulos.technical_training[i].data,
                    objectId: modulos.technical_training[i].objectId,
                    type: modulos.technical_training[i].type,
                    created: modulos.technical_training[i].created,
                    updated: modulos.technical_training[i].updated
                });
                if ($scope.quick_guideData.length >= total_Training_manulas) {

                    $scope.edit_folder_loder = false;

                }
            }
        }

        displayData();

        $scope.backModules = function() {
            $window.location.href = "#/modules";
        }

        var frmManuals = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/CreateManuals.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });
        $scope.CreateManuals = function() {
            editManuals.hide();
            Add_Price_form.hide();
            if ($scope.changelanguage == 'EN')
                $scope.Mtitle = "ADD FOLDER";
            else
                $scope.Mtitle = "Adicionar";
            frmManuals.show();
        }

        $scope.addManuals = function() {
            $scope.edit_folder_loder = true;
            var objectId = modulos.objectId;

            $scope.modeid = objectId;
            var module_name = $scope.module_name;
            var manuals_folder = this.folder;
            var type = this.type;
            var foldername = this.foldername;

            if (manuals_folder == "quick_guide") {

                data = ({
                    objectId: objectId,
                    quick_guide: new Backendless.Persistence.of('manuals').save({
                        // objectId: manuals_objectId
                        name: foldername,
                        type: type,
                        data: "[]"
                    })
                });
            } else {

                data = ({
                    objectId: objectId,
                    technical_training: new Backendless.Persistence.of('manuals').save({
                        // objectId: manuals_objectId
                        name: foldername,
                        type: type,
                        data: "[]"

                    })
                });
            }

            Backendless.Persistence.of('modulos').save(data, new Backendless.Async(
                function Success(res) {
                    console.log("res", res);
                    frmManuals.hide();
                    displayData();

                },
                function Error(err) {
                    console.log('err', err);
                }
            ));

        }
        $scope.viewFolder = function(item) {

            localStorage.setItem("folder", item.objectId);

            localStorage.setItem("folderType", item.type);
            if (item.type == "photo") {
                $window.location.href = "#/photo";
            }
            if (item.type == "text") {
                $window.location.href = "#/text";
            }
            if (item.type == "community_tips") {
                $window.location.href = "#/tips";
            }
            if (item.type == "video") {
                $window.location.href = "#/video";
            }
        }

        //Folder Opration for Edit and Delete //

        // quick_guide and technical_training //

        //folder Edit //

        var editManuals = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/editManuals.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });

        $scope.editFolder = function(folder_edit_item) {
            frmManuals.hide();
            editManuals.hide();
            Add_Price_form.hide();
            if ($scope.changelanguage == 'EN')
                $scope.Mtitle = "EDIT FOLDER";
            else
                $scope.Mtitle = "Editar pasta";

            editManuals.show();

            $scope.edit_foldername = folder_edit_item.name;
            $scope.foldername_objectId = folder_edit_item.objectId;
        }

        $scope.editManuals = function() {

            $scope.edit_folder_loder = true;
            var data = ({
                objectId: this.foldername_objectId,
                name: this.edit_foldername
            });
            Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                function Success(res) {

                    displayData();
                    editManuals.hide();
                    $scope.edit_folder_loder = false;

                },
                function Error(err) {
                    $scope.edit_folder_loder = false;
                    console.log('Error', err);
                }

            ));
        }

        // show Popup window for DELETE confirm //

        var Folder_delete = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/dialog.html',
            show: false,
            placement: 'top',
            backdrop: true,
            animation: 'am-slide-top'
        });

        //folder delete//
        $scope.removeFolder = function(folder_delete_item) {

            editManuals.hide();
            frmManuals.hide();
            Add_Price_form.hide();
            var objectId = folder_delete_item.objectId;
            var quick_url_data = folder_delete_item.data;

            if ($scope.changelanguage == 'EN') {
                $scope.Title_dialog = "Delete Folder";
                $scope.message = "Are you sure want to delete this Folder?";
            } else {
                $scope.Title_dialog = "deste pasta";
                $scope.message = "Confirma a exclusão deste pasta?";
            }

            Folder_delete.show();

            $scope.delete = function() {
                Folder_delete.hide();
                $scope.delete_folder_loder = true;
                if (quick_url_data) {
                    var jsonData = JSON.parse(quick_url_data);
                    for (var f = 0; f < jsonData.length; f++) {

                        Backendless.Files.remove(jsonData[f].url);
                    }
                }

                if (objectId) {
                    var data = ({
                        objectId: objectId,
                    });
                    Backendless.Persistence.of('manuals').remove(data, new Backendless.Async(
                        function Success(res) {

                            displayData();
                            $scope.delete_folder_loder = false;

                        },
                        function Error(err) {
                            console.log('Error', err);
                            $scope.delete_folder_loder = false;
                        }

                    ));
                }
            }

        }

        // ADD PRICE //

        var Add_Price_form = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/Add_Price.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });
        $scope.Add_Price_open = function(price) {
            editManuals.hide();
            frmManuals.hide();
            if ($scope.changelanguage == 'EN')
                $scope.Mtitle = "ADD PRICE";
            else
                $scope.Mtitle = "Adicionar PREÇO";

            Add_Price_form.show();
            $scope.cost_id = price;
            $scope.cost = $scope.cost_price;
        }
        $scope.Add_Price = function() {

            $scope.edit_Price_loder = true;
            var data = ({
                objectId: this.cost_id,
                technical_training_cost: this.cost
            });
            Backendless.Persistence.of('modulos').save(data, new Backendless.Async(
                function Success(res) {
                    Add_Price_form.hide();
                    displayData();
                    $scope.edit_Price_loder = false;
                },
                function Error(err) {
                    console.log('Error', err);
                    $scope.edit_Price_loder = false;
                }
            ));

        }

        $scope.close_side = function() {
            editManuals.hide();
            frmManuals.hide();
            Add_Price_form.hide();
        }

    }
]);

app.controller('folder', ['$scope', '$window', '$aside', '$http', '$q', '$log', '$timeout',
    function($scope, $window, $aside, $http, $q, $log, $timeout) {
        $scope.$emit('Search-bar-show',
            false
        );
        if ($scope.changelanguage == 'EN')
            $scope.Mtitle = "ADD PHOTO";
        else
            $scope.Mtitle = "Adicionar foto";

        setTimeout(function() {
            $scope.$apply(function() {
                var type = localStorage.getItem("folderType");
                displayData(type);
                $scope.loding = true;
            });
        }, 0);
        $scope.close = function() {
            $scope.data = " ";
            $scope.filename = " ";
            $scope.pictitle = " ";
            $scope.vidtypeerror = " ";
            $scope.imagtypeerror = " ";

        }
        $scope.clearEditor = function() {
            $scope.editor = '';
        }

        Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);

        var folderObjectid = localStorage.getItem("folder");

        var type = localStorage.getItem("folderType");

        var frmPhoto = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/uploadPhoto.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });
        var formvideo = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/uploadVideo.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });

        function displayData(type) {

            if (type == "photo") {

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + folderObjectid + "'";

                var PhotoData = Backendless.Persistence.of('manuals').find(dataQuery);
                var photo = PhotoData.data[0].data;
                var data = JSON.parse(photo);

                var photodata = [];
                for (var i = 0; i < data.length; i++) {

                    $scope.loding = false;
                    var pic_prename = data[i].name.substr(0, data[i].name.lastIndexOf('.'));
                    photodata.push({
                        name: pic_prename,
                        date: data[i].date,
                        url: data[i].url
                    });

                    if (photodata.length >= data.length) {
                        $scope.pictitle = " ";
                        frmPhoto.hide();
                        $scope.uploderpic = false;
                        $scope.deletepicloding = false;
                        $scope.loding = true;
                    }
                }
                $scope.photoData = photodata;

            } else if (type == "text") {

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + folderObjectid + "'";
                var TextData = Backendless.Persistence.of('manuals').find(dataQuery);
                var Textobject = TextData.data[0].data;
                var data = JSON.parse(Textobject);

                var textData = [];
                for (var i = 0; i < data.length; i++) {

                    textData.push({
                        name: data[i].name + ".html",
                        date: data[i].date,
                        url: data[i].url
                    });

                    if (textData.length >= data.length) {

                        $scope.aadtextloder = false;
                        $scope.deletetextloder = false;

                    }
                }
                $scope.textData = textData;

            } else if (type == "video") {

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + folderObjectid + "'";
                var VideoData = Backendless.Persistence.of('manuals').find(dataQuery);

                var Video = VideoData.data[0].data;

                var data = JSON.parse(Video);

                var videodata = [];
                for (var i = 0; i < data.length; i++) {

                    var video_prename = data[i].name.substr(0, data[i].name.lastIndexOf('.'));
                    videodata.push({
                        name: video_prename,
                        date: data[i].date,
                        url: data[i].url
                    });
                    if (videodata.length >= data.length) {
                        $scope.filenm = false;
                        $scope.filename = " ";
                        formvideo.hide();
                        $scope.uplodervid = false;
                        $scope.deletevidloding = false;
                        $scope.loding = true;
                    }
                }
                $scope.videodata = videodata;
            } else if (type == "community_tips") {

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "manual_id='" + folderObjectid + "'";
                var data = Backendless.Persistence.of('community_tips').find(dataQuery);

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + $scope.user_id + "'";
                var pagesize = 100;
                dataQuery.options = {
                    pageSize: pagesize
                };
                var users = Backendless.Persistence.of(Backendless.User).find(dataQuery);

                if (users.data[0].profile_picture_url == " " || null || undefined) {
                    var userPhoto = 'assets/img/avatar.png';
                } else {
                    var userPhoto = users.data[0].profile_picture_url;
                }
                var display_name = users.data[0].display_name;

                var community_tips_data = [];
                for (var i = 0; i < data.data.length; i++) {

                    community_tips_data.push({
                        tip: data.data[i].tip,
                        unlike: data.data[i].users_who_dislike.length,
                        like: data.data[i].users_who_like.length,
                        profile_url: userPhoto,
                        name: display_name,
                        date: data.data[i].created,
                        objectId: data.data[i].objectId
                    });

                    if (community_tips_data.length >= data.data.length) {

                        $scope.delete_tip_loding = false;

                    }
                }

                $scope.community_tips_data = community_tips_data;
            }
        }

        if (type == "photo") {
            displayData("photo");
        }
        if (type == "text") {
            displayData("text");
        }
        if (type == "community_tips") {
            displayData("community_tips");
        }
        if (type == "video") {
            displayData("video");

        }
        $scope.backModules = function() {
            $window.location.href = "#/manuals";
        }
        var frmPhoto = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/uploadPhoto.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });

        $scope.uploadPhoto = function() {
                if ($scope.changelanguage == 'EN')
                    $scope.Mtitle = "ADD PHOTO";
                else
                    $scope.Mtitle = "Adicionar foto";

                frmPhoto.show();
            }
            // Add Photo
        $scope.filename = "";
        $window.imageupload = function(type) {
            $scope.imagefilter = false;
            $scope.selecterror = " ";
            $scope.imagtypeerror = " ";
            var files = type;
            $scope.pictitle = files.files.length + "files";
            //  for (var i = 0; i < files.files.length; i++) {
            // var name = files.files[i].name;
            // $scope.pictitle.push(name);
            // }
            // $scope.pictitle = $scope.pictitle.toString();
        }

        $scope.addPhoto = function(data) {

            $scope.data = data;
            var img = this.pic;

            var dataQuery = new Backendless.DataQuery();
            dataQuery.condition = "objectId='" + folderObjectid + "'";
            var folderData = Backendless.Persistence.of('manuals').find(dataQuery);
            $scope.newdata = JSON.parse(folderData.data[0].data);

            var modeid = localStorage.getItem("manual");
            var dataQuery = new Backendless.DataQuery();
            dataQuery.condition = "objectId='" + modeid + "'";
            var result = Backendless.Persistence.of('modulos').find(dataQuery);
            var modulo_id = result.data[0].modulo_id;
            try {
                var pagesize = 100,
                    offset = 100;
                $scope.res = Backendless.Files.listing("manuals/" + modulo_id, true, pagesize, offset);

                for (var i = 0; i < img.length; i++) {
                    var ext = img[i].name.substring(img[i].name.lastIndexOf('.') + 1);
                    if (ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "PNG" || ext == "png") {
                        $scope.imagtypeerror = "";
                        $scope.uploderpic = true;
                        $scope.isDisabled = true;
                        var file = new Blob([img[i]]);
                        $scope.newfile = img[i].name.substr(0, img[i].name.lastIndexOf('.'));
                        var lname = img[i].name.substr(img[i].name.lastIndexOf('.'));

                        if ($scope.res) {
                            var j = 0;

                            for (var k = 0; k < $scope.res.data.length; k++) {

                                var list = $scope.res.data[k].name;
                                var fileExtension = list.substr(list.lastIndexOf('.') + 1)

                                if (fileExtension == "gif" || fileExtension == "GIF" || fileExtension == "JPEG" || fileExtension == "jpeg" || fileExtension == "jpg" || fileExtension == "JPG" || fileExtension == "PNG" || fileExtension == "png") {
                                    var filename = list.substr(0, list.lastIndexOf('.'));
                                    if (filename.includes($scope.newfile)) {
                                        j++;
                                    }
                                }
                            }

                            if (j !== 0) {
                                $scope.newfile1 = $scope.newfile + "_" + j + lname;
                                $scope.name = $scope.newfile + lname;

                                Backendless.Files.saveFile("manuals/" + modulo_id, $scope.newfile1, file, true, new Backendless.Async(
                                    function Success(res) {

                                        var file_name = decodeURIComponent(res.substring(res.lastIndexOf('/') + 1));
                                        delim = '\\+'
                                        var re = new RegExp(delim, 'g');
                                        var file_name_img = file_name.replace(re, " ");

                                        var makeTimestamp = new Date().valueOf();

                                        $scope.newdata.push({ "url": res, "name": file_name_img, "date": makeTimestamp });

                                        var data = ({
                                            objectId: folderObjectid,
                                            data: JSON.stringify($scope.newdata)
                                        });
                                        Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                                            function Success(res) {

                                                displayData("photo");

                                                $scope.isDisabled = false;
                                            },
                                            function Error(err) {
                                                console.log('Error', err);
                                                $scope.uploderpic = false;
                                            }
                                        ));

                                    },
                                    function Error(err) {
                                        console.log('err', err);
                                        $scope.uploderpic = false;
                                    }
                                ));
                            } else {
                                $scope.newfile1 = img[i].name;

                                Backendless.Files.saveFile("manuals/" + modulo_id, $scope.newfile1, file, true, new Backendless.Async(
                                    function Success(res) {

                                        var file_name = decodeURIComponent(res.substring(res.lastIndexOf('/') + 1));
                                        delim = '\\+'
                                        var re = new RegExp(delim, 'g');
                                        var file_name_img = file_name.replace(re, " ");
                                        var makeTimestamp = new Date().valueOf();

                                        $scope.newdata.push({ "url": res, "name": file_name_img, "date": makeTimestamp });

                                        var data = ({
                                            objectId: folderObjectid,
                                            data: JSON.stringify($scope.newdata)
                                        });
                                        Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                                            function Success(res) {

                                                displayData("photo");

                                                $scope.isDisabled = false;
                                            },
                                            function Error(err) {
                                                console.log('Error', err);
                                                $scope.uploderpic = false;
                                            }
                                        ));

                                    },
                                    function Error(err) {
                                        console.log('err', err);
                                        $scope.uploderpic = false;
                                    }
                                ));
                            }
                        } else {}
                    } else {
                        $scope.imgfilter = true;
                        $scope.uploderpic = false;
                        $scope.imagtypeerror = imagtypeerror($scope.changelanguage);
                    }
                }

            } catch (e) {
                for (var i = 0; i < data.pic.length; i++) {
                    var ext = data.pic[i].name.substring(data.pic[i].name.lastIndexOf('.') + 1);
                    if (ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "PNG" || ext == "png") {
                        $scope.imagtypeerror = "";
                        $scope.uploderpic = true;
                        $scope.isDisabled = true;
                        Backendless.Files.upload(data.pic[i], "manuals/" + modulo_id, true, new Backendless.Async(
                            function Success(res) {

                                // var file_name = res.fileURL.substring(res.fileURL.lastIndexOf('/') + 1);

                                var file_name = decodeURIComponent(res.fileURL.substring(res.fileURL.lastIndexOf('/') + 1));
                                delim = '\\+'
                                var re = new RegExp(delim, 'g');
                                var file_name_img = file_name.replace(re, " ");

                                var makeTimestamp = new Date().valueOf();

                                $scope.newdata.push({ "url": res.fileURL, "name": file_name_img, "date": makeTimestamp });

                                var data = ({
                                    objectId: folderObjectid,
                                    data: JSON.stringify($scope.newdata)
                                });
                                Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                                    function Success(res) {

                                        displayData("photo");

                                        $scope.isDisabled = false;
                                    },
                                    function Error(err) {
                                        console.log('Error', err);
                                        $scope.uploderpic = false;
                                    }
                                ));

                            },
                            function Error(err) {
                                console.log('err', err);
                                $scope.uploderpic = false;
                            }
                        ));

                    } else {
                        $scope.imgfilter = true;
                        $scope.uploderpic = false;
                        $scope.imagtypeerror = imagtypeerror($scope.changelanguage);
                    }
                }
            }
        }

        // Text//
        var frmtext = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/dialog.html',
            show: false,
            placement: 'top',
            backdrop: true,
            animation: 'am-slide-top'
        });

        var newtextfile = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/uploadText.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });
        $scope.createtextfile = function() {
            TextEditform.hide();
            if ($scope.changelanguage == 'EN')
                $scope.Mtitle = "ADD TEXT FILE";
            else
                $scope.Mtitle = "Adicionar arquivo de texto";
            newtextfile.show();
        }

        //create new text file//
        $scope.addtext = function(textdata) {

            $scope.aadtextloder = true;

            var data = textdata.editor;
            $scope.textfilename = textdata.filename;

            var modeid = localStorage.getItem("manual");

            var dataQuery = new Backendless.DataQuery();
            dataQuery.condition = "objectId='" + modeid + "'";

            var result = Backendless.Persistence.of('modulos').find(dataQuery);

            var modulo_id = result.data[0].modulo_id;
            $scope.modulo_id = modulo_id;

            var file = new Blob([data], { type: 'text/html;charset=utf-8' });
            $scope.textfilename1 = textdata.filename + ".html";

            $scope.newfile = textdata.filename;

            try {
                var pagesize = 100,
                    offset = 100;
                var res = Backendless.Files.listing("manuals/" + modulo_id, true, pagesize, offset);

                var j = 0;
                for (var i = 0; i < res.data.length; i++) {
                    var list = res.data[i].name;
                    var fileExtension = list.substr(list.lastIndexOf('.') + 1)
                        // $scope.filelist.push(list);
                    if (fileExtension == "html") {
                        var filename = list.substr(0, list.lastIndexOf('.'))
                        if (filename.includes($scope.newfile)) {
                            j++;
                        }
                    }
                }
                if (j != 0) {
                    $scope.newfile_html = $scope.newfile + "_" + j + ".html";
                    $scope.savename = $scope.newfile + "_" + j;
                } else {
                    $scope.newfile_html = $scope.newfile + ".html";
                    $scope.savename = $scope.newfile;
                }

                Backendless.Files.saveFile("manuals/" + modulo_id, $scope.newfile_html, file, true, new Backendless.Async(
                    function Success(res) {

                        var dataQuery = new Backendless.DataQuery();
                        dataQuery.condition = "objectId='" + folderObjectid + "'";
                        var folderData = Backendless.Persistence.of('manuals').find(dataQuery);

                        var newdata = JSON.parse(folderData.data[0].data);

                        var makeTimestamp = new Date().valueOf();

                        newdata.push({ "url": res, "name": $scope.savename, "date": makeTimestamp });

                        var newdata = JSON.stringify(newdata);

                        var data = ({
                            objectId: folderObjectid,
                            data: newdata
                        });
                        Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                            function Success(res) {
                                // $scope.textfilename = "File Name";
                                newtextfile.hide();
                                displayData("text");
                            },
                            function Error(err) {
                                $scope.aadtextloder = false;
                                console.log('Error', err);
                            }
                        ));

                    },
                    function Error(err) {
                        $scope.aadtextloder = false;
                        console.log('Error', err);
                    }
                ));

            } catch (e) {

                Backendless.Files.saveFile("manuals/" + modulo_id, $scope.textfilename1, file, true, new Backendless.Async(
                    function Success(res) {

                        var dataQuery = new Backendless.DataQuery();
                        dataQuery.condition = "objectId='" + folderObjectid + "'";
                        var folderData = Backendless.Persistence.of('manuals').find(dataQuery);

                        var newdata = JSON.parse(folderData.data[0].data);

                        var makeTimestamp = new Date().valueOf();

                        newdata.push({ "url": res, "name": $scope.textfilename, "date": makeTimestamp });

                        var newdata = JSON.stringify(newdata);

                        var data = ({
                            objectId: folderObjectid,
                            data: newdata
                        });
                        Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                            function Success(res) {
                                //  $scope.textfilename = "File Name";
                                newtextfile.hide();
                                displayData("text");
                            },
                            function Error(err) {
                                $scope.aadtextloder = false;
                                console.log('Error', err);
                            }
                        ));

                    },
                    function Error(err) {
                        $scope.aadtextloder = false;
                        console.log('Error', err);
                    }
                ));
            }

        }

        //edit text file//
        var TextEditform = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/TextEditform.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });
        $scope.editTextFile = function(item) {
                newtextfile.hide();
                TextEditform.hide();
                $scope.loding = true;
                if ($scope.changelanguage == 'EN')
                    $scope.Mtitle = "Edit Text File";
                else
                    $scope.Mtitle = "Editar arquivo de texto";

                $http.get(item.url).success(function(data) {

                    if (data) {
                        $scope.textdesc = data;
                        TextEditform.show();
                    }
                });

                $scope.htmlfile = item.name.substr(0, item.name.lastIndexOf('.'));

                $scope.editcurrenttext = function() {

                    $scope.aadtextloder = true;

                    $scope.newfile = this.htmlfile + ".html";

                    var data = this.textdesc;

                    var modeid = localStorage.getItem("manual");
                    var dataQuery = new Backendless.DataQuery();
                    dataQuery.condition = "objectId='" + modeid + "'";
                    var result = Backendless.Persistence.of('modulos').find(dataQuery);

                    var modulo_id = result.data[0].modulo_id;
                    var file = new Blob([data], { type: 'text/html;charset=utf-8' });
                    Backendless.Files.saveFile("manuals/" + modulo_id, $scope.newfile, file, true, new Backendless.Async(
                        function Success(res) {

                            TextEditform.hide();
                            displayData("text");
                        },
                        function Error(err) {
                            $scope.aadtextloder = false;
                            console.log('Error', err);
                        }
                    ));
                }
            }
            //remove text file//

        $scope.removeTextFile = function(text) {
            TextEditform.hide();
            newtextfile.hide();
            frmPhoto.hide();
            formvideo.hide();
            if ($scope.changelanguage == 'EN') {
                $scope.Title_dialog = "Delete File";
                $scope.message = "Are you sure want to delete this File?";
            } else {
                $scope.Title_dialog = "deste arquivo";
                $scope.message = "Confirma a exclusão deste arquivo?";
            }

            frmtext.show();
            $scope.deleteurl = text.url;

            $scope.delete = function() {
                frmtext.hide();
                $scope.deletetextloder = true;
                var deletefile = Backendless.Files.remove($scope.deleteurl);
                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + folderObjectid + "'";
                var folderData = Backendless.Persistence.of('manuals').find(dataQuery);
                var alltext = JSON.parse(folderData.data[0].data);

                function ismatch(element) {
                    return element["url"] == text.url;
                }
                var textData = alltext.find(ismatch);
                var index = alltext.indexOf(textData);
                if (index > -1) {
                    alltext.splice(index, 1);
                }
                var newdata = JSON.stringify(alltext);
                var data = ({
                    objectId: folderObjectid,
                    data: newdata
                });
                Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                    function Success(res) {

                        displayData("text");
                        $scope.deletetextloder = false;
                    },
                    function Error(err) {
                        $scope.deletetextloder = false;
                        console.log('Error', err);
                    }
                ));
            }
        }

        //Remove images//
        var frmtext = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/dialog.html',
            show: false,
            placement: 'top',
            backdrop: true,
            animation: 'am-slide-top'
        });
        $scope.delete_photo = function(photo) {
            TextEditform.hide();
            newtextfile.hide();
            frmPhoto.hide();
            formvideo.hide();
            if ($scope.changelanguage == 'EN') {
                $scope.Title_dialog = "Delete Images";
                $scope.message = "Are you sure want to delete this Images?";
            } else {
                $scope.Title_dialog = "deste imagem";
                $scope.message = "Confirma a exclusão deste imagem?";
            }

            $scope.DletePhotoUrl = photo.url;
            frmtext.show();
            $scope.delete = function() {
                frmtext.hide();

                $scope.deletepicloding = true;

                var deletePhotofile = Backendless.Files.remove($scope.DletePhotoUrl);

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + folderObjectid + "'";

                var folderData = Backendless.Persistence.of('manuals').find(dataQuery);
                var allphoto = JSON.parse(folderData.data[0].data);

                function ismatch(element) {
                    return element["url"] == photo.url;
                }

                var photoData = allphoto.find(ismatch);
                var index = allphoto.indexOf(photoData);
                if (index > -1) {
                    allphoto.splice(index, 1);
                }

                var newdata = JSON.stringify(allphoto);

                var data = ({
                    objectId: folderObjectid,
                    data: newdata
                });
                Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                    function Success(res) {

                        displayData("photo");
                        $scope.deletepicloding = false;
                    },
                    function Error(err) {
                        $scope.deletepicloding = false;
                        console.log('Error', err);
                    }

                ));

            }
        }

        //Video//

        $window.uploadDone = function(files) {
            $scope.vidfilter = false;
            $scope.vidtypeerror = " ";

            var name = files.files[0].name;
            $scope.filenm = true;
            $scope.filename = name;

        }

        $scope.uploadVideo = function() {
            if ($scope.changelanguage == 'EN')
                $scope.Mtitle = "ADD VIDEO";
            else
                $scope.Mtitle = "Adicionar video";

            formvideo.show();
        }

        $scope.addvideo = function(data) {

            $scope.data = data;

            var modeid = localStorage.getItem("manual");
            var dataQuery = new Backendless.DataQuery();
            dataQuery.condition = "objectId='" + modeid + "'";

            var result = Backendless.Persistence.of('modulos').find(dataQuery);

            var modulo_id = result.data[0].modulo_id;

            $scope.video_name = data.video.name;
            var fileName = $scope.video_name;

            $scope.newfile = fileName.substr(0, fileName.lastIndexOf('.'))

            var ext = fileName.substring(fileName.lastIndexOf('.'));

            if (ext == ".3gpp" || ext == ".mp4" || ext == ".mpeg" || ext == ".webm" || ext == ".mov" || ext == ".webm" || ext == ".flv" || ext == ".avi") {

                $scope.vidtypeerror = "";

                $scope.uplodervid = true;
                var file = new Blob([data.video]);
                try {

                    var pagesize = 100,
                        offset = 100;
                    var res = Backendless.Files.listing("manuals/" + modulo_id, true, pagesize, offset);

                    var j = 0;
                    for (var i = 0; i < res.data.length; i++) {
                        var list = res.data[i].name;

                        fileExtension = list.substr(list.lastIndexOf('.') + 1)

                        if (fileExtension == "3gpp" || fileExtension == "mp4" || fileExtension == "mpeg" || fileExtension == "webm" || fileExtension == "mov" || fileExtension == "webm" || fileExtension == "flv" || fileExtension == "avi") {
                            var filename = list.substr(0, list.lastIndexOf('.'));
                            if (filename.includes($scope.newfile)) {
                                j++;
                            }
                        }
                    }
                    if (j != 0) {
                        $scope.newfile = $scope.newfile + "_" + j + ext;
                        Backendless.Files.saveFile("manuals/" + modulo_id, $scope.newfile, file, true, new Backendless.Async(
                            function Success(res) {

                                var dataQuery = new Backendless.DataQuery();
                                dataQuery.condition = "objectId='" + folderObjectid + "'";
                                var folderData = Backendless.Persistence.of('manuals').find(dataQuery);

                                var newdata = JSON.parse(folderData.data[0].data);

                                var makeTimestamp = new Date().valueOf();

                                newdata.push({ "url": res, "name": $scope.newfile, "date": makeTimestamp });

                                var newdata = JSON.stringify(newdata);

                                var data = ({
                                    objectId: folderObjectid,
                                    data: newdata
                                });
                                Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                                    function Success(res) {

                                        displayData("video");
                                    },
                                    function Error(err) {
                                        $scope.uplodervid = false;
                                        console.log('Error', err);
                                    }
                                ));

                            },
                            function Error(err) {
                                $scope.uplodervid = false;
                                console.log('Error', err);
                            }
                        ));

                    } else {
                        $scope.newfile = $scope.newfile + ext;

                        Backendless.Files.saveFile("manuals/" + modulo_id, $scope.newfile, file, true, new Backendless.Async(
                            function Success(res) {

                                var dataQuery = new Backendless.DataQuery();
                                dataQuery.condition = "objectId='" + folderObjectid + "'";
                                var folderData = Backendless.Persistence.of('manuals').find(dataQuery);

                                var newdata = JSON.parse(folderData.data[0].data);

                                var makeTimestamp = new Date().valueOf();

                                newdata.push({ "url": res, "name": $scope.newfile, "date": makeTimestamp });

                                var newdata = JSON.stringify(newdata);

                                var data = ({
                                    objectId: folderObjectid,
                                    data: newdata
                                });
                                Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                                    function Success(res) {

                                        displayData("video");
                                    },
                                    function Error(err) {
                                        $scope.uplodervid = false;
                                        console.log('Error', err);
                                    }
                                ));

                            },
                            function Error(err) {
                                $scope.uplodervid = false;
                                console.log('Error', err);
                            }
                        ));
                    }

                } catch (e) {

                    Backendless.Files.upload(data.video, "manuals/" + modulo_id, true, new Backendless.Async(
                        function Success(res) {

                            var dataQuery = new Backendless.DataQuery();
                            dataQuery.condition = "objectId='" + folderObjectid + "'";
                            var folderData = Backendless.Persistence.of('manuals').find(dataQuery);
                            var newdata = JSON.parse(folderData.data[0].data);

                            var makeTimestamp = new Date().valueOf();

                            newdata.push({ "url": res.fileURL, "name": $scope.video_name, "date": makeTimestamp });

                            var newdata = JSON.stringify(newdata);

                            var data = ({
                                objectId: folderObjectid,
                                data: newdata
                            });
                            Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                                function Success(res) {

                                    displayData("video");
                                },
                                function Error(err) {
                                    $scope.uplodervid = false;
                                    console.log('Error', err);
                                }
                            ));

                        },

                        function Error(err) {
                            $scope.uplodervid = false;
                            console.log('err', err);
                        }
                    ));
                }

            } else {

                $scope.uplodervid = false;
                $scope.vidfilter = true;
                $scope.vidtypeerror = vidtypeerror($scope.changelanguage);

            }

        }

        //remove vedio //

        $scope.delete_video = function(video) {
            TextEditform.hide();
            newtextfile.hide();
            frmPhoto.hide();
            formvideo.hide();
            if ($scope.changelanguage == 'EN') {
                $scope.Title_dialog = "Delete Video";
                $scope.message = "Are you sure want to delete this Video?";
            } else {
                $scope.Title_dialog = "deste video";
                $scope.message = "Confirma a exclusão deste video?";
            }

            $scope.DleteVideoUrl = video.url;

            frmtext.show();
            $scope.delete = function() {
                frmtext.hide();
                $scope.deletevidloding = true;
                var deleteVideofile = Backendless.Files.remove($scope.DleteVideoUrl);

                var dataQuery = new Backendless.DataQuery();
                dataQuery.condition = "objectId='" + folderObjectid + "'";

                var folderData = Backendless.Persistence.of('manuals').find(dataQuery);
                var allphoto = JSON.parse(folderData.data[0].data);

                function ismatch(element) {
                    return element["url"] == video.url;
                }

                var photoData = allphoto.find(ismatch);
                var index = allphoto.indexOf(photoData);
                if (index > -1) {
                    allphoto.splice(index, 1);
                }

                var newdata = JSON.stringify(allphoto);

                var data = ({
                    objectId: folderObjectid,
                    data: newdata
                });
                Backendless.Persistence.of('manuals').save(data, new Backendless.Async(
                    function Success(res) {

                        displayData("video");
                        $scope.deletevidloding = false;
                    },
                    function Error(err) {
                        $scope.deletevidloding = false;
                        console.log('Error', err);
                    }

                ));

            }
        }

        // community_tips type Folder //

        var create_community_tip_from = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/form/create_community_tip.html',
            show: false,
            placement: 'left',
            backdrop: false,
            animation: 'am-slide-left'
        });

        //show  create new tips form //
        $scope.Add_New_Tips = function() {

                create_community_tip_from.show();

                if ($scope.changelanguage == 'EN')
                    $scope.Mtitle = "Add Tips";
                else
                    $scope.Mtitle = "Adicionar  Dicas da Comunidade ";
            }
            // add new tips//
        $scope.Save_New_Tips = function(tips_data) {
            $scope.addtip_loder = true;
            $scope.tipsdata = tips_data;

            $scope.manual_id = folderObjectid;

            data = ({
                author: new Backendless.Persistence.of(Backendless.User).save({
                    objectId: $scope.user_id,
                }),
                manual_id: $scope.manual_id,
                tip: tips_data,
            });

            Backendless.Persistence.of('community_tips').save(data, new Backendless.Async(
                function Success(res) {
                    console.log("res", res);
                    create_community_tip_from.hide();
                    displayData("community_tips");
                    $scope.addtip_loder = false;
                },
                function Error(err) {
                    console.log('err', err);
                    $scope.addtip_loder = false;
                }
            ));
        }

        // Delete community_tips//

        var Delete_tips_form = $aside({
            scope: $scope,
            templateUrl: 'assets/tpl/app/dialog.html',
            show: false,
            placement: 'top',
            backdrop: true,
            animation: 'am-slide-top'
        });
        $scope.delete_tips = function(item) {

            $scope.deletetips_id = item.objectId;
            TextEditform.hide();
            newtextfile.hide();
            frmPhoto.hide();
            formvideo.hide();
            create_community_tip_from.hide();
            if ($scope.changelanguage == 'PT-BR') {
                $scope.Title_dialog = "deste Dica";
                $scope.message = "Confirma a exclusão deste Dica?";
            } else {
                $scope.Title_dialog = "Delete Tips";
                $scope.message = "Are you sure want to delete this Tips?";
            }

            Delete_tips_form.show();
        }
        $scope.delete = function() {

            Delete_tips_form.hide();

            $scope.delete_tip_loding = true;

            var data = ({
                objectId: $scope.deletetips_id,
            });
            Backendless.Persistence.of('community_tips').remove(data, new Backendless.Async(
                function Success(res) {
                    console.log("tips successfully deleted", res);
                    displayData('community_tips');
                    $scope.delete_tip_loding = false;
                },
                function Error(err) {
                    console.log('Error', err);
                    $scope.delete_tip_loding = false;
                }
            ));

        }

        $scope.close_side = function() {
            TextEditform.hide();
            newtextfile.hide();
            frmPhoto.hide();
            formvideo.hide();
            create_community_tip_from.hide();
        }

    }

]);

app.controller('settingClt', ['$scope', '$window', '$aside', '$http', '$q', '$log', '$timeout',
    function($scope, $window, $aside, $http, $q, $log, $timeout) {

        $scope.$emit('Search-bar-show',
            false
        );

        $scope.changepassword = function() {
            var currentUser_email = $scope.admin_email;

            var dataQuery = new Backendless.DataQuery();
            dataQuery.condition = "email='" + currentUser_email + "'";
            var pagesize = 100;
            dataQuery.options = {
                pageSize: pagesize
            };

            var currentUser = Backendless.Persistence.of(Backendless.User).find(dataQuery);

            var conf_email = currentUser.data[0].email;
            var conf_objectId = currentUser.data[0].objectId;
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var oldpass = this.oldpassword;

            var newpass = this.newpassword;

            var confpass = this.confpassword;

            if (newpass.length >= 6 && confpass.length >= 6 && confpass === newpass) {

                this.ErrorOld = "";
                this.ErrorNew = "";
                this.ErrorConf = "";
                if (conf_email == oldpass) {

                    var user = new Backendless.User();
                    user.password = newpass;
                    user.objectId = conf_objectId;
                    Backendless.UserService.update(user, new Backendless.Async(
                        function Success(res) {
                            $window.location.href = "home.html#/";
                        },
                        function Error(res) {
                            console.log('error', res);
                        }));
                } else {

                    if ($scope.changelanguage == 'EN')
                        this.ErrorOld = "Please Check your Account Email";
                    else
                        this.ErrorOld = "Por favor verifique o E-mail de cadastro";
                }
            } else {
                if (oldpass.match(pattern)) {
                    this.ErrorOld = "";
                } else {

                    this.ErrorOld = EmailError($scope.changelanguage);

                }
                if (newpass.length < 6) {

                    if ($scope.changelanguage == 'EN')
                        this.ErrorNew = "Please enter at least 6 characters.";
                    else
                        this.ErrorNew = " Mínimo de seis caracteres";
                } else {
                    this.ErrorNew = "";
                }
                if (confpass.length < 6) {

                    if ($scope.changelanguage == 'EN')
                        this.ErrorConf = "Please enter at least 6 characters.";
                    else
                        this.ErrorConf = "  Mínimo de seis caracteres ";
                } else {
                    this.ErrorConf = "";
                }
                if (confpass != newpass) {
                    this.ErrorConf = CnfPasswordError($scope.changelanguage);
                } else {
                    this.ErrorConf = "";
                }
            }

        }

        $scope.EditCurrent_logedd_User = function() {

            var pic = this.pic;
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if ($scope.changelanguage == 'EN') {
                $scope.success_action = "ok";
                $scope.success_prof = "Your Profile Successfully set.";
            } else {
                $scope.success_action = "OK";
                $scope.success_prof = "Avatar atualizado com sucesso";
            }

            if (this.u_email.match(pattern)) {

                $scope.Email_Error = " ";

                var user = new Backendless.User();
                user.email = this.u_email;
                user.display_name = this.u_name;

                user.role = this.u_type;

                if (pic == undefined || fileName == pic.name) {
                    $scope.edituserloder = true;

                    user.profile_picture_url = $scope.u_pic;
                    user.objectId = this.user_id;
                    Backendless.UserService.update(user, new Backendless.Async(
                        function Success(res) {

                            $scope.filenameedit = " ";
                            var successform = $aside({
                                scope: $scope,
                                templateUrl: 'assets/tpl/app/success_dialog.html',
                                show: false,
                                placement: 'top',
                                backdrop: true,
                                animation: 'am-slide-top'
                            });

                            successform.$promise.then(function() {
                                successform.show();
                            })
                        },
                        function Error(error) {
                            console.log('error', error);
                            $scope.edituserloder = false;
                        }));
                } else {
                    var fileName = pic.name;

                    var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
                    if (ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "PNG" || ext == "png") {

                        $scope.imagtypeerror = "";

                        var callback = {};
                        callback.success = function(result) {
                            user.profile_picture_url = result.fileURL;
                            user.objectId = $scope.user_id;
                            Backendless.UserService.update(user, new Backendless.Async(
                                function Success(res) {

                                    var successform = $aside({
                                        scope: $scope,
                                        templateUrl: 'assets/tpl/app/success_dialog.html',
                                        show: false,
                                        placement: 'top',
                                        backdrop: true,
                                        animation: 'am-slide-top'
                                    });
                                    successform.$promise.then(function() {
                                        successform.show();
                                    })
                                    $scope.filenameedit = " ";
                                },
                                function Error(error) {
                                    console.log('error', error);
                                    $scope.edituserloder = false;

                                }));
                        }
                        callback.fault = function(result) {
                            console.log("error - " + result.message);
                            $scope.edituserloder = false;
                        }
                        Backendless.Files.upload(pic, "Admin_Profile_pic", true, callback);

                    } else {
                        $scope.imgfilter = true;
                        $scope.edituserloder = false;
                        $scope.imagtypeerror = imagtypeerror($scope.changelanguage);
                    }
                }

            } else {
                $scope.Email_Error = EmailError($scope.changelanguage);
            }
        }

    }
]);

app.filter('searchFor', function() {
    return function(arr, searchString) {
        if (!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(Modules) {
            if (Modules.name.toLowerCase().indexOf(searchString) !== -1) {
                result.push(Modules);
            }
        });
        return result;
    };
});