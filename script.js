document.getElementById('dreadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let damage = parseInt(document.getElementById('damage').value);
    let reproducibility = parseInt(document.getElementById('reproducibility').value);
    let exploitability = parseInt(document.getElementById('exploitability').value);
    let affectedUsers = parseInt(document.getElementById('affectedUsers').value);
    let discoverability = parseInt(document.getElementById('discoverability').value);
    
    let score = (damage + reproducibility + exploitability + affectedUsers + discoverability) / 5;
    
    document.getElementById('result').innerHTML = `<h3>Score: ${score}</h3>`;
});
