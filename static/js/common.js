/*
 * Funciones Comunes para la APP. 
 */

function resizeTable(idTable) {
	var elementTable = $("#" + idTable);
	if (elementTable) {
		var newWidth = elementTable.closest(".ui-jqgrid").parent().width();
		elementTable.jqGrid("setGridWidth", newWidth, true);
	}
}

function initDateTimePicker(idDateElement, eventName, eventNameIE, handlerMethod) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {
			elementDate.datepicker({
				format: "dd/mm/yyyy"
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function initDateTimePickerUseCurrent(idDateElement, eventName, eventNameIE, handlerMethod, useCurrent) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {
			elementDate.datepicker({
				format: "dd/mm/yyyy"
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				useCurrent: useCurrent,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function initDateTimePickerWithDefaultDate(idDateElement, eventName, handlerMethod, dateDefault) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		elementDate.datetimepicker({
			defaultDate: dateDefault,
			locale: "es",
		    format: "DD/MM/YYYY"
		}).on(eventName, handlerMethod);
	}
}

function initDateTimePickerWithMaxDate(idDateElement, eventName, eventNameIE, handlerMethod, maxDateString) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {
			//console.log("maxDateString: " + maxDateString);
			var maxDate = new Date(maxDateString);
			elementDate.datepicker({
				locale: "es",
				format: "dd/mm/yyyy",
				onRender: function(date) {
					return parseInt(date.valueOf()) > parseInt(maxDate.valueOf()) ? 'disabled' : '';
				}
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				maxDate: maxDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function initDateTimePickerWithMaxDateUseCurrent(idDateElement, eventName, eventNameIE, handlerMethod, maxDateString, useCurrent) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {
			//console.log("maxDateString: " + maxDateString);
			var maxDate = new Date(maxDateString);
			elementDate.datepicker({
				locale: "es",
				format: "dd/mm/yyyy",
				onRender: function(date) {
					return parseInt(date.valueOf()) > parseInt(maxDate.valueOf()) ? 'disabled' : '';
				}
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				useCurrent: useCurrent,
				maxDate: maxDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function initDateTimePickerWithMinDate(idDateElement, eventName, eventNameIE, handlerMethod, minDateString) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {

			var maxDate = new Date(minDateString);
			elementDate.datepicker({
				locale: "es",
				format: "dd/mm/yyyy",
				onRender: function(date) {
					return parseInt(date.valueOf()) < parseInt(maxDate.valueOf()) ? 'disabled' : '';
				}
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				minDate: minDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function initDateTimePickerWithMinDateUseCurrent(idDateElement, eventName, eventNameIE, handlerMethod, minDateString, useCurrent) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {

			var maxDate = new Date(minDateString);
			elementDate.datepicker({
				locale: "es",
				format: "dd/mm/yyyy",
				onRender: function(date) {
					return parseInt(date.valueOf()) < parseInt(maxDate.valueOf()) ? 'disabled' : '';
				}
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				useCurrent: useCurrent,
				minDate: minDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function initDateTimePickerWithMinDateMaxDateUseCurrent(idDateElement, eventName, eventNameIE, handlerMethod, minDateString, maxDateString, useCurrent) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (isBrowserInternetExplorer()) {

			var minDate = new Date(minDateString);
			var maxDate = new Date(maxDateString);
			
			elementDate.datepicker({
				locale: "es",
				format: "dd/mm/yyyy",
				onRender: function(date) {
					return ( parseInt(date.valueOf()) < parseInt(minDate.valueOf()) || parseInt(date.valueOf()) > parseInt(maxDate.valueOf()) ) ? 'disabled' : '';
				}
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				useCurrent: useCurrent,
				minDate: minDateString,
				maxDate: maxDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}




function initDateTimePickerWithDefaultMaxDate(idDateElement, eventName, handlerMethod, defaultDate, maxDate) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		elementDate.datetimepicker({
			defaultDate: defaultDate,
			maxDate: maxDate,
			locale: "es",
		    format: "DD/MM/YYYY"
		}).on(eventName, handlerMethod);
	}
}



function initDateTimePickerWithMinDateMaxDate(idDateElement, eventName, eventNameIE, handlerMethod, minDateString, maxDateString) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {

		if (isBrowserInternetExplorer()) {

			var minDate = new Date(minDateString);
			var maxDate = new Date(maxDateString);
			
			elementDate.datepicker({
				locale: "es",
				format: "dd/mm/yyyy",
				onRender: function(date) {
					return ( parseInt(date.valueOf()) < parseInt(minDate.valueOf()) || parseInt(date.valueOf()) > parseInt(maxDate.valueOf()) ) ? 'disabled' : '';
				}
			}).on(eventNameIE, handlerMethod);
		}
		else {
			elementDate.datetimepicker({
				minDate: minDateString,
				maxDate: maxDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);		
		}		
	}
}

function initDateTimePickerWithDefaultMinDateMaxDate(idDateElement, eventName, handlerMethod, defaultDate, minDate, maxDate) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		elementDate.datetimepicker({
			defaultDate: defaultDate,
			minDate: minDate,
			maxDate: maxDate,
			locale: "es",
		    format: "DD/MM/YYYY"
		}).on(eventName, handlerMethod);
	}
}

function initDateTimeOnlyHourLocalTime(idDateElement, eventName, handlerMethod) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		elementDate.datetimepicker({
		    format: "LT"
		}).on(eventName, handlerMethod);
	}
}

function initDateTimeOnlyHourFormat24(idDateElement, eventName, handlerMethod) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		if (!isBrowserInternetExplorer()) {
			elementDate.datetimepicker({
			    format: "HH:mm"
			}).on(eventName, handlerMethod);
		}
		else {
			//elementDate.bfhtimepicker("toggle");
		}
	}
}

function initDateTimePicker123(idDateElement) {
	var elementDate = $("#" + idDateElement);
	if (elementDate) {
		elementDate.datetimepicker({
			inline: true,
            sideBySide: true,
		    format: "LT"
		});
	}
}

function setDateDateTimePicker(idDateElement, valueDate) {
	var dateTimePicker = $("#" + idDateElement);
	if (dateTimePicker) {
		dateTimePicker.data("DateTimePicker").date(valueDate);
	}
}

function setMinDateDateTimePicker(idDateElement, minDate) {
	var dateTimePicker = $("#" + idDateElement);
	if (dateTimePicker) {
		dateTimePicker.data("DateTimePicker").minDate(minDate);
	}
}

function setMaxDateDateTimePicker(idDateElement, maxDate) {
	var dateTimePicker = $("#" + idDateElement);
	if (dateTimePicker) {
		dateTimePicker.data("DateTimePicker").maxDate(maxDate);
	}
}

function setDefaultDateDateTimePicker(idDateElement, defaultDate) {
	var dateTimePicker = $("#" + idDateElement);
	if (dateTimePicker) {
		dateTimePicker.data("DateTimePicker").defaultDate(defaultDate);
	}
}

function recreateDateTimePicker(idDateElement, eventName, handlerMethod, maxDateString) {
	if (!isBrowserInternetExplorer()) {
		var elementDate = $("#" + idDateElement);
		if (elementDate) {
			elementDate.datetimepicker({
				maxDate: maxDateString,
				locale: "es",
			    format: "DD/MM/YYYY"
			}).on(eventName, handlerMethod);
		}
	}
}

function destroyDateTimePicker(idDateElement) {
	if (!isBrowserInternetExplorer()) {
		var dateTimePicker = $("#" + idDateElement);
		if (dateTimePicker) {
			dateTimePicker.data("DateTimePicker").destroy();
			removeAllEventsElement(idDateElement);
		}
	}
}


function getInicioAnioEnEjercicio() {
	var today = new Date();
	var anio = today.getFullYear();
	today = "01/01/" + anio;
	return today;
}

function getCurrentDateFormatEsp() {
	
	var today = new Date();
	var dia = today.getDate();
	var mes = today.getMonth() + 1; //January is 0!
	var anio = today.getFullYear();
	
	if (dia < 10) {
		dia = "0" + dia;
	}
	
	if (mes < 10) {
		mes = "0" + mes;
	}
	
	today = dia + "/" + mes + "/" + anio;
	return today;
}

function getCurrentDateFormatEng() {
	
	var today = new Date();
	var dia = today.getDate();
	var mes = today.getMonth() + 1; //January is 0!
	var anio = today.getFullYear();
	
	if (dia < 10) {
		dia = "0" + dia;
	}
	
	if (mes < 10) {
		mes = "0" + mes;
	}
	
	today = anio + "/" + mes + "/" + dia;
	return today;
}

function formatEspDateToEngFormatDate(stringDate) {
	
	var formatDate = "";
	if (stringDate != null) {
		var arrayDate = stringDate.split("/");
		if (arrayDate.length > 2) {
			var dia = arrayDate[0];
			var mes = arrayDate[1];
			var anio = arrayDate[2];
			formatDate = anio + "/" + mes + "/" + dia;
		}
	}
	return formatDate;
}

function formatEspDateToInternationalFormatDate(stringDate) {
	
	var formatDate = "";
	if (stringDate != null) {
		var arrayDate = stringDate.split("/");
		if (arrayDate.length > 2) {
			var dia = arrayDate[0];
			var mes = arrayDate[1];
			var anio = arrayDate[2];
			formatDate = anio + "-" + mes + "-" + dia;
		}
	}
	return formatDate;
}

function validateHour(timeStr) {
	var valid = (timeStr.search(/^([2][0-3]|[01]?[0-9])([.:][0-5][0-9])?$/) != -1) &&
	            (timeStr.substr(0,2) >= 0 && timeStr.substr(0,2) <= 24) &&
	            (timeStr.substr(3,2) >= 0 && timeStr.substr(3,2) <= 59);

	return valid;

}

function formatHourToHHMM(hourString) {
	
	var formatHour = "";
	if (hourString != null) {
		var arrayHour = hourString.split(":");
		if (arrayHour.length >= 2) {
			var hora = arrayHour[0];
			var minutos = arrayHour[1];
			formatHour = hora + ":" + minutos;
		}
	}
	return formatHour;
}

function addMinutosHourFormatHHMM(hourString, numMinutos) {
	
	var hourFinal = "";
	if (hourString != null) {
		var arrayHour = hourString.split(":");
		if (arrayHour.length >= 2) {
			var hora = Number(arrayHour[0]);
			var minutos = Number(arrayHour[1]) + numMinutos;
			var cocienteOperacion = Math.floor(minutos/60);
			var restoOperacion = minutos%60;
			
			if (cocienteOperacion == 0) {
				minutos = restoOperacion;
			}
			else {
				hora += cocienteOperacion;
				minutos = restoOperacion;
			}
			
			if (hora < 10) {
				hora = "0" + hora;
			}
			
			if (minutos < 10) {
				minutos = "0" + minutos;
			}
			
			hourFinal = hora + ":" + minutos;
		}
	}
	return hourFinal;
}

function isDate1GreaterThanDate2(date1, date2) {
	//Format date1, date2: 'yyyy/mm/dd';
	//Also you can use valueOf instead getTime
	var flagIsGreater = false;
	if(new Date(date1).getTime() > new Date(date2).getTime()){
		flagIsGreater = true;
	}
	return flagIsGreater;
}

function isDate1LowerThanDate2(date1, date2) {
	//Format date1, date2: 'yyyy/mm/dd';
	var flagIsLower = false;
	if(new Date(date1).getTime() < new Date(date2).getTime()){
		flagIsLower = true;
	}
	return flagIsLower;
}

function isDate1EqualsThanDate2(date1, date2) {
	//Format date1, date2: 'yyyy/mm/dd';
	var flagIsEquals = false;
	if(new Date(date1).getTime() == new Date(date2).getTime()){
		flagIsEquals = true;
	}
	return flagIsEquals;
}

function getCurrentYear() {
	var fecha = new Date();
	var anio = fecha.getFullYear();
	return anio;
}

function getNextYear() {
	var anio = getCurrentYear();
	var anioSiguiente = Number(anio) + 1;
	return anioSiguiente;
}

function addEventElement(idElement, eventName, handlerMethod) {
	var element = $("#" + idElement);
	if (element) {
		element.on(eventName, handlerMethod);
	}
}

function addEventElementBySelector(selectorElement, eventName, handlerMethod) {
	var element = $(selectorElement);
	if (element) {
		element.on(eventName, handlerMethod);
	}
}

function removeAllEventsElement(idElement) {
	var element = $("#" + idElement);
	if (element) {
		element.off();
	}
}

function removeAllEventsElementBySelector(selectorElement) {
	var element = $(selectorElement);
	if (element) {
		element.off();
	}
}

function removeAttributeElementBySelector(selectorElement, attributeElement) {
	var element = $(selectorElement);
	if (element) {
		element.removeAttr(attributeElement);
	}
}

function disabledElement(idElement) {
	var element = $("#" + idElement);
	if (element) {
		element.prop("disabled", true);
	}
}

function disabledElementForClass(classElement) {
	var element = $("." + classElement);
	if (element) {
		element.prop("disabled", true);
	}
}

function enabledElementForClass(classElement) {
	var element = $("." + classElement);
	if (element) {
		element.prop("disabled", false);
	}
}

function enabledElement(idElement) {
	var element = $("#" + idElement);
	if (element) {
		element.prop("disabled", false);
	}
}

function ckeckElement(idElement) {
	var element = $("#" + idElement);
	if (element) {
		element.prop("checked", true);
	}
}

function ckeckElementForClass(classElement) {
	var element = $("." + classElement);
	if (element) {
		element.prop("checked", true);
	}
}

function uncheckElement(idElement) {
	var element = $("#" + idElement);
	if (element) {
		element.prop("checked", false);
	}
}

function uncheckElementForClass(classElement) {
	var element = $("." + classElement);
	if (element) {
		element.prop("checked", false);
	}
}

function getValueInputText(idElement) {
	var element = $("#" + idElement);
	var valueInputText = "";
	if (element && typeof element.val() !== "undefined") {
		valueInputText = element.val();
	}
	return valueInputText;
}

function getUpperCaseValueInputText(idElement) {
	var element = $("#" + idElement);
	var valueInputText = "";
	if (element && typeof element.val() !== "undefined") {
		valueInputText = element.val().toUpperCase();
	}
	return valueInputText;
}

function getTextSelect(idElement) {
	var element = $("#" + idElement + " option:selected");
	var txtSelect = "";
	if (element && typeof element.text() !== "undefined") {
		txtSelect = element.text();
	}
	return txtSelect;
}

function getUpperCaseTextSelect(idElement) {
	var element = $("#" + idElement + " option:selected");
	var txtSelect = "";
	if (element && typeof element.text() !== "undefined") {
		txtSelect = element.text().toUpperCase();
	}
	return txtSelect;
}

function getValueStyleElementBySelector(selectorText, specificRuleCss, property) {
	var styleValue = "";
	if (isBrowserInternetExplorer()) {
		styleValue = getValuePropertyOfRuleStyle(specificRuleCss);
		if (styleValue != "") {
			styleValue = trimText(styleValue.toLowerCase());
			property = property.toLowerCase() + ":";
			var flagContainProperty = styleValue.indexOf(property);
			if (flagContainProperty >= 0) {
				var styleValueArray = styleValue.split(property);
				if (styleValueArray.length > 1) {
					var styleValueArrayAuxiliar = styleValueArray[1].split(";");
					if (styleValueArrayAuxiliar.length > 0) {
						styleValue = trimText(styleValueArrayAuxiliar[0]);
					}
				}
			}
		}
	}
	else {
		var element = $(selectorText);
		if (element) {
			styleValue = element.css(property);
		}
	}
	return styleValue;
}

function getValuePropertyOfRuleStyle(specificRuleCss) {
	//Tener en cuenta que IE modifica el orden de las reglas
	//.container.viaticoModalContainer ---> .viaticoModalContainer.container
	var styleSheetArray = document.styleSheets;
	var cssText = "";
	for (var i = 0; i < styleSheetArray.length; i++) {
		var mySheet = document.styleSheets[i];
		var myRules = mySheet.cssRules ? mySheet.cssRules : mySheet.rules;
		for (var j = 0; j < myRules.length; j++) {
			if (typeof myRules[j].selectorText !== "undefined" && myRules[j].selectorText.toLowerCase() == specificRuleCss.toLowerCase()) {
				cssText = (myRules[j].cssText) ? myRules[j].cssText : myRules[j].style.cssText;
				return cssText;
			}
		}
	}
	return cssText;
}

function getStyleDocument(className) {
	var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
	for (var x = 0; x < classes.length; x++) {
		if (classes[x].selectorText == className) {
			(classes[x].cssText) ? alert(classes[x].cssText) : alert(classes[x].style.cssText);
		}
	}
}

function getValueInputSelect(idElement, valueDefaultText) {
	var element = $("#" + idElement);
	var valueInputText = "";
	if (element && typeof element.val() !== "undefined") {
		valueInputText = element.val();
	}
	else {
		valueInputText = valueDefaultText;
	}
	return valueInputText;
}

function getDataAttributeSelect(idElement, attributeElement) {
	var selectElement = document.getElementById(idElement);
	var dataAttribute = "";
	if (selectElement) {
		dataAttribute = selectElement.options[selectElement.selectedIndex].getAttribute(attributeElement);
	}
	return dataAttribute;
}

function setTituloPage(tituloPage) {
	$(document).attr("title", tituloPage);
}

function setValueInputText(idElement, textValue) {
	var element = $("#" + idElement);
	if (element) {
		element.val(textValue);
	}
}

function clearDateTimePicker(idElement) {
	var element = $("#" + idElement);
	if (element != undefined && element != null) {
		var dtp = e.data('DateTimePicker');
		if (dtp != undefined && dtp != null) {
			dtp.date(null);
		}
	}
}

function setValueInputTextClass(classElement, textValue) {
	var element = $("." + classElement);
	if (element) {
		element.val(textValue);
	}
}

function setTextLabel(idElement, textValue) {
	var element = $("#" + idElement);
	if (element) {
		element.text(textValue);
	}
}

function setHtmlElement(idElement, htmlText) {
	console.log("setHtmlElement");
	var element = $("#" + idElement);
	if (element) {
		element.html(htmlText);
	}
}

function setHtmlElementClass(classElement, htmlText) {
	var element = $("." + classElement);
	if (element) {
		element.html(htmlText);
	}
}

function setStyleElement(idElement, property, valueProperty) {
	var element = $("#" + idElement);
	if (element) {
		element.css(property, valueProperty);
	}
}

function setValueCheckbox(idElement, value) {
	var element = $("#" + idElement);
	if (element) {
		element.prop("checked", value);
	}
}

function setSrcImageElement(idElement, urlAbsolute) {
	var element = $("#" + idElement);
	if (element) {
		element.attr("src", urlAbsolute);
	}
}

function upperCaseText(text) {
	var valueText = "";
	if (text != null && text != "null" && text != "undefined") {
		valueText = text.toUpperCase();
	}
	return valueText;
}

function removeClassByClass(classElement, classRemove) {
	var element = $("." + classElement);
	if (element) {
		element.removeClass(classRemove);
	}
}

function showElement(idElement) {
	console.log("showElement");
	var element = $("#" + idElement);
	if (element) {
		element.css("display", "block");
	}
}

function showElementByClass(classElement) {
	var element = $("." + classElement);
	if (element) {
		element.css("display", "block");
	}
}

function esVisible(idElement){
	return $("#" + idElement).is(":visible");
}

function showModalElement(idModalElement) {
    var modalElement = $("#" + idModalElement);
    if (modalElement) {
        modalElement.modal("show");
    }
}

function hideElement(idElement) {
	var element = $("#" + idElement);
	if (element) {
		element.css("display", "none");
	}
}

function hideElementByClass(classElement) {
	var element = $("." + classElement);
	if (element) {
		element.css("display", "none");
	}
}

function hideModalElement(idModalElement) {
    var modalElement = $("#" + idModalElement);
    if (modalElement) {
        modalElement.modal("hide");
    }
}

function consoleBrowser(consoleText) {
	if (window.console && window.console.log) {
		console.log(consoleText);
	}
}

function trimText(textValue) {
	if (textValue != null) {
		return textValue.replace(/^\s+|\s+$/g, '');
	}
}

function redondearNumeros(numeroDecimales, numero) {
	var numeroRedondeado = Math.round(numero*Math.pow(10, numeroDecimales))/Math.pow(10, numeroDecimales);
	return numeroRedondeado;
}

function validarNumberDecimalPositiveInput(idInputText) {
	setTimeout(function() {
		var inputText = getValueInputText(idInputText);
		var patronNumeroPositivo = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
		if (!patronNumeroPositivo.test(inputText)) {
			setValueInputText(idInputText, "");
		}
	}, 200);
}

function validarCharacterAlfaNumericoInput(idInputText) {
	setTimeout(function() {
		var inputText = getValueInputText(idInputText);
		var patronAlfaNumerico = /^[a-z0-9]+$/i;
		if (!patronAlfaNumerico.test(inputText)) {
			setValueInputText(idInputText, "");
		}
	}, 200);
}

function validarCharacterAlfaNumericoInputUUOOColaborador(idInputText, idInputTextOld) {
	setTimeout(function() {
		var inputText = getValueInputText(idInputText);
		var patronAlfaNumerico = /^[a-z0-9]+$/i;
		if (!patronAlfaNumerico.test(inputText)) {
			setValueInputText(idInputText, getValueInputText(idInputTextOld));
		}
	}, 200);
}

function validarCharacterInput(idInputText) {
	setTimeout(function() {
		var inputText = getValueInputText(idInputText);
		var patronAlfaNumerico = /^[a-z]\s+$/i;
		if (!patronAlfaNumerico.test(inputText)) {
			setValueInputText(idInputText, "");
		}
	}, 200);
}

var validarCharacterLetterWithEspacio = function(event){
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || keyCode == 241 || keyCode == 32 || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
		return true;
	}
	return false;
}

var validarCharacterNumeric = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || (keyCode >= 48 && keyCode <= 57)) {
		return true;
	}
	return false;
}

var validarCharacterAlfanumeric = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || keyCode == 241 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
		return true;
	}
	return false;
}

var validarCharacterAlfanumericWithEspacio = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || keyCode == 241 || keyCode == 32 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
		return true;
	}
	return false;
}

var validarCharacterCurrency = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || keyCode == 46 || (keyCode >= 48 && keyCode <= 57)) {
		return true;
	}
	return false;
}

var validarCharacterHour = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || (keyCode >= 48 && keyCode <= 58)) {
		return true;
	}
	return false;
}

