var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_250304Feb25manuallayer_1 = new ol.format.GeoJSON();
var features_250304Feb25manuallayer_1 = format_250304Feb25manuallayer_1.readFeatures(json_250304Feb25manuallayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250304Feb25manuallayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250304Feb25manuallayer_1.addFeatures(features_250304Feb25manuallayer_1);
var lyr_250304Feb25manuallayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250304Feb25manuallayer_1, 
                style: style_250304Feb25manuallayer_1,
                popuplayertitle: '250304 - Feb25 manual layer',
                interactive: true,
                title: '<img src="styles/legend/250304Feb25manuallayer_1.png" /> 250304 - Feb25 manual layer'
            });
var format_250304Feb25autolayer_2 = new ol.format.GeoJSON();
var features_250304Feb25autolayer_2 = format_250304Feb25autolayer_2.readFeatures(json_250304Feb25autolayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250304Feb25autolayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250304Feb25autolayer_2.addFeatures(features_250304Feb25autolayer_2);
var lyr_250304Feb25autolayer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250304Feb25autolayer_2, 
                style: style_250304Feb25autolayer_2,
                popuplayertitle: '250304 - Feb25 auto layer',
                interactive: true,
                title: '<img src="styles/legend/250304Feb25autolayer_2.png" /> 250304 - Feb25 auto layer'
            });
var format_250304Feb25outdoorlocationlayer_3 = new ol.format.GeoJSON();
var features_250304Feb25outdoorlocationlayer_3 = format_250304Feb25outdoorlocationlayer_3.readFeatures(json_250304Feb25outdoorlocationlayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250304Feb25outdoorlocationlayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250304Feb25outdoorlocationlayer_3.addFeatures(features_250304Feb25outdoorlocationlayer_3);
var lyr_250304Feb25outdoorlocationlayer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250304Feb25outdoorlocationlayer_3, 
                style: style_250304Feb25outdoorlocationlayer_3,
                popuplayertitle: '250304 - Feb25 outdoor location layer',
                interactive: true,
                title: '<img src="styles/legend/250304Feb25outdoorlocationlayer_3.png" /> 250304 - Feb25 outdoor location layer'
            });
var format_250304Feb25indoorlocationlayer_4 = new ol.format.GeoJSON();
var features_250304Feb25indoorlocationlayer_4 = format_250304Feb25indoorlocationlayer_4.readFeatures(json_250304Feb25indoorlocationlayer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250304Feb25indoorlocationlayer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250304Feb25indoorlocationlayer_4.addFeatures(features_250304Feb25indoorlocationlayer_4);
var lyr_250304Feb25indoorlocationlayer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250304Feb25indoorlocationlayer_4, 
                style: style_250304Feb25indoorlocationlayer_4,
                popuplayertitle: '250304 - Feb25 indoor location layer',
                interactive: true,
                title: '<img src="styles/legend/250304Feb25indoorlocationlayer_4.png" /> 250304 - Feb25 indoor location layer'
            });

lyr_OSMStandard_0.setVisible(true);lyr_250304Feb25manuallayer_1.setVisible(true);lyr_250304Feb25autolayer_2.setVisible(true);lyr_250304Feb25outdoorlocationlayer_3.setVisible(true);lyr_250304Feb25indoorlocationlayer_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_250304Feb25manuallayer_1,lyr_250304Feb25autolayer_2,lyr_250304Feb25outdoorlocationlayer_3,lyr_250304Feb25indoorlocationlayer_4];
lyr_250304Feb25manuallayer_1.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_250304Feb25autolayer_2.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_250304Feb25outdoorlocationlayer_3.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Name': 'Location Name', 'Location Type': 'Location Type', });
lyr_250304Feb25indoorlocationlayer_4.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Name': 'Location Name', 'Location Type': 'Location Type', });
lyr_250304Feb25manuallayer_1.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_250304Feb25autolayer_2.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_250304Feb25outdoorlocationlayer_3.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Name': 'TextEdit', 'Location Type': 'TextEdit', });
lyr_250304Feb25indoorlocationlayer_4.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Name': 'TextEdit', 'Location Type': 'TextEdit', });
lyr_250304Feb25manuallayer_1.set('fieldLabels', {'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_250304Feb25autolayer_2.set('fieldLabels', {'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_250304Feb25outdoorlocationlayer_3.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location Name': 'inline label - visible with data', 'Location Type': 'inline label - visible with data', });
lyr_250304Feb25indoorlocationlayer_4.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'header label - visible with data', 'Location Name': 'inline label - visible with data', 'Location Type': 'inline label - visible with data', });
lyr_250304Feb25indoorlocationlayer_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});