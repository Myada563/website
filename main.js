window.onscroll = function() {
    showScrollTopButton();
};

function showScrollTopButton() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// دالة العودة للأعلى
function scrollToTop() {
    document.body.scrollTop = 0; // للمتصفحات القديمة
    document.documentElement.scrollTop = 0; // لـ Chrome, Firefox, IE و Opera
}

