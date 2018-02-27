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
      console.log(data.response.docs);
      for (var i = 0; i < data.response.docs.length; i++) {
        console.log("here");
        var article = $("<div>");
        var form = $("<form target='_blank'>");
        var artButton = $("<button>").text(data.response.docs[i].headline.print_headline);
        form.attr("action", data.response.docs[i].web_url);
        form.append(artButton);
        article.append(form);
        $("#article").append(article);
      }
    });
  }

  $("#search").on("click",function (event) {
    event.preventDefault();
    var searchTerm = $("#input1").val().trim();
    var beginDate = $("#input3").val().trim();
    var endDate = $("#input4").val().trim();
    count = $("#input2").val().trim();
    if(searchTerm !== ""){
      term += searchTerm;
      queryUrl += term;
    }
    if(beginDate !== ""){
      begin += beginDate;
      queryUrl += begin;
    }
    if(endDate !== ""){
      end += endDate;
      queryUrl += end;
    }
    console.log(queryUrl);
    callAjax(queryUrl);
  });

});
