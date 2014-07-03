sap.ui.jsview("wc2014ui.growthRate", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf wc2014ui.growthRate
	*/ 
	getControllerName : function() {
		return "wc2014ui.growthRate";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf wc2014ui.growthRate
	*/ 
	createContent : function(oController) {
		sap.ui.getCore().loadLibrary("sap.ui.commons");
		sap.ui.getCore().loadLibrary("sap.viz");
		sap.ui.getCore().loadLibrary("sap.ui.table");
		
		var jsonModel = oController.getGrowthData();
		sap.ui.getCore().setModel(jsonModel);
		var dataset = new sap.viz.ui5.data.FlattenedDataset({

            dimensions : [ {
              axis : 1,
              name : 'Minute',
              value : "{TIME}"
            } ],

            measures : [ {
            	name : 'Percentage of tweets mentioning GOAL - Raw',
                value : '{RAWDATA}'
              } , {
            	name : 'Percentage of tweets mentioning GOAL - Smooth',
            	value : '{OUTPUT}'
              } ],
            data : {
              path : "/tweets"
            }

          });
		var datasetRaw = new sap.viz.ui5.data.FlattenedDataset({

            dimensions : [ {
              axis : 1,
              name : 'Minute',
              value : "{TIME}"
            } ],

            measures : [ {
            	name : 'Percentage of tweets - Raw',
                value : '{RAWDATA}'
              } ],
            data : {
              path : "/tweets"
            }

          });
      var line = new sap.viz.ui5.Line({
            id : "line",
            width : "1600px",
            height : "400px",
            plotArea : {
            },
            title : {
              visible : true,
              text : 'Percentage of tweets'
            },
            xAxis : {
              title : {
                visible : true
              },
            },
            dataset : dataset
          });
      var datasetSmooth = new sap.viz.ui5.data.FlattenedDataset({

          dimensions : [ {
            axis : 1,
            name : 'Minute',
            value : "{TIME}"
          } ],

          measures : [ {
          	name : '',
            value : '{NOEXIST}'
          } , {
          	name : 'Percentage of tweets',
          	value : '{OUTPUT}'
            } ],
          data : {
            path : "/tweets"
          }

        });
      var lineRaw = new sap.viz.ui5.Line({
          id : "lineRaw",
          width : "1500px",
          height : "400px",
          plotArea : {
          },
          title : {
            visible : true,
            text : 'Percentage of tweets - Raw'
          },
          xAxis : {
            title : {
              visible : true
            },
          },
          dataset : datasetRaw
        });
      var lineSmooth = new sap.viz.ui5.Line({
          id : "lineSmooth",
          width : "1500px",
          height : "400px",
          plotArea : {
          },
          title : {
            visible : true,
            text : 'Percentage of tweets - Smooth'
          },
          xAxis : {
            title : {
              visible : true
            },
          },
          dataset : datasetSmooth
        });
      var sliderVal = jsonModel.getProperty('/alphaVal');
      var oSlider = new sap.ui.commons.Slider({
    		id : 'AlphaSlider',
    		tooltip: 'Alpha Slider',
    		width: '600px',
    		min: 0.01,
    		max: 0.99,
    		value: parseFloat(sliderVal),
    		totalUnits: 5,
    		smallStepWidth: 0.01,
    		stepLabels : true,
    		change : function(){
    			jsonModel = oController.getGrowthData(oSlider.getValue());
    			sap.ui.getCore().setModel(jsonModel);
    			}
    		});
      var oLabel = new sap.ui.commons.Label({text:"Alpha value:", labelFor: oSlider});
      
      var hLayout = new sap.ui.layout.HorizontalLayout("HLayout1", {
    		content: [oLabel, oSlider]
    	});
      
      var vLayout = new sap.ui.layout.VerticalLayout("VLayout1", {
      	content: [hLayout, line, lineRaw, lineSmooth]
      });
      return vLayout;
	}

});
