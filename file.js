const fs = require('graceful-fs');

for(let i = 1 ;i <= 8888;i++){
    console.log(i)
    fs.readFile(`./json/${i}.json`, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        fs.appendFile("./test.json", data + ",", function(err) {
            if(err) {
                return console.log(err);
            }
        });
      })
    
   
}