var validarCharacterDate = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || (keyCode >= 47 && keyCode <= 57)) {
		return true;
	}
	return false;
}

var validarCharacterDestino = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || keyCode == 241 || keyCode == 32 || keyCode == 45 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
		return true;
	}
	return false;
}

var validarCharacterTextArea = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 13) {
		return false;
	}
	return true;
}

var validarCharacterConceptoViatico = function(event) {
	var keyCode = window.event ? event.keyCode : event.which;
	if (keyCode == 8 || keyCode == 32 || keyCode == 45 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
		return true;
	}
	return false;
}

function isValidoFormatDate(valueDate) {
	var formatDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
	var isValid = formatDate.test(valueDate);
	if (isValid && (valueDate.indexOf("-") > -1)) {
		isValid = false;
	}
    return isValid;
}

function isValidoFormatHour(valueHour) {
	var formatHour = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
	var isValid = formatHour.test(valueHour);
    return isValid;
}

function isValidoFormatYear(valueYear) {
	var formatYear = /^([0-9][0-9][0-9][0-9])?$/;
	var isValid = formatYear.test(valueYear);
    return isValid;
}

function setCookie(c_name, value) {
	
	var exdate = new Date();
	var time = exdate.getTime();
	
	if(value != null) {
		time = time + 3600000;
	}
	else {
		time = time - 3600000;
	}
	exdate.setTime(time);
	//var c_value = escape(value) + "; expires=" + exdate.toUTCString() + "; domain=" + document.domain + "; path=/";
	var c_value;
	c_value = escape(value) + "; expires=" + exdate.toUTCString() + contextPathUrl + "/";
	document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
	
	var i,x,y,ARRcookies = document.cookie.split(";");
	for (i=0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g,"");
		if (x == c_name) {
			return unescape(y);
		}
	}
	return null;
}

