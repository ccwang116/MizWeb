/*
 * version: 2021/01/08
 */


var gEChart = function() {
	
  // 畫Chart圖表
  var drawChartLine = function(dateList, countList, canvasObj, xLabelText, yLabelText, titleText, countTotal){
  
    if (countList.length == 1){
	  dateList.push('');
	  countList.push(null);
	  dateList.unshift('');
	  countList.unshift(null);
	}
	
	// 
	let year = "";
	function getXDataformat(value, index){
	  let html = "";

	  if (index == 0){
	      year = "";
	  }
	  
	  if (dateList[value]){
	    let dts = dateList[value].split('-');
	    if (dts.length == 1){
	      // 2021
	      html = dts[0];
	    } else if (dts.length == 2 ){
	      if (index == 0 || year != dts[0]){
	          html = dts[1] + "\n("+ dts[0] +")";
	          year = dts[0];
	      } else {
	          html = dts[1];
	      }
	    } else if (dts.length == 3 ){
	      if (index == 0 || year != dts[0]){
	          html = dts[1]+dts[2] + "\n("+ dts[0] +")";
	          year = dts[0];
	      } else {
	          html = dts[1]+dts[2];
	      }
	    }
	  }
	  return html;
	}
	// 
	function getDateList(){
	  let arrays = [];
	
	  let year = '0';
	  for (let index in dateList){
	    let dt = dateList[index];
	    let dts = dt.split('-');
	    if (dts.length == 1){
	        // 2021
	        arrays.push(dts[0]);
	    } else if (dts.length == 2){
	        // 01
	        arrays.push(dts[1]);
	    } else if (dts.length == 3){
	        // 0101
	        arrays.push(dts[1]+dts[2]);
	    }
	  }
	  return arrays;
	}
	
	let dataNewList = getDateList();
	//
	function getListData(){
      let arrays = [];
      for (let i=0; i<countList.length; i++){
          arrays.push([i, countList[i]]);
      }
      
      return arrays;
    }
    
	//
	var colors = [
	    {"0": "#6DD1BA", "1": "#3492D6"}, 
	    {"0": "#F91362", "1": "#581BA2"}, 
	    {"0": "#EE0B0B", "1": "#B90077"},
	    {"0": "#C3FB57", "1": "#72AA3F"}, 
	    {"0": "#FFCE08", "1": "#CA5400"}, 
	];
	//
	option = {
      title: {
        text: titleText+": "+countTotal,
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 36,
          //fontFamily: 'Predator Black'
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: "#333",
        borderColor: "#000",
        formatter: function (params, ticket, callback) {
              let html = "";
              for (let i=0; i<params.length; i++){
                if (params[i]['value'][1] != null){
                  if (i == 0){
                    html = dateList[params[0]['value'][0]]
                    html += '<br>'; 
                    html += '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background:linear-gradient(to bottom left,'+params[0]['color']['colorStops'][0]['color']+','+params[0]['color']['colorStops'][1]['color']+');"></span>'
                    html += " ";
                    html += params[0]['value'][1];
                  } else {
                    html += '<br>';
                    html += '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background:linear-gradient(to bottom left,'+params[i]['color']['colorStops'][0]['color']+','+params[i]['color']['colorStops'][1]['color']+');"></span>'
                    html += " ";
                    html += params[i]['value'][1];
                  }
                }
              }
              return html;
        },
        textStyle: {
          color: '#fff',
          //fontFamily: 'Predator Light',
        }
      },
      legend: {
        data: dateList
      },
      grid: {
        left: '70px',
        right: '70px',
        containLabel: true,
      },
      toolbox: {
        feature: {
            saveAsImage: {}
        }
      },
      xAxis: {
        //name: xLabelText,
        type: 'value',
        data: dateList,
        boundaryGap: false,
        min: 0,
        max: dateList.length-1,
        interval: dateList.length >= 35 ? 2 : 1,
        minInterval: 1,
        axisLine: {
          show: false
        },
        axisLabel: {
          fontSize: 9,
          //fontFamily: 'Predator Light',
          //lineHeight: 44,
          padding: -0.08,
          color: '#fff',
          rotate: dateList.length >= 7 ? 45 : 0,
          margin: 10,
          formatter: function (value, index){
              return dateList[value] ? dateList[value] : "";
          },
        },
        splitLine:{
          lineStyle: {
            width: 0.2
          }
        }
      },
      yAxis: {
        //name: yLabelText,
        type: 'value',
        splitNumber: 16,
        minInterval: 1,
        axisLine: {
          show: false
        },
        axisLabel: {
          fontSize: 9,
          //fontFamily: 'Predator Light',
          color: '#fff',
        },
        splitLine:{
          lineStyle: {
            width: 0.2
          }
        }
      },
      series: [
        {
            name: titleText,
            type: 'line',
            showSymbol: false,
            symbolSize: 14,
            symbol: 'circle',
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0.5, [{
                    offset: 0,
                    color: colors[0]["0"]
                }, {
                    offset: 1,
                    color: colors[0]["1"]
                }])
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1 ,0, 0, 0.5, [{
                    offset: 0,
                    color: colors[0]["0"]
                }, {
                    offset: 1,
                    color: colors[0]["1"]
                }])
            },
            data: getListData()
        },
      ]
    };

    canvasObj.setOption(option);
    canvasObj.resize();
    
    setTimeout( function  (){
      window.onresize =  function  () {
         canvasObj.resize();
      }
    },200) 
    
  }

  //畫Chart Pie圖表
  var drawChartPie = function(lableList, countList, canvasObj, titleText, countTotal){
  
    let lableNewList = {};
    for (let i=0; i<lableList.length; i++){
        if (lableList[i][1]){
            lableNewList[lableList[i][0]] = lableList[i][1];
        } else {
            lableNewList[lableList[i][0]] = lableList[i][0];
        } 
    }
    
    let lableData = [];
    for (let i=0; i<lableList.length; i++){
          lableData.push(lableList[i][0]);
    }
   
    function getDictData(){
      let arrays = [];
      for (let i=0; i<lableList.length; i++){
          arrays.push({"name": lableList[i][0], "value": countList[i]});
      }
      
      return arrays;
    }
    	
	option = {
      title: {
        text: titleText+": "+countTotal,
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 36
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
        textStyle: {
          fontSize: 12,
        }
      },
      toolbox: {
        feature: {
            saveAsImage: {}
        }
      },
      legend: {
        orient: 'vertical',
        top: (50-(lableData.length-1)*2.5)+'%',
        left: '78%',
        data: lableData,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
            name: titleText,
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: true,
            top: 15,
            label: {
                formatter: function (params){
                  return lableNewList[params['name']] + " " + params.percent +"%";
                },
                fontSize: 12,
                color: '#fff',
            },
            labelLine: {
                lineStyle: {
                    width: 2,
                },
            },
            color: [
                '#5DFFF6',
	            '#0EB2FC',
	            '#3168F4',
	            '#A336EA',
	            '#FE00AD',
	            '#DB182F',
	            '#F48021',
	            '#FFBD4C',
	            '#FFFF00',
	            '#ACEC00',
	            '#3CDD57',
            ],
            data: getDictData(),
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
    };

    canvasObj.setOption(option);
    canvasObj.resize();
    
    setTimeout( function  (){
      window.onresize =  function  () {
         canvasObj.resize();
      }
    },200) 
    
  }
	
  return {
    
      drawLine: drawChartLine,
      drawPie: drawChartPie

  };
    
}();
