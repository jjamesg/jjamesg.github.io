$(document).ready(function() {
  
  $.get('http://www.freecodecamp.com/news/hot', function(data){
        
    data.forEach(function(story){
      
      $('.news').append(
        '<div class="story"><a href="http://www.freecodecamp.com/'+story.author.username+'" target = "_blank">' +
          '<img src='+story.author.picture+ ' style="width:75px;height:75px;">' + 
        '</a> '+
        '<div class="title"> &hearts;' + story.rank + ' | ' +
        '<a href = "' + story.link + '" target = "_blank">' +  
          '<b>'+story.headline+'</b>' + 
        '</a>' + '</div></br><small>' + story.author.username + '</small></br><hr></br></div>');
      
    })

  })
                  
                  
})
