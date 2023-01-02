export function findAverage(array, y, x) {
    // Create an empty object to store the distinct values and their corresponding averages
    const averages = {};
  
    // Loop through the array of objects
    for (const obj of array) {
      // Check if the value of the key you want to group by already exists in the object
      if (!averages[obj[x]]) {
        // If it does not, add it as a new property to the object and set its value to the average of the key you want to find the average of
        averages[obj[x]] = {
          count: 1,
          sum: obj[y]
        };
      } else {
        // If it does exist, update the count and sum properties with the new values
        averages[obj[x]].count++;
        averages[obj[x]].sum += obj[y];
      }
    }
    // Calculate the average for each distinct value of the key you are grouping by
    for (const key in averages) {
      averages[key] = averages[key].sum / averages[key].count;
    }
  
    // Return the object with the distinct values and their corresponding averages
    return averages;
  }