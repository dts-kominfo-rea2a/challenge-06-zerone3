// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(
    file1,
    'utf8',
    (err, data1) => {
      if (err) {
        return err;
      } 
      fs.readFile(
        file2,
        'utf8',
        (err, data2) => {
          if (err) {
            return err;
          }
          fs.readFile(
            file3,
            'utf8',
            (err, data3) => {
              if (err) {
                return err;
              }
              let jsonFile1 = JSON.parse(data1);
              let jsonFile2 = JSON.parse(data2);
              let jsonFile3 = JSON.parse(data3);

              let messageJson1 = jsonFile1.message.split(" ");
              let messageJson2 = jsonFile2[0].message.split(" ");
              let messageJson3 = jsonFile3[0].data.message.split(" ");

              let arr1 = messageJson1.filter(el => el.length >= 2);
              let arr2 = messageJson2.filter(el => el.length >= 2);
              let arr3 = messageJson3.filter(el => el.length >= 2);

              let result = [arr1[1], arr2[1], arr3[1]]

              return fnCallback(null, result);
            }
          )
        }
      )
    }
  )
}
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
