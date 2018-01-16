
		var
			btn=document.getElementById("button"),
			rep=document.getElementById("reponse"),
			res=document.getElementById("resultat"),
			ess=document.getElementById("essaye")
			i=0;
//------------------------------------------------------------	

btn.onclick=function click(){
		i++;
		if (i<2) {
			ess.innerHTML=' Premiere essaie ';
			test();
		}
		else if(i<3){
			ess.innerHTML='Deuxieme essaie';
			test();
		}
		else if(i<4){
			ess.innerHTML='Troisieme essaie';
			test();
		}
		else{
			res.innerHTML='vous avez perdue le jeux';
			ess.innerHTML='';
		}
	}
function test(){
	x = Math.floor(Math.random()*9+1);
				ran=x;
				ran=ran;
		if (ran==rep.value) {

				res.innerHTML=' Felicitation le numero est bien ' + ran;

			}
		else if (ran>rep.value){
			res.innerHTML=' le numero '+'('+rep.value+')'+' est tres petit';
		}
		else{
			res.innerHTML=' le numero '+'('+rep.value+')'+' est tres grand ';
		}
		rep.value="";

}
