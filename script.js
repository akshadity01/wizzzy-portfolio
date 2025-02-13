console.log("hello")


setInterval(() => {
    fetch(`https://www.youtube.com/channel/UC7GOzVmO24_B8M0izj2-EsQ/live`)
    .then(response => {
        if (response.url.includes("watch?v=")) {
            document.getElementById("videoFrame").src = response.url.replace("watch?v=", "embed/");
        } else {
            document.getElementById("videoFrame").src = "https://www.youtube.com/embed/W78hJ9XDcLc?si=VTwuWfiyEoQFTxf6";
        }
    });
}, 60000); // Check every 60 seconds 