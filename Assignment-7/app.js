const text = document.getElementById("search");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

getData = (val)=> {
    const apiKey = "03ee0fbd7af86eff95fd95fe537fea71" ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}`;
    fetch(url)
    .then(data =>  {
        return data.json();
    })
    .then(apiData => {
        const date1 = new Date();
        var weekday = new Array(7);
        weekday = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday", "Saturday"];
        var month = new Array();
        month = ["January","February","March","April","May", "June","July", "August","September", "October","November","December"];
        city.children[0].innerText = val +", " + apiData.sys.country; 
        city.children[1].innerText = weekday[date1.getDay()] + " " + date1.getDate() + " "+ month[date1.getMonth()] + " " +
        date1.getFullYear(); 
        temp.children[0].innerHTML = apiData.main.temp + " &degC";
        temp.children[1].innerHTML = apiData.main.temp_min + " &degC / " + apiData.main.temp_max + " &degC";
        const des = apiData.weather[0].description
        desc.children[0].innerText = des; 

        // if(des === "haze")
        // {
        //     document.body.style.backgroundImage = "url('./rain.jpeg')";
        // }
        
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })
}
text.addEventListener('keyup',(e)=>{
    if(e.which === 13){
        const val = text.value;
        getData(val);
    }
    e.preventDefault();
})

