
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
	
	dataParametros.divFilesTable="divFilesTable"
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
	setStyleElement(fileUploadService.divFilesTable, "height", obtenerHeightJqGridDiv(heightJqGrid, 2, true));
	if (filesTable) {
		var filesTableDiv = $("#" + fileUploadService.divFilesTable);
		var widthTable = filesTableDiv.width();
		
		filesTable.jqGrid({
			width: widthTable,
			height: heightJqGrid,
			datatype: "local",
			rowNum: 25,
			rowList: [25, 50],
			guiStyle: "bootstrap",
			headertitles: false,
			autowidth: true,
			cmTemplate: {sortable: false},
			colNames: [
				"#",
				"Nombre",
				"Tamaño",
				
				"Eliminar"

			],
			colModel: [
				{name: "row", index: "row", width: (2*widthTable/20), fixed: true, frozen: true,align: "center"} ,
				{name: "name", index: "name", width: (12*widthTable/20), fixed: true, frozen: true,align: "center",
				formatter: function(cellValue, options, rowData) {
						htmlElement = "";
							htmlElement = "<a class=\"jqGridUploadLinkClass\" onclick=\"clickLinkDescargarDocumento('" + rowData.row + "');\">" + cellValue + "</a>";
						return htmlElement;
					}
				} ,
				{name: "sizeLabel", index: "sizeLabel", width: (3*widthTable/20), fixed: true, frozen: true , align: "center"},
				
				{name: "eliminar", index: "eliminar", width: (3*widthTable/20), fixed: true, frozen: true, align: "center",
				formatter: function(cellValue, options, rowData) {
						htmlElement = "";
							//htmlElement = "<a class=\"jqGridUploadLinkClass\" onclick=\"clickLinkEliminarDocumento('" + rowData.row + "');\">Eliminar</a>";	
							htmlElement = "<img alt=\"eliminar\" height=\"32\" width=\"32\" src=\"/static/images/icon-delete.png\" onMouseOver=\"this.style.cursor='pointer'\" onclick=\"clickLinkEliminarDocumento('" + rowData.row + "');\">"
						return htmlElement;
					}
				}

			],
			rowattr: function(dataTable) {
				
			},
			
			loadui: "disable"
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

	location.href = contextPathUrlDownload + "downloaddocument/" + encodeParam;
}

function clickLinkEliminarDocumento(row){
		console.log(" clickLinkEliminarDocumento" + row);
		fileUploadService.containerClient.data[row - 1].idOperacion = 2 ;
		var fileTemp= fileUploadService.containerClient.data[row - 1];
		
		console.log(fileTemp);
		dataJson ={
				"uuidGPA": fileTemp.uuidGPA,
				"uuidFile": fileTemp.uuidFile,
				"idStore": fileTemp.idStore,
				"name": fileTemp.name,
				"extension": fileTemp.extension,
				"mimeType": fileTemp.mimeType,
				"sizeBytes": fileTemp.sizeBytes,
				"sizeLabel": fileTemp.sizeLabel,
				"idOperacion": fileTemp.idOperacion
				
			};
		$.ajax({
			url: contextPathUrlIntegrador + "eliminarIntegrador/",
			type: "POST",
			dataType: "JSON",
		 	contentType: "application/json; charset=utf-8",
			data: typeof dataJson == "string" ? dataJson : JSON.stringify(dataJson || {}) ,
			
			beforeSend: function() {
				consoleBrowser("beforeSend");
				

			},
			complete: function() {
				consoleBrowser("complete");
				
			},
			success: function(result) {
				consoleBrowser("success");
				
				var codigoOperacion = result.codigoOperacion;
				consoleBrowser("codigoOperacion:" + result.codigoOperacion);
				var errorMessage = result.errorMessage;
				if (codigoOperacion != null) {
					if (codigoOperacion == "00") {
						//aqui eliminar de grilla
						var filesTable = $("#" + fileUploadService.tblFiles );

						console.log("row:"+ row);
						filesTable.jqGrid("delRowData", row - 1);
						filesTable.trigger("reloadGrid");
						//var filesTableArray = filesTable.jqGrid("getRowData");
						//filesTable.clearGridData();
						
						//if (filesTableArray.length == 0) {

						//}
						
						
					}
					else {
						fileUploadService.showMessageError(errorMessage);
					}
				}
				else {
					fileUploadService.showMessageError(errorMessage);
				}
			},
			error: function() {
				fileUploadService.showMessageError("error");
			}
		});
	
}
function getFileDTOJson() {
	console.log("getFileDTOJson");
	var fileDTOJson="{}";
	var rows = fileUploadService.containerClient.data.length;
	if (rows > 0 ){
		
		var fileDTO ={
			uuidGPA : fileUploadService.containerClient.data[rows - 1 ].uuidGPA ,
			versionGPA : '1.0' ,
			files:fileUploadService.containerClient.data
		}
		 fileDTOJson =JSON.stringify(fileDTO);
	}
	console.log("fileDTOJson: " + fileDTOJson);
	return fileDTOJson; 
	
}
function clickLinkSaveFiles(){
		console.log(" clickLinkSaveFiles" );
		
		dataJson =getFileDTOJson();
		$.ajax({
			url: contextPathUrlIntegrador + "integrador/",
			type: "POST",
			dataType: "JSON",
		 	contentType: "application/json; charset=utf-8",
			data: typeof dataJson == "string" ? dataJson : JSON.stringify(dataJson || {}) ,
			
			beforeSend: function() {
				consoleBrowser("beforeSend");
				

			},
			complete: function() {
				consoleBrowser("complete");
				
			},
			success: function(result) {
				consoleBrowser("success");
				
				var codigoOperacion = result.codigoOperacion;
				consoleBrowser("codigoOperacion:" + result.codigoOperacion);
				var errorMessage = result.errorMessage;
				if (codigoOperacion != null) {
					if (codigoOperacion == "00") {
						//aqui eliminar de grilla
						
						console.log("okok:");						
						
					}
					else {
						fileUploadService.showMessageError(errorMessage);
					}
				}
				else {
					fileUploadService.showMessageError(errorMessage);
				}
			},
			error: function() {
				fileUploadService.showMessageError("error");
			}
		});
	
}
