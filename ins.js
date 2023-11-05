const c = document.querySelector(".data-container");
function generatebars(num = 10) {
  for (let i = 0; i < num; i += 1) {
    const v = Math.floor(Math.random() * 50) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${v * 4}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar__id");
    barLabel.innerHTML = v;
    bar.appendChild(barLabel);
    c.appendChild(bar);
  }
}
async function InsertionSort(delay = 400) {
  let bars = document.querySelectorAll(".bar");
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;
    var k = parseInt(bars[i].childNodes[0].innerHTML);
    var height = bars[i].style.height;
    var barval = document.getElementById("ele");
    barval.innerHTML = `<h3>Selected element: ${k}</h3>`;
    bars[i].style.backgroundColor = "darkgreen";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 400)
    );
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > k) {
      bars[j].style.backgroundColor = "darkgreen";
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      j = j - 1;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 400)
      );
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = k;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 400)
    );
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  barval.innerHTML = "<h3>Sorted!!!</h3>";
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
}
generatebars();
function generate() {
  window.location.reload();
}
function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#ff0000";
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#ff0000";
}
