function calculateTip(event) {
    event.preventDefault();
      let bill = document.getElementById('bill').value;
      let ServiceQual = document.getElementById('ServiceQual').value;
      let numOFpeople = document.getElementById('people').value;
  
      if(bill == '' | ServiceQual == 0) {
          alert("Por Favor, preencha os Valores");
          return;
      }
      
      if(numOFpeople == "" | numOFpeople <=1 ) {
          numOFpeople= 1;
          document.getElementById ('each').style.display = "none";
      } else {
          document.getElementById('each').style.display  ="block";
      }
  
      let total = (bill * ServiceQual ) / numOFpeople;
      total = total.toFixed(2);
      document.getElementById('Tip').innerHTML = total;
        document.getElementById('TotalTips').style.display="block";
  }
  document.getElementById('TotalTips').style.display="none";
  document.getElementById('each').style.display="none";
  
  document.getElementById('tipsForm').addEventListener('submit',calculateTip);