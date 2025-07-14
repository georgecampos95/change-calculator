document.addEventListener("DOMContentLoaded", function () {
  //this waits for the whole page to load
  console.log("working?"); 

  document.getElementById("calculate-change").addEventListener("click", function () {
    // get values from inputs (converted to numbers)
    const amountDue = Number(document.getElementById("amount-due").value);
    const amountReceived = Number(document.getElementById("amount-received").value);
    
    const change = Math.round((amountReceived - amountDue) * 100);  // in cents

    console.log("Change (in cents):", change); 

    // if they didn't type numbers or customer didn't give enough
    if (isNaN(change) || change < 0) {
      alert("Invalid input or not enough cash received.");
      return; // stop everything
    }

    let remaining = change;
    const dollars = Math.floor(remaining / 100);
    remaining %= 100;
    const quarters = Math.floor(remaining / 25);
    remaining %= 25;
    const dimes = Math.floor(remaining / 10);
    remaining %= 10;
    const nickels = Math.floor(remaining / 5);
    remaining %= 5;
    const pennies = remaining;

    // update the output fields with calculated values
    document.getElementById("dollars-output").textContent = dollars;
    document.getElementById("quarters-output").textContent = quarters;
    document.getElementById("dimes-output").textContent = dimes;
    document.getElementById("nickels-output").textContent = nickels;
    document.getElementById("pennies-output").textContent = pennies;
  });
});