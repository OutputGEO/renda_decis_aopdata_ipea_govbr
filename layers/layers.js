var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_distribuicao_renda_sao_paulo_3 = new ol.format.GeoJSON();
var features_distribuicao_renda_sao_paulo_3 = format_distribuicao_renda_sao_paulo_3.readFeatures(json_distribuicao_renda_sao_paulo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distribuicao_renda_sao_paulo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distribuicao_renda_sao_paulo_3.addFeatures(features_distribuicao_renda_sao_paulo_3);
var lyr_distribuicao_renda_sao_paulo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distribuicao_renda_sao_paulo_3, 
                style: style_distribuicao_renda_sao_paulo_3,
                popuplayertitle: 'distribuicao_renda_sao_paulo',
                interactive: true,
    title: 'distribuicao_renda_sao_paulo<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_0.png" /> 1<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_1.png" /> 2<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_2.png" /> 3<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_3.png" /> 4<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_4.png" /> 5<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_5.png" /> 6<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_6.png" /> 7<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_7.png" /> 8<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_8.png" /> 9<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_9.png" /> 10<br />\
    <img src="styles/legend/distribuicao_renda_sao_paulo_3_10.png" /> <br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ESRIGraylight_2.setVisible(true);lyr_distribuicao_renda_sao_paulo_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_ESRIGraylight_2,lyr_distribuicao_renda_sao_paulo_3];
lyr_distribuicao_renda_sao_paulo_3.set('fieldAliases', {'year': 'year', 'id_hex': 'id_hex', 'abbrv_m': 'abbrv_m', 'name_mn': 'name_mn', 'code_mn': 'code_mn', 'P001': 'P001', 'P002': 'P002', 'P003': 'P003', 'P004': 'P004', 'P005': 'P005', 'P006': 'P006', 'P007': 'P007', 'P010': 'P010', 'P011': 'P011', 'P012': 'P012', 'P013': 'P013', 'P014': 'P014', 'P015': 'P015', 'P016': 'P016', 'R001': 'R001', 'R002': 'R002', 'R003': 'R003', });
lyr_distribuicao_renda_sao_paulo_3.set('fieldImages', {'year': 'Range', 'id_hex': 'TextEdit', 'abbrv_m': 'TextEdit', 'name_mn': 'TextEdit', 'code_mn': 'Range', 'P001': 'Range', 'P002': 'Range', 'P003': 'Range', 'P004': 'Range', 'P005': 'Range', 'P006': 'Range', 'P007': 'Range', 'P010': 'Range', 'P011': 'Range', 'P012': 'Range', 'P013': 'Range', 'P014': 'Range', 'P015': 'Range', 'P016': 'Range', 'R001': 'TextEdit', 'R002': 'Range', 'R003': 'Range', });
lyr_distribuicao_renda_sao_paulo_3.set('fieldLabels', {'year': 'no label', 'id_hex': 'no label', 'abbrv_m': 'no label', 'name_mn': 'no label', 'code_mn': 'no label', 'P001': 'no label', 'P002': 'no label', 'P003': 'no label', 'P004': 'no label', 'P005': 'no label', 'P006': 'no label', 'P007': 'no label', 'P010': 'no label', 'P011': 'no label', 'P012': 'no label', 'P013': 'no label', 'P014': 'no label', 'P015': 'no label', 'P016': 'no label', 'R001': 'no label', 'R002': 'no label', 'R003': 'no label', });
lyr_distribuicao_renda_sao_paulo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});