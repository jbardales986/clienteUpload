
var clientStartAfterMethod = function(){

	console.log("Aqui comportamiento despues de iniciada la carga si hay error");
}

var clientCompleteAfterMethod = function(){
	console.log("Aqui comportamiento despues de completada la carga");

}



var fileUploadService = new FileUploadService();

function initElementMessage(){
	addEventElement("btnAlertMensajeError", "click", clickBtnAlertMensajeError);
    addEventElement("btnMensajeConfirmar", "click", clickBtnMensajeConfirmar);
}
function initElementsUploadService(containerClient) {
	
	initElementMessage();

	console.log("initElementsUploadService");
	
	
	var dataParametros = new Object();
	dataParametros.containerClient = containerClient;
	

	dataParametros.uploadButton="ul_btn";
	
	dataParametros.divFilesTable="dataParametros"
	dataParametros.tblFiles="tblFiles";

	dataParametros.idDivLoading = "divLoadingUploadFile";
	dataParametros.idDivError = "divAlertMensajeError";
	dataParametros.idEtiquetaError = "spaMensajeAlertaError";
	dataParametros.idDivMensaje = "divMensajeConfirmar";
	dataParametros.idEtiquetaMensaje = "spanMensajeConfirmar";
	dataParametros.idDivScreenBlock = "divScreenBlock";

	//dataParametros.errorMessage = errorMessageBuscarUsuarioInput;
	fileUploadService = new FileUploadService(dataParametros, clientStartAfterMethod, clientCompleteAfterMethod);
	setInitFilesTable();
}
function clickBtnAlertMensajeError(){
	console.log("clickBtnAlertMensajeError");
	$("#divAlertMensajeError").modal("hide");
}

function clickBtnMensajeConfirmar(){
	console.log("clickBtnMensajeConfirmar");
	$("#divMensajeConfirmar").modal("hide");
}



function setInitFilesTable() {
	var filesTable = $("#" + fileUploadService.tblFiles );
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
				
				"icono"

			],
			colModel: [
				{name: "row", index: "row", width: (3.5*widthTable/20), fixed: true, frozen: true,align: "center"} ,
				{name: "name", index: "name", width: (3.5*widthTable/20), fixed: true, frozen: true,align: "center",
				formatter: function(cellValue, options, rowData) {
						htmlElement = "";
							htmlElement = "<a class=\"jqGridUploadLinkClass\" onclick=\"clickLinkDescargarDocumento('" + rowData.row + "');\">" + cellValue + "</a>";
						return htmlElement;
					}
				} ,
				{name: "sizeLabel", index: "sizeLabel", width: (1.5*widthTable/20), fixed: true, frozen: true , align: "left"},
				
				{name: "eliminar", index: "eliminar", width: (4.5*widthTable/20), fixed: true, frozen: true, align: "center",
				formatter: function(cellValue, options, rowData) {
						htmlElement = "";
							htmlElement = "<a class=\"jqGridUploadLinkClass\" onclick=\"clickLinkEliminarDocumento('" + rowData.row + "');\">Eliminar</a>";	
						return htmlElement;
					}
				}

			],
			rowattr: function(dataTable) {
				
			},
			
			loadui: "disable",
			caption: "Archivos"
		});
		//filesTable.jqGrid("setFrozenColumns");
		filesTable.clearGridData();
	}
}

function clickLinkDescargarDocumento(row){
		console.log(" clickLinkDescargarDocumento" + row);
		var fileTemp= fileUploadService.containerClient.data[row - 1];
		console.log(fileTemp);
		var encodeParam = "0/uuid/"+fileTemp.uuidFile+"/gpa/"+fileTemp.uuidGPA;
		console.log("nombre:" +  fileTemp.name);

	location.href = contextPathUrlDownload + "/downloaddocument/" + encodeParam;
}
