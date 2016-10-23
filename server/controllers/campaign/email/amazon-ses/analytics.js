const clickThroughBaseUrl = 'localhost:8080';  // placeholder

function wrapLink(body, trackingId) {
  body = body.replace(/\{(.+?)\/(.+?)\}/g, function(m, label, url) {
    return '<a href="http://' + clickThroughBaseUrl + '/clickthrough?url=' + url + '&trackingId=' + trackingId + '">' + label + '</a>';
  });
  return body;
}

function insertUnsubscribeLink(body, unsubscribeId) {
  return body + "\n<a href=http://" + clickThroughBaseUrl + "/unsubscribe/" + unsubscribeId + "/>unsubscribe</a>";
}

module.exports = {
  wrapLink,
  insertUnsubscribeLink
}