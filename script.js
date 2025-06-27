function tampilkanGrafik(nomor) {
  const container = document.getElementById('grafikContainer');
  const title = document.getElementById('grafikNama');
  container.innerHTML = '';
  title.innerHTML = '';

  // Hapus highlight dari semua tab
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Tambah highlight ke tab aktif
  document.querySelector(`.tab:nth-child(${nomor})`).classList.add('active');

  let images = [];
  let nama = '';
  let judul = [];

  if (nomor === 1) {
    nama = 'Grafik Bar Chart';
    images = ['nadya-barchart.png', 'fatikah_grafik_batang.jpg', 'zhafira-grafik_batang.png'];
    judul = ['Nadya - Grafik Bar Chart', 'Fatikah - Grafik Bar Chart', 'Zhafira - Grafik Bar Chart'];
  } else if (nomor === 2) {
    nama = 'Grafik Pie Chart';
    images = ['nadya-piechart.png', 'fatikah_piechart.jpg', 'zhafira-piechart.png'];
    judul = ['Nadya - Pie Chart', 'Fatikah - Pie Chart', 'Zhafira - Pie Chart'];
  } else if (nomor === 3) {
    nama = 'Grafik Line';
    images = ['nadya-linechart.png', 'fatikah_grafik_line.jpg', 'zhafira-linechart.png'];
    judul = ['Nadya - Grafik Line', 'Fatikah - Grafik Line', 'Zhafira - Grafik Line'];
  }

  title.innerText = nama;

  images.forEach((src, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'grafik-item';

    const label = document.createElement('div');
    label.className = 'grafik-title';
    label.innerText = judul[index];

    const img = document.createElement('img');
    img.src = src;
    img.alt = judul[index];

    wrapper.appendChild(label);
    wrapper.appendChild(img);
    container.appendChild(wrapper);
  });
}

window.onload = () => tampilkanGrafik(1);