function deleteCookie(key) {
	setCookie(key, null);
}

function obtenerHeightJqGridDiv(heightJqGrid, numRowsTituloTable, flagWithTituloJqGrid) {
	
	var heightJqGridTotal = heightJqGrid;
	var heightAdicionalJqGrid = 64;
	var heightTituloJqGrid = 33;
	
	if (numRowsTituloTable == 1 || numRowsTituloTable == 2) {
		heightAdicionalJqGrid = 64 + 5*(numRowsTituloTable - 1); //Este factor solo funciona para 1 y 2
	}
	heightJqGridTotal += heightAdicionalJqGrid;
	
	if (flagWithTituloJqGrid) {
		heightJqGridTotal += heightTituloJqGrid;
	}
	
	return heightJqGridTotal;
}

function isVerticalScrollbarVisible() {
	var flagVisible = false;
	var heightBody = $("body").height();
	var heightWindows = $(window).height();
	if (heightBody > heightWindows) {
		flagVisible = true;
	}
	return flagVisible;
}

function isBrowserInternetExplorer() {
	var flagIsInternetExplorer = false;
	var userAgentClient = navigator.userAgent;
	var patronNavegador = new Array();
	patronNavegador[0] = /MSIE/;
	patronNavegador[1] = /Trident/;
	
	if (patronNavegador[0].test(userAgentClient) || patronNavegador[1].test(userAgentClient)) {
		flagIsInternetExplorer = true;
	}
	return flagIsInternetExplorer;
}

