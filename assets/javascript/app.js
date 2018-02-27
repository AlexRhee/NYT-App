$(document).ready(function () {
  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e733197958ed4a63bf941aac50336d53"
  var NYtimes = "&fq=The+New+York+Times";
  var begin = "&begin_date=";
  var end = "&end_date=";
  var term = "&q=";
  var count = 0;
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

  $("#search").on("click",function (event) {
    event.preventDefault();
    var searchTerm = $("#input1").val().trim();
    term += searchTerm;
    queryUrl += term;
    count = $("#input2").val().trim();
    var beginDate = $("#input3").val().trim();
    begin += beginDate;
    queryUrl += begin;
    var endDate = $("#input4").val().trim();
    end += endDate;
    queryUrl += end;
    console.log(queryUrl);
    callAjax(queryUrl);
  });


});
