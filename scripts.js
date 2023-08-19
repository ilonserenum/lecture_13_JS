const cookiesBanner = document.getElementById("cookies-notification");

function hideCookiesBanner () {
    cookiesBanner.style.display = "none";
    localStorage.setItem("cookiesBannerAccepted", "true");
}

if (localStorage.getItem("cookiesBannerAccepted") === "true") {
    hideCookiesBanner();
} else {
    cookiesBanner.style.display = "block";
}