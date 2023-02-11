function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textInput = JSON.parse(document.querySelector("div#inputs textarea").value);
      let restaurantOutput = document.getElementById("bestRestaurant");
      let workersOutput = document.getElementById("workers");

      let result = [];

      for (const line of textInput) {
         let restaurantInfo = line.split(" - ");
         let restaurantName = restaurantInfo[0];
         let workersWithSalaries = restaurantInfo[1].split(", ");

         if (!result.find(r => r.name === restaurantName)) {
            result.push({
               name: restaurantName,
               averageSalary: 0,
               bestSalary: 0,
               sumOfSalaries: 0,
               workers: [],
            });
         }

         let currRestaurant = result.find(r => r.name === restaurantName);

         for (const worker of workersWithSalaries) {
            let [name, salary] = worker.split(" ");
            salary = Number(salary);

            currRestaurant.workers.push({ name, salary });
            currRestaurant.sumOfSalaries += salary;

            if (Number(currRestaurant.bestSalary) < salary) {
               currRestaurant.bestSalary = salary;
            }
         }

         currRestaurant.averageSalary = currRestaurant.sumOfSalaries / currRestaurant.workers.length;
      }

      let bestRestaurant = result.sort((a, b) => b.averageSalary - a.averageSalary)[0];
      let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      let bestWorkers = "";
      sortedWorkers.forEach(w => bestWorkers += `Name: ${w.name} With Salary: ${w.salary} `)

      restaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      workersOutput.textContent = bestWorkers;
   }
}