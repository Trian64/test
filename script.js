window.onload = function() {
    fetch('QRScout_config (1).json')
        .then(response => response.json())
        .then(data => {
            let output = "<ul>";
            data.forEach(item => {
                output += `<li>${item.name} - ${item.value}</li>`; // Adjust this based on the structure of your JSON
            });
            output += "</ul>";
            document.getElementById('data-container').innerHTML = output;
        })
        .catch(error => console.error('Error fetching JSON:', error));
