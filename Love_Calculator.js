window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if(yourName != "" && crushName != ""){
        let percentage = Math.floor(Math.random() * 101); //0.9999999 * 101 -> 0 - 100.999999
        if(percentage > 0 && percentage <= 10)
        {
            document.getElementById("result-message").innerText = yourName + " Beta tumse na ho paye ga " + crushName + " Wo kisi aur ki hain.😢";
            document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        }
        if(percentage > 10 && percentage <= 30)
        {
            document.getElementById("result-message").innerText = yourName + " PADDHAI KARO IAS BANO DESH SAMBHALO 👋";
            document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        }

        if(percentage > 30 && percentage <= 50)
        {
            document.getElementById("result-message").innerText = yourName + " Jara Chance hain " + crushName + " Ke satth Lekin Rehende paddhai kar 📚" ;
            document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        }

        if(percentage > 50 && percentage <= 80)
        {
            document.getElementById("result-message").innerText = yourName + " BAAP 👴 KO PATTA " + crushName + " Wo patta gayi hain." ;
            document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        }

        if(percentage > 90 && percentage <= 100)
        {
            document.getElementById("result-message").innerText = yourName + " Aap Ki jeevan satthi 💑 " + crushName + " hain. 👰" ;
            document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        }
        // document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of Love:";

    }
}