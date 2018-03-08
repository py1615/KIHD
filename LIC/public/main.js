/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function verifyLogin(form) {
    if (form.agentID.value === "" && form.password.value === "") {
        window.location.replace("main.html");
    } else {
        alert("Username or Password is Incorrect");
    }
}

function searchPage() {
    window.location.replace("main.html");
}

function policyRegistration() {
    window.location.replace("policyRegistration.html");
}

function userRegistration() {
    window.location.replace("userRegistration.html");
}

function logout() {
    window.location.replace("logoutConfirm.html");
}

function searchThis(form) {

}

function registerUser(form) {
    alert("Password must be at least 8 characters long");
}

function registerPolicy(form) {
    alert("Invalid SSN");
}

function openPolicy() {
    window.location.replace("policy.html");
}

function openPaymentHistory() {
    window.location.replace("paymentHistory.html");
}
