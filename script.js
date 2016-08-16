window.onload = function()
{
	inicio();
}
function inicio()
{

	var descifra = false;
	function codifica(descifrar)
	{
		var NumeroText  = nom_div("caja_2").value;
		var clave =NumeroText;
		var texto = nom_div("caja_1").value;
		if (NumeroText < 0 )
		{
			alert("La clave debe ser mayor a 0. ");
		}
		
		if(descifrar==true)
		{
		var alfabeto=["Á","É","Í","Ó","Ú","á","é","í","ó","ú",
					  "A","B","C","D","E","F","G","H","I","J",
					  "K","L","M","N","Ñ","O","P","Q","R","S",
					  "T","U","V","W","X","Y","Z","0","1","2",
					  "3","4","5","6","7","8","9"," ",".",",",
					  ";","-","+","*","|","/","a","b","c","d",
					  "e","f","g","h","i","j","k","l","m","n",
					  "ñ","o","p","q","r","s","t","u","v","w",
					  "x","y","z","@",'"',"'"];
					  
var c=0;
		var m=0;
		var n=86;
		var text_cifrado="";
		var ban=0, ban1=0;
		var clave_num=0;
		
		for (var i = 0; i < texto.length; i++){
			for(var j = 0; j < alfabeto.length; j++){
				for(var k = 0; k < alfabeto.length; k++){
					if(clave.charAt(m)==alfabeto[k]){
						clave_num = k;
						//alert(clave_num);
						console.log(clave_num);	
						ban1=1;		
					}else{
						if(k==85 && ban1==0)
							clave_num=0;
					}
				}
				
				if(texto.charAt(i)==alfabeto[j]){
					console.log(j);
					c=(j-clave_num)%n;
					if(c<0){
						c=c+86;
					}
					console.log(c);
					text_cifrado += alfabeto[c];
					ban=1;
				}
			}
			clave_num=0;
			if(ban==0){
				text_cifrado += texto.charAt(i);
			}
			ban=0;
			c=0;
			m=m+1;
			if(clave.length==m){
				m=0;
			}
		}
		nom_div("tabla").innerHTML = text_cifrado;
		}
		else{
		
		nom_div("tabla").innerHTML = realizaCesar(texto, clave);
		}
	}
	
	function realizaCesar(texto, clave)
	{
		
		 
	var alfabeto=["Á","É","Í","Ó","Ú","á","é","í","ó","ú",
					  "A","B","C","D","E","F","G","H","I","J",
					  "K","L","M","N","Ñ","O","P","Q","R","S",
					  "T","U","V","W","X","Y","Z","0","1","2",
					  "3","4","5","6","7","8","9"," ",".",",",
					  ";","-","+","*","|","/","a","b","c","d",
					  "e","f","g","h","i","j","k","l","m","n",
					  "ñ","o","p","q","r","s","t","u","v","w",
					  "x","y","z","@",'"',"'"];
					  
		var c=0;
		var m=0;
		var n=86;
		var text_cifrado="";
		var ban=0, ban1=0;
		var clave_num=0;
		
		for (var i = 0; i < texto.length; i++){
			for(var j = 0; j < alfabeto.length; j++){
				for(var k = 0; k < alfabeto.length; k++){
					if(clave.charAt(m)==alfabeto[k]){
						clave_num = k;
						//alert(clave_num);
						console.log(clave_num);	
						ban1=1;		
					}else{
						if(k==85 && ban1==0)
							clave_num=0;
					}
				}
				
				if(texto.charAt(i)==alfabeto[j]){
					console.log(j);
					c=(j+clave_num)%n;
					console.log(c);
					text_cifrado += alfabeto[c];
					ban=1;
				}
			}
			clave_num=0;
			if(ban==0){
				text_cifrado += texto.charAt(i);
			}
			ban=0;
			m=m+1;
			if(clave.length==m){
				m=0;
			}
		}
		return text_cifrado;
		
	}

	nom_div("caja_1").addEventListener('keyup', function(event)
	{
		codifica(descifra);
	});

	nom_div("accion").addEventListener('change', function(event)
	{
		if(this.value == 1)
		{
			descifra = false;
		}
		else
		{
			descifra = true;
		}
		nom_div("caja_1").value = "";
		nom_div("tabla").innerHTML = "";
	});
	
	function nom_div(id)
	{
		return document.getElementById(id);
	}

}
 
