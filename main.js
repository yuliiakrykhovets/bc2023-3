const fs = require('fs');

fs.readFile('data.json', (err, data) => {
  if (err === null) {
    const jsonData = JSON.parse(data);
    
    let maxRate = -Infinity;

    jsonData.forEach((item) => {
      const rate = item.rate;
      if (rate > maxRate) {
        maxRate = rate;
      }
    });

    const outputData = `Максимальний курс:${maxRate}`;

    fs.writeFile('output.txt', outputData, (err) => {
      if (err === null) {
        console.log(outputData);
      } else {
        console.log(err);
      }
    });
  }
});