function showTooltip() {
	var element = $("[data-toggle='tooltip']");
	if (element) {
		element.tooltip();
	}
}

function removeDuplicateComponents() {
	if (isBrowserInternetExplorer()) {
		var elementsHtml = getElementsByClassName("divHtml5ComponentViaticoClass");
		if (elementsHtml) {
			for (var x = 0; x < elementsHtml.length; x++) {
				var elementHtml = elementsHtml[x];
				if (elementHtml && elementHtml.parentNode) {
					elementHtml.parentNode.removeChild(elementHtml);
				}
			}
		}
		removeClassByClass("divIeComponentViaticoClass", "divIeComponentViaticoClass");
	}
	else {
		$(".divIeComponentViaticoClass").remove();
	}
}

function removeClassCheckbox() {
	if (!isBrowserInternetExplorer()) {
		var element = $(".checkboxSelectAllDivClase .checkboxSelectAllInputClase.checkboxIeComponentViaticoClase");
		if (element) {
			element.removeClass("checkboxIeComponentViaticoClase");
		}
	}
}

function getElementsByClassName(className) {
	//classname: divHtml5ComponentViaticoClass
	//Nota: el compilador tienen problemas despues de 580 lines aprox.
	//IE9: document.getElementsByClassName("divHtml5ComponentViaticoClass");
    var elements = [];
    var re = new RegExp("(^| )" + className + "( |$)");
    var els = document.body.getElementsByTagName("*");
    for (var i = 0, j = els.length; i < j; i++) {
		if (re.test(els[i].className)) {
			elements.push(els[i]);
		}
	}
    return elements;
}

