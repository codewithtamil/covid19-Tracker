const URL = 'https://api.covid19api.com/';

const submit = document.getElementById('submit');
const select = document.getElementById('select');
let data = document.querySelectorAll('.data-value');
let container =  [];
submit.addEventListener('click', fetchData);

function fetchData() {
    
  fetch(`${URL}/summary`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.Global);
      if(select.value === 'Global'){
        container = data.Global;
        return;
      }else{
        // Fetch country based search 
        data.Countries.map((country) => {
            if (select.value === country.Country) {
                container = country;
                return;    
              }
        });
      }
    })
    .then(() => {
            // Change the title 
            $('#stat').html(select.value);

            // change the span value 
            $('#N-rec').html(container.NewRecovered);
            $('#T-rec').html(container.TotalRecovered);
            $('#N-conf').html(container.NewConfirmed);
            $('#T-conf').html(container.TotalConfirmed);
            $('#N-death').html(container.NewDeaths);
            $('#T-death').html(container.TotalRecovered);
        console.log(container);
    })
    .catch((err) => console.log(err));
}

// Fetch global data 
const initFetch = () => fetchData('Global');
 