




function FileUploadService(dataParametros,
	 initBeforeMethod, startAfterMethod, completeAfterMethod) {
	console.log("create FileUploadService");
	if (typeof dataParametros != "undefined") {
		console.log("dataParametros " +dataParametros.containerClient.jsonConfig );
		console.log("dataParametros " +dataParametros.containerClient.config.uuidGPA );
		console.log("dataParametros " +dataParametros.containerClient.config.maxSizeBytes );
		this.containerClient = dataParametros.containerClient;
		this.idDivLoading = dataParametros.idDivLoading;
		this.idDivError = dataParametros.idDivError;
		this.idEtiquetaError = dataParametros.idEtiquetaError;
		this.idDivMensaje = dataParametros.idDivMensaje;
		this.idEtiquetaMensaje= dataParametros.idEtiquetaMensaje;
		this.idDivScreenBlock = dataParametros.idDivScreenBlock;

		
		this.errorMessage = dataParametros.errorMessage;

		
	}else{
		//alert("Parametros no definidos");
	}
	if (typeof startAfterMethod != "undefined") {
		this.startAfterMethod = startAfterMethod;
	}
	if (typeof completeAfterMethod != "undefined") {
		this.completeAfterMethod = completeAfterMethod;
	}
	this.showMessageError = function(errorMessage){
		setHtmlElement(this.idEtiquetaError, errorMessage);
		showModalElement(this.idDivError);
	}
	this.showMessageInfo = function(message){
		setHtmlElement(this.idEtiquetaMensaje, message);
		showModalElement(this.idDivMensaje);
	}
}


