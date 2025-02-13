setInterval(() => {
    fetch(`https://www.youtube.com/channel/UC7GOzVmO24_B8M0izj2-EsQ/live`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.url;
        })
        .then(url => {
            if (url.includes("watch?v=")) {
                document.getElementById("videoFrame").src = url.replace("watch?v=", "embed/");
            } else {
                document.getElementById("videoFrame").src = "https://www.youtube.com/embed/W78hJ9XDcLc?si=VTwuWfiyEoQFTxf6";
            }
        })
        .catch(error => {
            console.error("Error fetching live stream URL:", error);
        });
}, 90000); // Check every 60 seconds