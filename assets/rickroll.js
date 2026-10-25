(function () {
    const REDIRECT_URL =
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUHcmlrcm9sbKAHAQ%3D%3D";

    const THRESHOLD = 160;
    let hitCount = 0;
    let redirected = false;

    function redirect() {
        if (redirected) return;
        redirected = true;
        window.location.href = REDIRECT_URL;
    }

    /* ---------- WINDOW SIZE DETECTION ---------- */
    function detectByWindowSize() {
        return (
            Math.abs(window.outerWidth - window.innerWidth) > THRESHOLD ||
            Math.abs(window.outerHeight - window.innerHeight) > THRESHOLD
        );
    }

    /* ---------- KEY DETECTION (F12 / CTRL+SHIFT+I/J/C) ---------- */
    window.addEventListener("keydown", function (e) {
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
        ) {
            redirect();
        }
    });

    /* ---------- CHECK LOOP ---------- */
    setInterval(() => {
        if (detectByWindowSize()) {
            hitCount++;
            if (hitCount >= 2) {
                redirect();
            }
        } else {
            hitCount = 0;
        }
    }, 500);
})();
