requirejs.config({
	paths: {
		"SocketIOFileUpload": "/static/js/siofu/client",
		"socket.io"			: "/static/js/socket.io/socket.io",
		'cryptojs.core'		: "/static/js/libs/cryptojs/components/core",
        'cryptojs.md5'		: "/static/js/libs/cryptojs/components/md5"
	},
	shim: {
		'cryptojs.md5': {
			deps: ['cryptojs.core'],
			exports: "CryptoJS"	//You can also use "CryptoJS.MD5"
		}
    }
});

require(["socket.io", "SocketIOFileUpload", "cryptojs.md5"], function (io, SocketIOFileUpload, CryptoJS) {
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
		console.log("complete");
		//console.log( event.detail.fileexternal);
		console.log( event.detail.fileexternal.name);
		console.log( event.detail.fileexternal.extension);
		console.log( event.detail.fileexternal.sizeLabel);
		
		var FileExternal= {
						uuidGPA	: event.detail.fileexternal.uuidGPA ,
						uuidFile :event.detail.fileexternal.uuidFile ,
						idStore	: event.detail.fileexternal.idStore,
						name	: event.detail.fileexternal.name ,
						extension : event.detail.fileexternal.extension ,
						mimeType  : event.detail.fileexternal.mimeType ,
						sizeBytes : event.detail.fileexternal.sizeBytes ,
						sizeLabel : event.detail.fileexternal.sizeLabel ,
						idOperacion : 1
						};
		fileUploadService.containerClient.data.push(FileExternal);
		console.log("rows:" +  fileUploadService.containerClient.data.length );
		var fileTable = $("#" +  fileUploadService.tblFiles );
		var datarow = {
							row :fileUploadService.containerClient.data.length,
							name: FileExternal.name,
							sizeLabel: FileExternal.sizeLabel,
							extension: FileExternal.extension
						};
		fileTable.jqGrid("addRowData", fileUploadService.containerClient.data.length - 1 , datarow);
		fileTable.trigger("reloadGrid");
		hideElement(fileUploadService.idDivLoading);
		fileUploadService.showMessageInfo("Se Cargo Correctamente el Archivo");
		
		//flash("Carga Completa: "+event.file.name);//aqui se cambia por poppup personales
	});
	uploader.addEventListener("choose", function(event){
		//flash("Archivos seleccionados: "+event.files);
		console.log("choose 2");
		//console.log(event.file);

	});
	uploader.addEventListener("start", function(event){
		console.log("start");
		showElement(fileUploadService.idDivLoading);
		
			event.file.meta.token = fileUploadService.containerClient.config.token ;
			event.file.meta.uuidGPA = fileUploadService.containerClient.config.uuidGPA ;
			event.file.meta.idStore = fileUploadService.containerClient.config.idStore ;
	
		
	});
	uploader.addEventListener("progress", function(event){
		
		console.log("El archivo esta ", parseInt(event.bytesLoaded/event.file.size*100), "porcentaje cargado");
	});
	uploader.addEventListener("load", function(event){
		
		
		//event.file.meta.md5=fileUploadService.containerClient.config.md5;
		//flash("Archivo cargado: "+event.file.name);
	});
	uploader.addEventListener("error", function(event){
		//flash("Error: "+event.message);
		hideElement(fileUploadService.idDivLoading);
		
		if (event.code === 1) {
			fileUploadService.showMessageError("El tamaño maximo de carga de archivo es :" + fileUploadService.containerClient.config.maxSizeBytesLabel );
			fileUploadService.startAfterMethod();
			//alert("No se puede subir un archivo tan Grande");
		}else{
			fileUploadService.showMessageError(event.message);
		}
	});
	//uploader.maxFileSize = 500 000 000;//500 mb
	//uploader.maxFileSize = 1 000 000;//1 mb
	if (typeof fileUploadService != "undefined") {
		//console.log(fileUploadService.containerClient.jsonConfig);
		console.log(fileUploadService.containerClient.config.maxSizeBytes);
	}else{
		console.log("no esta ");
	}

	//uploader.maxFileSize = 1000000;//1 mb
	uploader.maxFileSize = fileUploadService.containerClient.config.maxSizeBytes;
	fileUploadService.containerClient.data = new Array();
	uploader.useBuffer = true;
	uploader.chunkSize = 1024 * 1024;
	//uploader.useText = true;
	//uploader.serializedOctets = true;
	document.getElementById(fileUploadService.uploadButton).addEventListener("click", function(){
		uploader.prompt();
	}, false);
	uploader.listenOnInput(document.getElementById("plain_input_element"));
	//uploader.listenOnDrop(document.getElementById("file_drop"));

	window.uploader = uploader;
});