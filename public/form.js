

var element = document.getElementById("form");
element.addEventListener("submit", function(event) {
    event.preventDefault()
    // const form = document.forms.namedItem("fileinfo");

    const Data= new FormData(this)
    
    const formDataObj = {};
    Data.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj)
    axios.post("http://localhost:4444/api/v1/task",formDataObj).then((res)=>{
        console.log(res.data.data.doc)
        window.location.replace("/view");
    }).catch((err)=>{
        console.log(err)
        alert(err.response.data.message)
    })
    // fetch("http://localhost:4444/api/v1/task", {
    //     method: "POST",
    //     body: new FormData(this)
    //     }).then(function (response){
    //          return response.text()
    //     }).then(function (text){
    //         console.log(text)
    //    }).catch(function(error){
    //     console.log(error)
    //    })
    }
)