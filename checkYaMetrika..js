function CHECKMETRIKA(url){
  var options = {
  "muteHttpExceptions": true,
  "followRedirects": false
  }; 
  var response = UrlFetchApp.fetch(url, options);

  return response.getContentText().includes("mc.yandex.ru/metrika/tag.js");
}
