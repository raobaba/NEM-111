const fs = require('fs');


const logger = (req, res, next) => {
      let arr1 = [req.method , req.url]
      let newArr = arr1.join("-") + "\n"
      fs.appendFileSync("./logs.txt" , newArr,  {encoding:"utf-8"})
      next();
}

module.exports = logger;

