function Signo(nome, dtInic, dtFim, img){
	this.nome = nome;
	this.dtInic = dtInic;
	this.dtFim = dtFim;
	this.img = img;
	
	this.getNome = function(){
		return this.nome;
	}
	this.getDtInic = function(){
		return this.dtInic;
	}
	this.getDtFim = function(){
		return this.dtFim;
	}
	this.getImg = function(){
		return this.img;
	}
	
}