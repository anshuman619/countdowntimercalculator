/*

   1 day= 24 hrs
   1 hr = 60 mins
   60 mins= 3600 days;

*/

console.log("hello");
const enddate = "28 october 2023 4:18 PM";
document.getElementById("end-date").innerText = enddate;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(enddate);
  const now = new Date();
  const diff = (end - now) / 1000; // difference in seconds

  if(diff<0) return;

  //   convert into datys
  inputs[0].value = Math.floor(diff / 3600 / 24);

  //   convert inot hours
  inputs[1].value = Math.floor(diff / 3600) % 24;

  //   convert into minutes
  inputs[2].value = Math.floor(diff / 60) % 60;

  //   convert inot seconds
  inputs[3].value = Math.floor(diff) % 60;

  //    convert into days
}

setInterval(() => clock(), 1000);
