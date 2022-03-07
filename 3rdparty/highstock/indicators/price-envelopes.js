/*
 Highstock JS v9.3.2 (2021-11-29)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Fus

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/indicators/price-envelopes",["highcharts","highcharts/modules/stock"],function(e){b(e);b.Highcharts=e;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function e(b,d,e,h){b.hasOwnProperty(d)||(b[d]=h.apply(null,e))}b=b?b._modules:{};e(b,"Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js",[b["Core/Series/SeriesRegistry.js"],
b["Core/Utilities.js"]],function(b,d){var e=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return b(c,a)};return function(c,a){function k(){this.constructor=c}b(c,a);c.prototype=null===a?Object.create(a):(k.prototype=a.prototype,new k)}}(),h=b.seriesTypes.sma,u=d.extend,v=d.isArray,m=d.merge;d=function(d){function c(){var a=null!==d&&d.apply(this,
arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}e(c,d);c.prototype.init=function(){b.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=m({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)};c.prototype.toYData=function(a){return[a.top,a.middle,a.bottom]};c.prototype.translate=function(){var a=this,c=["plotTop","plotMiddle","plotBottom"];b.seriesTypes.sma.prototype.translate.apply(a);a.points.forEach(function(b){[b.top,
b.middle,b.bottom].forEach(function(d,k){null!==d&&(b[c[k]]=a.yAxis.toPixels(d,!0))})})};c.prototype.drawGraph=function(){for(var a=this,c=a.points,d=c.length,e=a.options,h=a.graph,w={options:{gapSize:e.gapSize}},n=[[],[]],f;d--;)f=c[d],n[0].push({plotX:f.plotX,plotY:f.plotTop,isNull:f.isNull}),n[1].push({plotX:f.plotX,plotY:f.plotBottom,isNull:f.isNull});["topLine","bottomLine"].forEach(function(c,d){a.points=n[d];a.options=m(e[c].styles,w);a.graph=a["graph"+c];b.seriesTypes.sma.prototype.drawGraph.call(a);
a["graph"+c]=a.graph});a.points=c;a.options=e;a.graph=h;b.seriesTypes.sma.prototype.drawGraph.call(a)};c.prototype.getValues=function(a,c){var d=c.period,e=c.topBand,h=c.bottomBand,k=a.xData,n=(a=a.yData)?a.length:0,f=[],m=[],q=[],l;if(!(k.length<d)&&v(a[0])&&4===a[0].length){for(l=d;l<=n;l++){var p=k.slice(l-d,l);var g=a.slice(l-d,l);g=b.seriesTypes.sma.prototype.getValues.call(this,{xData:p,yData:g},c);p=g.xData[0];g=g.yData[0];var r=g*(1+e);var t=g*(1-h);f.push([p,r,g,t]);m.push(p);q.push([r,g,
t])}return{values:f,xData:m,yData:q}}};c.defaultOptions=m(h.defaultOptions,{marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'},params:{period:20,topBand:.1,bottomBand:.1},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}});return c}(h);u(d.prototype,{nameComponents:["period","topBand","bottomBand"],
nameBase:"Price envelopes",pointArrayMap:["top","middle","bottom"],parallelArrays:["x","y","top","bottom"],pointValKey:"middle"});b.registerSeriesType("priceenvelopes",d);"";return d});e(b,"masters/indicators/price-envelopes.src.js",[],function(){})});
//# sourceMappingURL=price-envelopes.js.map