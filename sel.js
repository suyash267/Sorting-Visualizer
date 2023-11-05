const c = document.querySelector(".data-container");
function generatebars(num = 10) {
  for (let i = 0; i < num; i += 1) {
    const v = Math.floor(Math.random() * 50) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${v * 4}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = v;
    bar.appendChild(barLabel);
    c.appendChild(bar);
  }
}
async function SelectionSort(delay = 1000) {
  let bars = document.querySelectorAll(".bar");
  var m_i = 0;
  for (var i = 0; i < bars.length; i += 1) {
    m_i = i;
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 400)
      );
      var x = parseInt(bars[j].childNodes[0].innerHTML);
      var y = parseInt(bars[m_i].childNodes[0].innerHTML);
      if (x < y) {
        if (m_i !== i) {
          bars[m_i].style.backgroundColor = " rgb(24, 190, 255)";
        }
        m_i = j;
      } else {
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }
    var temp1 = bars[m_i].style.height;
    var temp2 = bars[m_i].childNodes[0].innerText;
    bars[m_i].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[m_i].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 400)
    );
    bars[m_i].style.backgroundColor = " rgb(24, 190, 255)";
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#dd7717";
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#dd7717";
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
