document.getElementById('search-button').addEventListener('click', function(e) {
            
    e.preventDefault();

    var terms = $("#search-input").val();

    console.log(terms);

    $.ajax({
        type: 'POST',
        data: {terms : terms},
        contentType: 'application/json',
        url: 'http://localhost:8888/search/'+terms,
        success: function (data) 
        {
            console.log(data.tracks.items);
            var source = $("#search-results").html();
            var template = Handlebars.compile(source);
            var html = template(data.tracks.items);
            $('#DocumentResults').html(html);
            
        }
    });

  }, false);