function triggerResizeEvent() {
	if (!isBrowserInternetExplorer()) {
		setTimeout(function() {
			window.dispatchEvent(new Event("resize"));
		}, 200);
	}
	else {
		setTimeout(function() {
			$(window).trigger("resize");
		}, 200);
	}
}

function triggerResizeEventSlow() {
	if (!isBrowserInternetExplorer()) {
		setTimeout(function() {
			window.dispatchEvent(new Event("resize"));
		}, 1000);
	}
	else {
		setTimeout(function() {
			$(window).trigger("resize");
		}, 1000);
	}
}

function triggerResizeEventTooSlow() {
	if (!isBrowserInternetExplorer()) {
		setTimeout(function() {
			window.dispatchEvent(new Event("resize"));
		}, 4000);
	}
	else {
		setTimeout(function() {
			$(window).trigger("resize");
		}, 4000);
	}
}

function sendDataMethodPost(idName, urlController, action, valueVariableSendPost, text) {
	var  formEnvio = "<form id='"+idName+"'  name='"+idName+"'  method='POST' action='"+urlController+".htm'>" +
	"<input type='hidden' name='action' id='action' value='"+action+"'></input>"+
	"<input type='hidden' name='variableSendPost' id='variableSendPost' value='"+valueVariableSendPost+"'></input>"+
	"<a class=\"jqGridViaticoLinkClass\" onclick=\"javascript:clickSendDataMethodPost('"+idName+"');\">"+text+"</a></form>";
	return formEnvio;
}

function clickSendDataMethodPost(idName){
	$("#"+idName).submit();
}

function initSelectOption(idSelect, optionPosicion){
	$("#"+idSelect).prop("selectedIndex",optionPosicion);
}

function initSelectValue(idSelect, value){
	 $('#'+idSelect+' > option[value="'+value+'"]').attr('selected', 'selected');
}


function  sendPostImprimir(idName, url, action ,varibleSendPost, text){
	var  formEnvio = "<form id='"+idName+"'  name='"+idName+"'  method='POST' action='"+url+".htm'>" +
	"<input type='hidden' name='action' id='action' value='"+action+"'></input>"+
	"<input type='hidden' name='varibleImprimirSendPost' id='varibleImprimirSendPost' value='"+varibleSendPost+"'></input>"+
	"<a class=\"jqGridViaticoLinkClass\" onclick=\"javascript:clickEventImprimir('"+idName+"');\"><img src='"+contextPathUrl+"/image/common/lupa.png' width='50%' height='50%' ></a></form>";
	return formEnvio;
}

function clickEventImprimir(idName){
	$("#"+idName).submit();
}

function consoleLog(consoleText) {
	if (window.console && window.console.log) {
		console.log(consoleText);
	}
}

function getValueText(idElement) {
	var element = $("#" + idElement);
	var valueText = "";
	if (element && typeof element.text() !== "undefined") {
		valueText = element.text();
	}
	return valueText;
}

function afterElement(idElement, codeHtml){
	$("#"+idElement).after(codeHtml);
}

function removeElement(idElement){	
	$("#"+idElement).remove();
}

function existsElement(idElement){	
	return $("#"+idElement).length>0;
}



