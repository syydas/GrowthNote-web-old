let inputCorrect = false;

function onSubmitClick() {
    let usernameInput = document.getElementsByClassName("username-input")[0].value;
    let passwordInput = document.getElementsByClassName("password-input")[0].value;
    validateUserCredential(usernameInput, passwordInput);
}

function validateUserCredential(username, password) {
    console.log(username);
    console.log(password);
    let getAJAXJsonOption = {
        url: 'http://localhost:8080/api/users?name=' + username + '&password=' + password,
        method: 'GET',
        success: function (responseText) {
            console.log(responseText);
            inputCorrect = isCorrect(responseText);
        },
        fail: function (error) {
            console.log('get data error');
        }
    };
    ajaxJsonHandle(getAJAXJsonOption);
}

function isCorrect(userInfo) {
    return null != userInfo.id;
}