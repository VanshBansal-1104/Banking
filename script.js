let balance = 0;

    function handleTransaction(type) {
      const amountInput = document.getElementById('amount');
      let amount = parseFloat(amountInput.value);

      if (isNaN(amount) || amount <= 0) {
        alert("⚠️ Please enter a valid amount greater than 0.");
        return;
      }

      if (type === 'withdraw') {
        if (amount > balance) {
          alert("❌ Insufficient funds!");
          return;
        }
        balance -= amount;
      } else if (type === 'deposit') {
        balance += amount;
      }

      document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
      amountInput.value = "";
    }