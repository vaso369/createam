
$(document).ready(function(){
$("#coverImage").hide().delay( 250 ).fadeIn( 2500 );
$("#logo").hide().delay( 750 ).fadeIn( 2500 );
$("#sideMenu").hide();
$("#menu").hide().delay( 1500 ).fadeIn( 2500 ).click(function(){
    $("#sideMenu").fadeIn(2000);
    $("#menu2").fadeIn(2000);
});
$("#sideMenu #prviLink").hide();
$("#sideMenu #prviLink").click(function(){
  
    $("#drugiSadrzaj").fadeOut(1000);
    $("#treciSadrzaj").fadeOut(1000);
    $("#cetvSadrzaj").fadeOut(1000);
});
$("#sideMenu #drugiLink").click(function(){
     $("#prviSadrzaj").fadeOut(250); 
    $("#treciSadrzaj").fadeOut(250);
    $("#cetvSadrzaj").fadeOut(250);
    $("#drugiSadrzaj").fadeIn(500).animate({marginLeft:"150px"},1000);
    $("#sideMenu #prviLink").fadeIn(2000);
    
});
    $("#sideMenu #treciLink").click(function(){
     $("#prviSadrzaj").fadeOut(250); 
     $("#drugiSadrzaj").fadeOut(250); 
    $("#cetvSadrzaj").fadeOut(250);
    $("#treciSadrzaj").fadeIn(500).animate({marginLeft:"150px"},1000);  
    $("#sideMenu #prviLink").fadeIn(2000);
});
    $("#sideMenu #cetvLink").click(function(){
     $("#prviSadrzaj").fadeOut(250); 
     $("#drugiSadrzaj").fadeOut(250); 
     $("#treciSadrzaj").fadeOut(250);
    $("#cetvSadrzaj").fadeIn(500).animate({marginLeft:"150px"},1000);   
    $("#sideMenu #prviLink").fadeIn(2000);
});
    setTimeout(function(){
        $("#loading").fadeOut();
    },3000);
});

particlesJS.load('sideMenu', 'particles.json',
        function(){
            console.log('particles.json loaded...')
 });

window.onload = function () {
    document.getElementById("btnPosalji").addEventListener('click', provera);
    popuniGrad();
    popuniProject();
}
function provera() {
    var nameElement = document.querySelector("#tbIme");
    var vrednostNameElement=nameElement.value;
    var email = document.querySelector("#tbEmail");
    var reName = /^[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]+)+$/;
    var reEmail=/^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,4})+$/;
    if(!reName.test(vrednostNameElement)){
        var tdTag = nameElement.parentElement;
    var trTag = tdTag.parentElement;
    var trTagNevidljiv = trTag.nextElementSibling;
         trTagNevidljiv.classList.remove('nevidljiv');
    }
    else {
         trTagNevidljiv.classList.add('nevidljiv');
    }
    if(!email.test(vrednostEmail)){
    var tdTag = email.parentElement;
    var trTag = tdTag.parentElement;
    var trTagNevidljiv = trTag.nextElementSibling;
         trTagNevidljiv.classList.remove('nevidljiv');
    }
    else {
         trTagNevidljiv.classList.add('nevidljiv');
    }

    proveraProject();
    proveraDdlGrad();
}
function popuniProject() {
    var project, ispis;

	project = ["Static website up 5 pages", "Static website up 10 pages", "Online store","Applications"];

	ispis = "";

	for(var i = 0; i < project.length; i++){

		ispis += "<input type='checkbox' name='chbProject' value='" + project[i] + "'>" + project[i] + "<br/>";

	}
	document.getElementById("tdTagDyn").innerHTML = ispis;
}
function proveraProject() {
    var pozCh = document.getElementsByName('chbProject');
    var nizch = [];
    var greske=[];
    var okay=[];
    for (var i = 0; i < pozCh.length; i++) {
        if (pozCh[i].checked) {
            nizch.push(pozCh[i].value);
        }
    }
    var tdTag = pozCh[0].parentElement;
    var trTag = tdTag.parentElement;
    var trTagNevidljiv = trTag.nextElementSibling;
    
    if (nizch.length === 0) {
        trTagNevidljiv.classList.remove('nevidljiv');
    } else {
        trTagNevidljiv.classList.add('nevidljiv');  
     }
}
function popuniGrad() {
  var grad, ispis;

	grad = ["Beograd", "Novi Sad", "Kragujevac",];

	ispis = "<select id='ddlSmer'>";
	ispis +="<option value='0'>Izaberite</option>";

	for(var i = 0; i < grad.length; i++){
		ispis += "<option value='" + grad[i] + "'>" + grad[i] + "</option>";
	}
	ispis += "</select>";
	document.getElementById("ddlCity").innerHTML = ispis;
}
function proveraDdlGrad() {
    var ddlGradElement = document.querySelector("#ddlGrad");
    var gradVrednost = ddlGradElement.value;

    var tdTag = ddlGradElement.parentElement;
    var trTag = tdTag.parentElement;
    var trTagNevidljiv = trTag.nextElementSibling;

    if (gradVrednost == "0") 
    {
        trTagNevidljiv.classList.remove('nevidljiv');
    } else {
        trTagNevidljiv.classList.add('nevidljiv');
    }
}
