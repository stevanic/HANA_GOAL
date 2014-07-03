sap.ui.jsview("wc2014ui.home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf wc2014ui.home
	*/ 
	getControllerName : function() {
		return "wc2014ui.home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf wc2014ui.home
	*/ 
	createContent : function(oController) {
		sap.ui.getCore().loadLibrary("sap.ui.commons");
		sap.ui.getCore().loadLibrary("sap.viz");
		
		var jsonModel = oController.getData();
		var dataset = new sap.viz.ui5.data.FlattenedDataset({

            dimensions : [ {
              axis : 1,
              name : 'Minute',
              value : "{ID}"
            } ],

            measures : [ {
            	name : 'Total tweets',
                value : '{TOTAL}'
              } , {
            	name : 'Number of tweets mentioning GOAL , GOL etc',
            	value : '{NOOFGOALTWEETS}'
              } ],
            data : {
              path : "/tweetsPerMinute"
            }

          });
	  dataset.setModel(jsonModel);
      var line = new sap.viz.ui5.Line({
            id : "lineTotalTweets",
            width : "1600px",
            height : "400px",
            plotArea : {
            },
            title : {
              visible : true,
              text : 'Number of total tweets vs tweets about GOAL'
            },
            xAxis : {
              title : {
                visible : true
              },
            },
            dataset : dataset
          });
      
      var vLayout = new sap.ui.layout.VerticalLayout("TotalTweetVLayout", {
        	content: [line, new sap.ui.commons.HorizontalDivider({id: 'TotalTweetHorDivider'})]
        });
      return vLayout;
	}

});
