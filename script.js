
const prvkyDedinky = [
    { typ: 'building', farba: 'gray', velkost: '50px' },
    { typ: 'car-side', farba: 'red', velkost: '20px' },
    { typ: 'home', farba: '#000000', velkost: '30px' },
    { typ: 'building', farba: 'yellow', velkost: '80px' },
    { typ: 'tree', farba: 'green', velkost: '40px' },
    { typ: 'tree', farba: 'green', velkost: '60px' },
    { typ: 'tree', farba: 'green', velkost: '15px' },
    { typ: 'home', farba: 'brown', velkost: '25px' },
    { typ: 'home', farba: '#88cfe5', velkost: '35px' },
  ];

  function vytvoritPrvokDedinky({ typ, farba, velkost }) {
    const ikona = document.createElement('i');
    ikona.className = `fas fa-${typ} village-item`;
    ikona.style.color = farba;
    ikona.style.fontSize = velkost;
    return ikona;
  }

  function vykreslitDedinku() {
    const dedinkaElement = document.getElementById('dedina');

    prvkyDedinky.forEach(prvok => {
      const prvokDedinky = vytvoritPrvokDedinky(prvok);
      dedinkaElement.appendChild(prvokDedinky);
    });
  }

  vykreslitDedinku();