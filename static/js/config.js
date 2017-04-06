requirejs.config({
	paths: {
		"SocketIOFileUpload": "/static/js/siofu/client",
		"socket.io": "/static/js/socket.io/socket.io"
	}
});

require(["socket.io", "SocketIOFileUpload"], function (io, SocketIOFileUpload) {
	// jQuery version //Cambiar por estilo de osce
	function flash(message){
		(function(message){
			var flsh = $("<div></div>");
			flsh.addClass("flash");
			flsh.text(message);
			flsh.appendTo(document.body);
			setTimeout(function(){
				flsh.slideUp(500, function(){
					flsh.remove();
				});
			}, 2000);
		})(message);
	}

	// non-jQuery version// cambiar por estilos de osce
	function flash(message){
		(function(message){
			var flsh = document.createElement("div");
			flsh.setAttribute("class", "flash");
			flsh.textContent = message;
			document.body.appendChild(flsh);
			setTimeout(function(){
				document.body.removeChild(flsh);
			}, 2000);
		})(message);
	}

	var socket = io.connect('http://osce.gob.pe.upload:800');

	var uploader = new SocketIOFileUpload(socket);
	uploader.addEventListener("complete", function(event){
		console.log(event);
		console.log( event.detail.fileexternal);
		flash("Carga Completa: "+event.file.name);//aqui se cambia por poppup personales
	});
	uploader.addEventListener("choose", function(event){
		flash("Archivos seleccionados: "+event.files);
	});
	uploader.addEventListener("start", function(event){

		event.file.meta.token = document.getElementById("tokenApp").value ;
	});
	uploader.addEventListener("progress", function(event){
		console.log(event);
		console.log("El archivo esta ", event.bytesLoaded/event.file.size*100, "porcentaje cargado");
	});
	uploader.addEventListener("load", function(event){
		flash("Archivo cargado: "+event.file.name);
		console.log(event);
	});
	uploader.addEventListener("error", function(event){
		flash("Error: "+event.message);
		console.log(event.message);
		if (event.code === 1) {
			alert("No se puede subir un archivo tan Grande");
		}
	});
	uploader.maxFileSize = 500000000;
	uploader.useBuffer = true;
	uploader.chunkSize = 1024 * 1024;
	//uploader.useText = true;
	//uploader.serializedOctets = true;
	document.getElementById("ul_btn").addEventListener("click", function(){
		uploader.prompt();
	}, false);
	uploader.listenOnInput(document.getElementById("plain_input_element"));
	uploader.listenOnDrop(document.getElementById("file_drop"));

	window.uploader = uploader;
});