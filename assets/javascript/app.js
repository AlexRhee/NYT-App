$(document).ready(function () {
  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e733197958ed4a63bf941aac50336d53"
  var NYtimes = "&fq=The+New+York+Times";
  var begin = "&begin_date=";
  var end = "&end_date=";
  var term = "q=";
  queryUrl += NYtimes;
  //queryUrl+= end;
  function callAjax(Url) {
    $.ajax({
      url:Url,
      method:"GET"
    }).then(function (data) {
      console.log(data);
    });
  }

  $("#begin").on("click",function (event) {
    event.preventDefault();
    var beginDate = $("#begin-input").val().trim();
    begin += beginDate;
    queryUrl += begin;
    console.log(queryUrl);
    callAjax(queryUrl);
  });


});
