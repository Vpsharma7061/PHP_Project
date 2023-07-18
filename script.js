
const form = document.forms['form'],
statusTxt = form.querySelector(".button-area span");
console.log(form);
form.onsubmit = (e)=>{
    e.preventDefault(); // preventing form from submitting
    console.log(e.target);
    statusTxt.style.color = "red";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); // creating new xml object
    xhr.open("POST","message.php",true); // sending post request to message.php file
    xhr.onload = ()=>{
        // console.log(xhr.readyState===4 && xhr.status===200);
        if(xhr.readyState===4 && xhr.status===200){
            console.log(xhr);
            let response = xhr.response;
            if(response.indexOf("Enter a valid email address") || response.indexOf("sorry,failed to send your message")){
                statusTxt.style.color = "red";
            }
            else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                },3000);
            }
            statusTxt.innerText= response;
        }
    }

    let formData = new URLSearchParams(new FormData(e.target));
    console.log(formData)


    xhr.send(formData);
};