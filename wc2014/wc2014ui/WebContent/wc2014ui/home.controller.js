sap.ui.controller("wc2014ui.home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf wc2014ui.home
*/
	onInit: function() {
	},
	
	getData: function() {
		var jsonModel = new sap.ui.model.json.JSONModel();
        var url = '../../TweetsPerMinute.xsjs'; 
        jsonModel.loadData(url, null, false, "GET");
        //sap.ui.getCore().setModel(jsonModel);
        return jsonModel;
	},
	
	getGrowthData: function(newAlphaVal) {
		var jsonModel = new sap.ui.model.json.JSONModel();
        var url = '../../TwitterData.xsjs'; 
        if(newAlphaVal != null){
        	url = url + "?alpha=" + newAlphaVal;
            jsonModel.loadData(url, null , false, "GET");
        }
        else {
        	jsonModel.loadData(url, null, false, "GET");
        }
        return jsonModel;
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf wc2014ui.home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf wc2014ui.home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf wc2014ui.home
*/
//	onExit: function() {
//
//	}

});