document.addEventListener("DOMContentLoaded", () => {
    // Parse URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username") || "xqc";

    // Create iframe dynamically
    const iframe = document.createElement("iframe");
    iframe.src = `https://player.kick.com/${username}?autoplay=true&muted=false`;
    iframe.height = "100%";
    iframe.width = "100%";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.allowFullscreen = true;

    // Append iframe to the left section
    document.getElementById("video-container").appendChild(iframe);
});
