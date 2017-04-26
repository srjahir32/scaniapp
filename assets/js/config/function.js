function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getFileName() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function CheckEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(pattern)) {
        return false;
    } else {
        return true;
    }
}


function LoginEmailError() {
    return "Insira um e-mail válido.";
}

function LoginPasswordError() {
    return "Senha incorreta.";
}

function EmailError(language) {

    if (language == 'EN')
        return "Please enter valid email.";
    else
        return "Insira um e-mail válido.";
}

function PasswordError(language) {
    if (language == 'EN')
        return "Please enter correct password.";
    else
        return "Senha incorreta.";
}

function CnfPasswordError(language) {
    if (language == 'EN')
        return "Password is not match";
    else
        return "Senha não confere";
}


function adminpermisionMessage(language) {
    if (language == 'EN')
        return "New";
    else
        return "Novo";
}

function permisionMessage(language) {
    if (language == 'EN')
        return "you dont have a permision";
    else
        return "Você não possui a permissão necessária para executar esta ação";
}

function imagtypeerror(language) {
    if (language == 'EN')
        return "Upload .GIF, .JPG and .PNG images";
    else
        return "Formatos suportados: .gif, .jpg, .png";
}

function vidtypeerror(language) {
    if (language == 'EN')
        return "Upload .mp4, .webm and .avi Video";
    else
        return "Formatos suportados: mp4, .webm, .avi";
}

var consoleHolder = console;

function debug(bool) {
    if (!bool) {
        consoleHolder = console;
        console = {};
        console.log = function() {};
    } else
        console = consoleHolder;
}


//Service 

/*

app.service('manuals', function() {
    var productList = [];

    var addProduct = function(newObj) {
        productList.push(newObj);

    };

    var getProducts = function() {
        return productList;
        productList.length = 0;
    };

    return {
        addProduct: addProduct,
        getProducts: getProducts
    };
});

 //  manuals.addProduct(item);
            */
function debug(bool) {
    if (!bool) {
        consoleHolder = console;
        console = {};
        console.log = function() {};
    } else
        console = consoleHolder;
}