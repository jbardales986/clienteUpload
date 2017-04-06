
var clientStartAfterMethod = function(){

	console.log("Aqui comportamiento despues de iniciada la carga si hay error");
}

var clientCompleteAfterMethod = function(){
	console.log("Aqui comportamiento despues de completada la carga");

}



var fileUploadService = new FileUploadService();

function initElementsUploadService(containerClient) {

	console.log("initElementsUploadService");
	setInitFilesTable();
	addEventElement("btnAlertMensajeError", "click", clickBtnAlertMensajeError);
	addEventElement("btnMensajeConfirmar", "click", clickBtnMensajeConfirmar);
	
	var dataParametros = new Object();
	dataParametros.containerClient = containerClient;
	

	dataParametros.idDivLoading = "divLoadingUploadFile";
	dataParametros.idDivError = "divAlertMensajeError";
	dataParametros.idEtiquetaError = "spaMensajeAlertaError";
	dataParametros.idDivMensaje = "divMensajeConfirmar";
	dataParametros.idEtiquetaMensaje = "spanMensajeConfirmar";
	dataParametros.idDivScreenBlock = "divScreenBlock";

	//dataParametros.errorMessage = errorMessageBuscarUsuarioInput;
	fileUploadService = new FileUploadService(dataParametros, clientStartAfterMethod, clientCompleteAfterMethod);
}
function clickBtnAlertMensajeError(){
	$("#divAlertMensajeError").modal("hide");
}

function clickBtnMensajeConfirmar(){
	$("#divMensajeConfirmar").modal("hide");
}



function setInitFilesTable() {
	var filesTable = $("#tblFiles");
	var heightJqGrid = 200;
	setStyleElement("divFilesTable", "height", obtenerHeightJqGridDiv(heightJqGrid, 2, true));
	if (filesTable) {
		var filesTableDiv = $("#divFilesTable");
		var widthTable = filesTableDiv.width();
		
		filesTable.jqGrid({
			width: widthTable,
			height: heightJqGrid,
			datatype: "local",
			rowNum: 25,
			rowList: [25, 50],
			autowidth: true,
			cmTemplate: {sortable: false},
			colNames: [
				"Nro",
				"Nombre",
				"Tamaño",
				"Extensión",
				"icono"

			],
			colModel: [
				{name: "row", index: "row", width: (3.5*widthTable/20), fixed: true, frozen: true,align: "center"} ,
				{name: "name", index: "name", width: (3.5*widthTable/20), fixed: true, frozen: true,align: "center"} ,
				{name: "sizeLabel", index: "sizeLabel", width: (1.5*widthTable/20), fixed: true, frozen: true , align: "left"},
				{name: "extension", index: "extension", width: (1.5*widthTable/20), fixed: true, frozen: true ,align: "center"},
				{name: "sizeLabel", index: "sizeLabel", width: (4.5*widthTable/20), fixed: true, frozen: true, align: "center"}

			],
			rowattr: function(dataTable) {
				
			},
			pager: "#divFilesPagerTable",
			loadui: "disable",
			caption: "Archivos"
		});
		//filesTable.jqGrid("setFrozenColumns");
		filesTable.clearGridData();
	}
}
