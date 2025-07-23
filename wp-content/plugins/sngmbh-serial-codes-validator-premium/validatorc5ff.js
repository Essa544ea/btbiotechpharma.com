function SngmbhSerialcodesValidatorPremium(_myAjaxVar, _basicObj) {
	let _self = this;
	let BASIC = _basicObj;
	var $ = jQuery;
	let myAjax = _myAjaxVar;
	var _prefix = myAjax.divPrefix;

	var FATAL_ERROR = false;

	var DIV_ID = myAjax.divId;
	var DIV_MAIN = null;
	var DATEN_URL = myAjax.url;
	var PARAS = {};
	var _OPTIONS = {};

	function macheAjax(url, funcSuccess, funcError, doNotShowSpinner){
		return BASIC._macheAjax(url, funcSuccess, funcError, doNotShowSpinner);
	};

	function init() {
		PARAS = BASIC._basics_ermittelURLParameter();
		DIV_MAIN = BASIC._getDIV_MAIN();
		LAYOUT = BASIC._getLAYOUT();
		let clone = Object.assign( Object.create( Object.getPrototypeOf(LAYOUT)), LAYOUT);
		LAYOUT.renderEingabeMaske = function() {
			clone.renderEingabeMaske();
		}
	}

	function ret() {
		return {};
	}
	init();
	return ret();
}