/*
function validarNumberWithCifras(e, valInicial, nEntero, nDecimal) {
    var obj = e.srcElement || e.target;
    var tecla_codigo = (document.all) ? e.keyCode : e.which;
    var tecla_valor = String.fromCharCode(tecla_codigo);
    var patron2 = /[\d.]/;
    var control = (tecla_codigo === 46 && (/[.]/).test(obj.value)) ? false : true;
    var existePto = (/[.]/).test(obj.value);

    //el tab
    if (tecla_codigo === 8)
        return true;

    if (valInicial !== obj.value) {
        var TControl = obj.value.length;
        if (existePto === false && tecla_codigo !== 46) {
            if (TControl === nEntero) {
                obj.value = obj.value + ".";
            }
        }

        if (existePto === true) {
            var subVal = obj.value.substring(obj.value.indexOf(".") + 1, obj.value.length);

            if (subVal.length > 1) {
                return false;
            }
        }

        return patron2.test(tecla_valor) && control;
    }
    else {
        if (valInicial === obj.value) {
            obj.value = '';
        }
        return patron2.test(tecla_valor) && control;
    }
}

*/


// comunes - registro viaticos
function formToObject(formID, incluirDisabled) {
	
	// convierte todos los campos de un formulario a un objeto javascript.
	// se usa para poder deserializar directamente con los beans view object 
	
	var formularioObject = {};
	var formularioArray = $('#' + formID).serializeArray();

	$.each(formularioArray, function(i, v) {
		formularioObject[v.name] = v.value;
	});

	if ( estaDefinido( incluirDisabled ) && incluirDisabled ) {
		$( '#' + formID ).find( 'input:disabled, select:disabled' ).each(function(i, v) {
			formularioObject[v.name] = v.value;
		});
	}

	return formularioObject;
}

function huboErrorAjax(result) {
	return !estaDefinido( result ) || result.error == 'si';
}

function handleErrorAjax(result) {	
	
	// mostrar un error genérico, sólo para indicar que hubo un error
	showModalElement("divErrorAplicativo");

	consoleLog( 'error app -> ' + result.msgError );
}

function handleError(error) {
	consoleLog( 'error -> status: ' + error.status + ', readyState: ' + error.readyState + ', statusText: ' + error.statusText );
}

function isNullOrUndefined( valor ) {
	return valor == null || ( typeof valor == 'undefined' );
}

function estaDefinido( valor ) {
	return !isNullOrUndefined( valor );	
}

function getTrimValue( inputQuery ) {
	return $.trim( $( inputQuery ).val() );
}

function toNumero( valor, defaultValue ) {
	// valor por default en caso que no valor no sea número
	var defaultValueResult = !esNumero( defaultValue ) ? 0.0 : Number( defaultValue );

	return !esNumero( valor ) ? defaultValueResult : Number( valor );
}

function esNumero( valor ) {
	// que no sea null, ni blanco, ni indefinido y que pase la validación de jquery isNumeric
	return ( estaDefinido( valor ) && valor != '' && $.isNumeric(  valor ) ) || ( typeof valor == 'number' );	
}
 
function showMensaje( mensaje, functionAceptar ) {
	return showMensaje( mensaje, functionAceptar, 'exito' );
}

function showMensajeError( mensaje, functionAceptar ) {
	return showMensaje( mensaje, functionAceptar, 'error' );
}

function showMensaje( mensaje, functionAceptar, tipoMensaje ) {

	// por si se desea manejar los colores de bootstrap
	if (tipoMensaje == 'exito' || tipoMensaje == 'success') {
		$('#divPopupPanelClass').prop('class', 'panel panel-primary');
	} else if (tipoMensaje == 'error' || tipoMensaje == 'danger') {
		$('#divPopupPanelClass').prop('class', 'panel panel-danger');
	} else if (tipoMensaje == 'alert' || tipoMensaje == 'warning') {
		$('#divPopupPanelClass').prop('class', 'panel panel-primary');
	} else {
		$('#divPopupPanelClass').prop('class', 'panel panel-primary');
	}

	var mensajeTrim = $.trim( mensaje );

	if ( mensajeTrim.length < 50 ) {
		$('#divPopupContainerClass').prop('class', 'container viaticoMensajeConfirmacionContainer verticalAlignmentHelper');
	} else {
		$('#divPopupContainerClass').prop('class', 'container viaticoMensajeConfirmacionContainerBigger verticalAlignmentHelper');
	}
	
	//JMCR-ME
	//if ( mensajeTrim.length < 150 ) {
	//	$('#divPopupMensaje').addClass('popup-alineado-left');
	//} else {
		$('#divPopupMensaje').addClass('popup-alineado-justify');		
	//}
	//JMCR-ME
		
	if ($('#divModalPopup').length) {

		// si se tiene el div de popup
		$('#divPopupMensaje').html(mensaje);

		$('#divModalPopup').modal({
			keyboard : false
		});

		$('#btnPopupAceptar').off('click');
		if ( estaDefinido( functionAceptar ) ) {
			$('#btnPopupAceptar').on('click', functionAceptar);
		}
		
		// pone el foco el boton aceptar, y de paso fix el bug que deja el foco  
		// en algún control de la pantalla padre y puede efectuar operaciones con él.
		setTimeout( function() {
			$( '#btnPopupAceptar' ).focus();

			// por bug de IE
			if ( isBrowserInternetExplorer() ) {
				triggerResizeEvent();
			}

		}, 200 );		

	} else {
		// sino imprimir un simple alert
		alert(mensaje);
	}

}

function showMensajeEmbebido( mensaje, functionAceptar ) {
	return showMensajeEmbebido( mensaje, functionAceptar, 'exito' );
}

