var Index = {

	init: function(){
		  	var form = document.getElementById("signos");
			form.onsubmit = function(){
				var dia = Number(form.dia.value);
				var mes = Number(form.mes.value);
				var dtVerif = new Date("2011/"+(mes)+"/"+dia);

				for (var i=0;i<Signos.length;i++){

					if((Signos[i].getDtInic() <= dtVerif) && (Signos[i].getDtFim() >= dtVerif)){

						var resp = document.getElementById("resp");
						resp.innerHTML = "";
						
						var img = document.createElement("img");
						img.src = Signos[i].getImg();
						img.alt = Signos[i].getNome();
						
						var titulo = document.createElement("h1");
					    titulo.innerHTML = Signos[i].getNome();
						
						var p = document.createElement("p");						
						if(Signos[i].getNome() != "Capricórnio"){
						    p.innerHTML = Signos[i].getDtInic().getDate() + "/" + (Signos[i].getDtInic().getMonth()+1) + " a "+ Signos[i].getDtFim().getDate() + "/" + (Signos[i].getDtFim().getMonth()+1);
						} else {
							p.innerHTML = "22/12 a 20/01";	
						}
						
						resp.appendChild(titulo);
						resp.appendChild(p);
						resp.appendChild(img);
						
						return false;
					}
				}
				return false;
	        }
	}
}
Index.init();