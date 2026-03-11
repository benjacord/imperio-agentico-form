// PEGAR ESTE CÓDIGO EN: Google Sheets > Extensiones > Apps Script
// Luego: Implementar > Nueva implementación > App web > Cualquier persona > Implementar
// Copiar la URL y pegarla en el formulario

function doPost(e) {
  var sheet = SpreadsheetApp.openById('1FwPpd3QRJidITQGAUxpm-DU91mursX24WsFkUaEgtJ0')
    .getSheetByName('leads imperio agentico');
  
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.nombre || '',
    data.email || '',
    data.telefono || '',
    data.ubicacion || '',
    data.negocio || '',
    data.que_vendes || '',
    data.facturacion || '',
    data.oferta_validada || '',
    data.equipo || '',
    data.dueno_sistemas || '',
    data.herramientas || '',
    data.cuello_botella || '',
    data.area_automatizar || '',
    data.horas_semana || '',
    data.inversion || '',
    data.decision || '',
    data.por_que_ahora || '',
    data.calificado || ''
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