function showMensajeEmbebido( mensaje, functionAceptar, tipoMensaje ) {

	// por si se desea manejar los colores de bootstrap
	if (tipoMensaje == 'exito' || tipoMensaje == 'success') {
		$('#divPopupPanelClassEmbebido').prop('class', 'panel panel-primary');
	} else if (tipoMensaje == 'error' || tipoMensaje == 'danger') {
		$('#divPopupPanelClassEmbebido').prop('class', 'panel panel-danger');
	} else if (tipoMensaje == 'alert' || tipoMensaje == 'warning') {
		$('#divPopupPanelClassEmbebido').prop('class', 'panel panel-primary');
	} else {
		$('#divPopupPanelClassEmbebido').prop('class', 'panel panel-primary');
	}

	var mensajeTrim = $.trim( mensaje );

	if ( mensajeTrim.length < 50 ) {
		$('#divPopupContainerClassEmbebido').prop('class', 'container viaticoMensajeConfirmacionContainer verticalAlignmentHelper');
	} else {
		$('#divPopupContainerClassEmbebido').prop('class', 'container viaticoMensajeConfirmacionContainerBigger verticalAlignmentHelper');
	}

	//JMCR-ME
	//if ( mensajeTrim.length < 150 ) {
	//	$('#divPopupMensajeEmbebido').addClass('popup-alineado-left');
	//} else {
		$('#divPopupMensajeEmbebido').addClass('popup-alineado-justify');
	//}
	//JMCR-ME

	if ($('#divModalPopupEmbebido').length) {

		// si se tiene el div de popup
		$('#divPopupMensajeEmbebido').html(mensaje);

		$('#divModalPopupEmbebido').modal({
			keyboard : false
		});

		$('#btnPopupAceptarEmbebido').off('click');
		if ( estaDefinido( functionAceptar ) ) {
			$('#btnPopupAceptarEmbebido').on('click', functionAceptar);
		}

		// pone el foco el boton aceptar, y de paso fix el bug que deja el foco
		// en algún control de la pantalla padre y puede efectuar operaciones con él.
		setTimeout( function() {
			$( '#btnPopupAceptarEmbebido' ).focus();

			// por bug de IE
			if ( isBrowserInternetExplorer() ) {
				triggerResizeEvent();
			}

		}, 200 );

	} else {
		// sino imprimir un simple alert
		alert(mensaje);
	}
}

function showMensajeConfirm( mensaje, functionAceptar, functionCancelar ) {

	var mensajeTrim = $.trim( mensaje );

	if ( mensajeTrim.length < 50 ) {
		$('#divPopupContainerClassSINO').prop('class', 'container viaticoMensajeConfirmacionContainer verticalAlignmentHelper');
	} else {
		$('#divPopupContainerClassSINO').prop('class', 'container viaticoMensajeConfirmacionContainerBigger verticalAlignmentHelper');
	}

	if ( mensajeTrim.length < 150 ) {
		$('#divPopupMensajeSINO').addClass('popup-alineado-left');
	} else {
		$('#divPopupMensajeSINO').addClass('popup-alineado-justify');		
	}
	
	$('#divPopupPanelClassSINO').prop('class', 'panel panel-primary');

	if ($('#divModalPopupSINO').length) {

		// si se tiene el div de popup
		$('#divPopupMensajeSINO').html( mensajeTrim );

		$('#divModalPopupSINO').modal({
			keyboard : false
		});

		$('#btnPopupAceptarSINO').off('click');
		if ( estaDefinido( functionAceptar ) ) {
			$('#btnPopupAceptarSINO').on('click', functionAceptar);
		}

		$('#btnPopupCancelarSINO').off('click');
		if ( estaDefinido( functionCancelar ) ) {
			$('#btnPopupCancelarSINO').on('click', functionCancelar);
		}
		
		// pone el foco el boton aceptar, y de paso fix el bug que deja el foco  
		// en algún control de la pantalla padre y puede efectuar operaciones con él.
		setTimeout( function() {
			$( '#btnPopupAceptarSINO' ).focus();

			// por bug de IE
			if ( isBrowserInternetExplorer() ) {
				triggerResizeEvent();
			}
						
		}, 200 );			

	}

}

