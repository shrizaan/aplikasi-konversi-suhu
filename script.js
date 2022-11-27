let btnKonversi = document.getElementById('btn-konversi');
let elem = document.getElementById('result');

btnKonversi.addEventListener('click', konversi);

function konversi() {
  let nilaiAwal = parseFloat(document.getElementById('nilaiAwal').value);
  if (isNaN(nilaiAwal)) {
    elem.innerHTML = `<div class="card shadow-sm">
                        <div class="card-body"><h1>Hasil Koversi : </h1>
                            <ul class="list-group">
                                <li class="list-group-item">Masukkan nilai terlebih daulu</li>
                            </ul>
                        </div>
                    </div>`;
    return;
  }
  let skalaSuhu = document.getElementById('skala').value;
  console.log(nilaiAwal, skalaSuhu);

  let hasil = 0;

  switch (skalaSuhu) {
    case 'celcius':
      hasil = celcius(nilaiAwal);
      elem.innerHTML = `<div class="card shadow-sm">
                                <div class="card-body"><h1>Hasil Koversi : </h1>
                                    <ul class="list-group">
                                        <li class="list-group-item">${nilaiAwal} ⁰C</li>
                                        <li class="list-group-item">${hasil.fahrenheit} ⁰F</li>
                                        <li class="list-group-item">${hasil.reamur} ⁰R</li>
                                        <li class="list-group-item">${hasil.kelvin} K</li>
                                    </ul>
                                </div>
                            </div>`;
      break;
    case 'fahrenheit':
      hasil = fahrenheit(nilaiAwal);
      elem.innerHTML = `<div class="card shadow-sm">
                                <div class="card-body"><h1>Hasil Koversi : </h1>
                                    <ul class="list-group">
                                        <li class="list-group-item">${nilaiAwal} ⁰F</li>
                                        <li class="list-group-item">${hasil.celcius} ⁰C</li>
                                        <li class="list-group-item">${hasil.reamur} ⁰R</li>
                                        <li class="list-group-item">${hasil.kelvin} K</li>
                                    </ul>
                                </div>
                            </div>`;
      break;
    case 'reamur':
      hasil = reamur(nilaiAwal);
      elem.innerHTML = `<div class="card shadow-sm">
                                <div class="card-body"><h1>Hasil Koversi : </h1>
                                    <ul class="list-group">
                                        <li class="list-group-item">${nilaiAwal} ⁰R</li>
                                        <li class="list-group-item">${hasil.celcius} ⁰C</li>
                                        <li class="list-group-item">${hasil.fahrenheit} ⁰F</li>
                                        <li class="list-group-item">${hasil.kelvin} K</li>
                                    </ul>
                                </div>
                            </div>`;
      break;
    case 'kelvin':
      hasil = kelvin(nilaiAwal);
      elem.innerHTML = `<div class="card shadow-sm">
                                <div class="card-body"><h1>Hasil Koversi : </h1>
                                    <ul class="list-group">
                                        <li class="list-group-item">${nilaiAwal} K</li>
                                        <li class="list-group-item">${hasil.celcius} ⁰C</li>
                                        <li class="list-group-item">${hasil.fahrenheit} ⁰F</li>
                                        <li class="list-group-item">${hasil.reamur} ⁰R</li>
                                    </ul>
                                </div>
                            </div>`;
      break;
    default:
      elem.innerHTML = `<p>Maaf, skala suhu tidak ditemukan</p>`;
      break;
  }
}

function celcius(nilai) {
  let reamur = formatDesimal((nilai * 4) / 5);
  let fahrenheit = formatDesimal((nilai * 9) / 5 + 32);
  let kelvin = formatDesimal(nilai + 273.15);
  return { reamur, fahrenheit, kelvin };
}

function fahrenheit(nilai) {
  let celcius = formatDesimal(((nilai - 32) * 5) / 9);
  let reamur = formatDesimal(((nilai - 32) * 4) / 9);
  let kelvin = formatDesimal(((nilai - 32) * 5) / 9 + 273.15);
  return { celcius, reamur, kelvin };
}

function reamur(nilai) {
  let celcius = formatDesimal((nilai * 5) / 4);
  let fahrenheit = formatDesimal((nilai * 9) / 4 + 32);
  let kelvin = formatDesimal((nilai * 5) / 4 + 273.15);
  return { celcius, fahrenheit, kelvin };
}

function kelvin(nilai) {
  let celcius = formatDesimal(nilai - 273.15);
  let fahrenheit = formatDesimal(((nilai - 273.15) * 9) / 5 + 32);
  let reamur = formatDesimal(((nilai - 273.15) * 4) / 5);
  return { celcius, fahrenheit, reamur };
}

function formatDesimal(nilai) {
  return nilai.toFixed(2);
}
