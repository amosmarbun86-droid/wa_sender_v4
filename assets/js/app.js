window.checkAuth = function () {

    const isLogin = localStorage.getItem("login");

    if (isLogin === "true") {

        document.getElementById("loginPage")
            .classList.add("hidden-section");

        document.getElementById("mainDashboard")
            .classList.remove("hidden-section");

        if (typeof renderKontak === "function") {
            renderKontak();
        }

    } else {

        document.getElementById("loginPage")
            .classList.remove("hidden-section");

        document.getElementById("mainDashboard")
            .classList.add("hidden-section");
    }
}

window.handleLogin = function () {

    const u = document.getElementById("username")
        .value.trim();

    const p = document.getElementById("password")
        .value.trim();

    if (u === "admin" && p === "101312") {

        localStorage.setItem("login", "true");

        checkAuth();

    } else {

        alert("Akses Ditolak! Periksa kembali kredensial Anda.");
    }
}

window.handleLogout = function () {

    localStorage.removeItem("login");

    checkAuth();
}
