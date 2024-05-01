function calculatePivotIndex() {
    const inputNums = document.getElementById("nums").value;
    const nums = inputNums.split(",").map((num) => parseInt(num.trim()));
  
    let totalSum = 0;
    for (const num of nums) {
      totalSum += num;
    }
  
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
      const rightSum = totalSum - leftSum - nums[i];
      if (leftSum === rightSum) {
        document.getElementById(
          "result"
        ).textContent = `Pivot index found at index ${i}`;
        return;
      }
      leftSum += nums[i];
    }
  
    document.getElementById("result").textContent = "No pivot index found.";
  }