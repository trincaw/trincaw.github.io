/**
 * Cloudflare Web Analytics loader.
 *
 * The beacon reads its configuration from the `data-cf-beacon` attribute on
 * its own <script> tag, so the tag is created here rather than imported.
 */
(() => {
    "use strict";

    const TOKEN = "f05590b303ca4c29a135bcfaf48c1677";
    const BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

    if (document.querySelector("script[data-cf-beacon]")) return;

    const beacon = document.createElement("script");
    beacon.type = "module";
    beacon.src = BEACON_SRC;
    beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: TOKEN }));

    document.head.appendChild(beacon);
})();
