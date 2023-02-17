'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${country}
//     `
//   );
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal');
// getCountryData('usa');

//CallBack Hell

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);
    // Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('portugal');

//Promises and Fetch API
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    //to handle error add second call back which will be called when the promise was rejected
    .then(response => {
      response.json(), err => alert(err);
    })
    .then(function (data) {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => renderCountry(data, 'neighbour'));
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
});

//error handling using catch, finally,error handling manually
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Country not found ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData2 = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    //to handle error add second call back which will be called when the promise was rejected
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => renderError(`Something went wrong ${err.message}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
});

//coding challenge 1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem withgeocoding)`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`Youare in ${data.city}, ${data.country}`);
    })
    .catch(err => console.log(err));
};
whereAmI(52.5081, 13.381);

//Event Loop in practice
console.log('Test Start');
setTimeout(() => console.log('0 sec Timeer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
console.log('Test end');

//Building a Promise
const lotteryPromis = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win');
    } else {
      reject(new Error('You lost'));
    }
  }, 2000);
});
lotteryPromis.then(res => console.log(res)).catch(err => console.log(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('I wated 2 sec');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

//Promisifying the Geolocation API
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);
console.log('Getting geolocation');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

//Coding challenge 2
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));

//Consuming Promises with Async/Awaits
const getPositionAsync = async function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const wherAmI = async function (country) {
  try {
    const pos = await getPositionAsync();
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    const data = await res.json();
    console.log(res);
    renderCountry(data[0]);
  } catch (e) {
    console.error(e);
  }
};
whereAmI('portugal');
console.log('FIRST');

//TRY AND Catch
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}

//Running promises in parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all(
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`)
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');

//coding challenge 3
const createImageAsync = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
const loadAndPause = async function () {
  try {
    let img = await createImageAsync('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    img = await createImageAsync('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    cosnole.log(err);
  }
};
