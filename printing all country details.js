var request1=new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/all');
request1.send();
request1.onload= function print() {
    var countryData=JSON.parse(this.responseText);
    for (let country of countryData) {
       console.log(country.name) ;
       console.log(country.region) ;
       console.log(country.subregion) ;
       console.log(country.population) ;
      
    }
  
}