function roundComasMilesString( valor, digitos ) {
	var val = roundString( valor, digitos );

	var parts = val.toString().split(".");

	// formato coma como separador de miles, punto como separador decimal 
	return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function roundString( valor, digitos ) {
	// redondear
	var round = redondearNumeros( digitos, parseFloat( valor ) );

	// formatear completando el nro de digitos en los decimales
	var result = round.toFixed( digitos ) + '';

	// retorna una cadena formateada
	return result;
}

function roundNumero( valor, digitos ) {
	// redondear
	var round = redondearNumeros( digitos, parseFloat( valor ) );

	// retorna un numer
	return round;
}

function recortarDigitosEnteros( numeroString, maxDigEnteros ) {

	if ( !estaDefinido( numeroString )  ) return numeroString;

	var num = (numeroString + '').replace(/,/g , '');

	var posComa = num.indexOf( '.' );

	if ( posComa >= 0 ) {

		var izq = num.substring( 0, posComa );
		var der = num.substring( posComa + 1, num.length );

		if ( izq.length > maxDigEnteros ) {
			izq = izq.substring( 0, maxDigEnteros );
		}

		num = izq + '.' + der;

	} else {

		if ( num.length > maxDigEnteros ) {
			num = num.substring( 0, maxDigEnteros );
		}

	}

	return num;
}

function darFoco( queryControl ) {
	if ( isBrowserInternetExplorer() ) {
		setTimeout(function() {
			$( queryControl ).focus();
		}, 50);
	} else {
		$( queryControl ).focus();
	}
}

// operaciones con fechas, usa métodos estándares de sunat, importar -> /a/js/js.js (checkdate y comparafecha)
function esFechaValida( fecha ) {
	var fechaTrim = $.trim( fecha ) ;
	return fechaTrim != '' && checkdate( fechaTrim );
}

function esFechaMayor( fecha1, fecha2 ) {
	var result = compararFechas( fecha1, fecha2 );
	return result == 1;
}

function esFechaMayorIgual( fecha1, fecha2 ) {
	var result = compararFechas( fecha1, fecha2 );
	return result == 1 || result == 0;
}

function esFechaMayorAnio( fecha1) {
	var d = '31/12/' + new Date().getFullYear();
	var result = compararFechas( fecha1, d);
	//alert(fecha1 + " " + d + " " + result);
	return result == 1;
}

function esFechaMenor( fecha1, fecha2 ) {
	var result = compararFechas( fecha1, fecha2 );
	return result == 2;
}

function esFechaMenorIgual( fecha1, fecha2 ) {
	var result = compararFechas( fecha1, fecha2 );
	return result == 2 || result == 0;
}

function esFechaIgual( fecha1, fecha2 ) {
	var result = compararFechas( fecha1, fecha2 );
	return result == 0;
}

function compararFechas( fecha1, fecha2 ) {
	// se crea un wrapper por un bug en el compara fecha de sunat

	/* -1: err, 1: f1>f2, 2: f1<f2, 0: f1=f2 */
	return comparafecha( $.trim( fecha1 ), $.trim( fecha2 ) ); // funcion de sunat a/js/js.js
}

function compararHoras( hora1, hora2 ) {

	/* -1: err, 1: f1>f2, 2: f1<f2, 0: f1=f2 */

	// validar que venga data
	if ( !estaDefinido( hora1 ) || !estaDefinido( hora2 ) ) return -1;

	var h1Split = $.trim( hora1 ).split( ':' );
	var h2Split = $.trim( hora2 ).split( ':' );

	// validar formato: validar que tenga un solo ':'
	if ( h1Split == null || h1Split.length != 2 ) return -1;
	if ( h2Split == null || h2Split.length != 2 ) return -1;

	// pasarlo todo a minutos
	var h1 = toNumero( h1Split[0] ) * 60 + toNumero( h1Split[1] );
	var h2 = toNumero( h2Split[0] ) * 60 + toNumero( h2Split[1] );

	if ( h1 >  h2 ) return 1;	// 1
	if ( h1 <  h2 ) return 2;	// 2

	return 0;
}

function convertirEnMinutos( horaHHMM ) {

	// validar que venga data
	if ( !estaDefinido( horaHHMM ) ) return -1;

	var horaSplit = $.trim( horaHHMM ).split( ':' );
	// validar formato: validar que tenga un solo ':'
	if ( horaSplit == null || horaSplit.length != 2 ) return -1;

	// pasarlo todo a minutos
	var minutos = toNumero( horaSplit[0] ) * 60 + toNumero( horaSplit[1] );

	return minutos;
}

function roundDiferenciaHoras( horaMayorHHMM, horaMenorHHMM, precision ) {
	// PRE: horaMayorHHMM > horaMenorHHMM (en formato HH:MM )

	// convertir a minutos
	var mayorMins = convertirEnMinutos( horaMayorHHMM );
	var menorMins = convertirEnMinutos( horaMenorHHMM );

	// convertir a horas y redondear a 1 digito
	var roundDifHoras = roundString( ( mayorMins - menorMins ) / 60.0, precision );

	return roundDifHoras;
}


// para manejar un sólo evento con las fechas (por el problema de IE), 
// Si una fecha es incorrecta, en IE8 automáticamente elimina el contenido de la caja de texto 
function addEventElementFechaIE( idElement, eventName, handlerMethod  ) {

	addEventElement( idElement, eventName, function() {
		// valida que fecha sea valida, sino la borra. al final invoca a handlerMethod
		clearFechaInvalidaIE( idElement, handlerMethod );
	} );
}

function addEventElementHoraIE( idElement, eventName, handlerMethod  ) {

	addEventElement( idElement, eventName, function() {
		// valida que fecha sea valida, sino la borra. al final invoca a handlerMethod
		clearHoraInvalidaIE( idElement, handlerMethod );
	} );
}

function clearFechaInvalidaIE( idElement, handlerMethod ) {

	// si es IE
	if ( isBrowserInternetExplorer() ) {

		// blanquear si no es fecha valida
		if ( !esFechaValida( $( '#' + idElement ).val() ) ) {
			$( '#' + idElement ).val( '' );
		}

		// invocar al metodo handlerMethod
		if ( estaDefinido( handlerMethod ) ) {
			handlerMethod();
		}
	}

}

function acomodarFormatearHora( valorHora ) {
	
	var hora = $.trim( valorHora );
	var result = hora;
	
	if ( hora.length == 1 ) {
		result = '0' + hora + ':00';			
	} else if ( hora.length == 2 ) {
		result = hora + ':00';
	} else if ( hora.length == 3 ) {
		result = hora.substring( 0, 2 ) + ':0' + hora.substring( 2, 3 );
	} else if ( hora.length == 4 ) {
		result = hora.substring( 0, 2 ) + ':' + hora.substring( 2, 4 );
	} 

	return $.trim( result );
}


function getHoraActualString(){
	var horaActual = new Date();
	var horaActualString = (horaActual.getHours()<=9?("0"+horaActual.getHours()):(horaActual.getHours()))+":"+(horaActual.getMinutes()<=9?("0"+horaActual.getMinutes()):(horaActual.getMinutes()));
	return horaActualString;
}


function clearHoraInvalidaIE( idElement, handlerMethod ) {

	// si es IE
	if ( isBrowserInternetExplorer() ) {

		// hacer lo posible para darle formato válido
		var hora = $( '#' + idElement ).val();
		
		$( '#' + idElement ).val( acomodarFormatearHora( hora ) );

		// blanquear si no es hora valida
		if ( !isValidoFormatHour( $( '#' + idElement ).val() ) ) {
			$( '#' + idElement ).val( '' );
		}

		// invocar al metodo handlerMethod
		if ( estaDefinido( handlerMethod ) ) {
			handlerMethod();
		}
	}

}


function validarFirstLetterAfterNumber(serie){
	var input = serie;

if($.trim(input) != "" ){
		var primerCaracter = input.substring(0,1);
		var formatter = /[a-zA-Z]/;
		var estadoLetra = formatter.test(primerCaracter);
			if(estadoLetra){
					if(input.length > 1 ){
						input = input.substring(1, input.length);
						var formatter = /[0-9]/;
						var estadoDigito = formatter.test(input);
						consoleLog("estadoDigito: " + estadoDigito);
						if(estadoDigito){
							return true;
						}else{
							return false;
						}
					}else if(input.length == 1){
						consoleLog("samullllllllllllll");
						var formatter = /[A-Za-z0-9]/;
						var alfaNumeric = formatter.test(input);
						if(alfaNumeric){
							return true;
						}else{
							return false;
						}
					}else if(input.length == 0 ){
						return false;
					}
			}else{	
				
				input = input.substring(0, input.length);
				var formatter = /[0-9]/;
				var estadoDigito = formatter.test(input);
					consoleLog("estadoDigito: " + estadoDigito);
					if(estadoDigito){
						return true;
					}else{
						return false;
					}
			
			}
	}else{
		return true;
	}

}