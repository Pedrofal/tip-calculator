function calculateTip(event) {
    event.preventDefaut(); 
    let totalBill = document.getElementById('totalBill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let splitBill = document.getElementById('splitBill').value;

    if(totalBill == '' | serviceQuality == 0){
        alert("Por favor, preencha os campos")
        return;
    } 
    
    if(splitBill = "" | splitBill <= 1){
        splitBill = 1;
        document.getElementById('each').style.display = 'none'; 
    } else {
        document.getElementById('each').style.display = 'block'; 
    }

    let total = (totalBill * serviceQuality) / splitBill
    total = toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);