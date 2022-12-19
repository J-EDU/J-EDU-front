var axios = require('axios');
var data = JSON.stringify({
  "commentID": "",
  "text": ""
});

var config = {
  method: 'post',
  url: 'http://localhost:5000/root/commentReport/addcommentreport',
  headers: { 
    'Authorization':{  Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'}
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
