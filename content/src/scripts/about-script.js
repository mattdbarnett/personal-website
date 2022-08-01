
age = document.getElementById("my-age");

setInterval(() => {
  let time = dayjs().diff(dayjs(974246400000), "year", true);
  age.innerText = time.toString().substring(0, 12);
}, 50);
