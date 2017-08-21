$(document).ready(function () {

    // prepend overlay to DOM
    $('.team-item', this).prepend($("<div class='overlay'></div>"));

    $(".team-item").hover(function () {
        $('.overlay', this).fadeToggle(400);
        $('.team-info', this).fadeToggle(400);
    });
    $.get('projects', function(response){
        makeDropdown(response)
    });
    $.get('permissions/me', function(response){
      makeDropdownWithCollabs(response)
    });
});

function makeDropdownWithCollabs(array){
  var dropdown1 = document.getElementById('dropdown1')
  var dropdown3 = document.getElementById('dropdown3')
  array.map((ele,index,arr)=>{
    var li = document.createElement('li')
    var divider = document.createElement('li')
    var anchor = document.createElement('a')
    divider.setAttribute('class','divider')
    anchor.setAttribute('href',('/production.html?id='+ele.id))
    anchor.innerHTML = ele.project_title
    $(dropdown1).append(divider);
    $(li).append(anchor);
    $(dropdown1).append(li);
    })
    return array.map((ele,index,arr)=>{
      var li = document.createElement('li')
      var divider = document.createElement('li')
      var anchor = document.createElement('a')
      divider.setAttribute('class','divider')
      anchor.setAttribute('href',('/production.html?id='+ele.id))
      anchor.innerHTML = ele.project_title
      $(dropdown3).append(divider);
      $(li).append(anchor);
      $(dropdown3).append(li);
      })
}

function makeDropdown(array){
  var dropdown1 = document.getElementById('dropdown1')
  var dropdown3 = document.getElementById('dropdown3')
  array.map((ele,index,arr)=>{
    console.log(ele);
    var li = document.createElement('li')
    var anchor = document.createElement('a')
    anchor.setAttribute('href',('/production.html?id='+ele.id))
    anchor.innerHTML = ele.project_title
    $(li).append(anchor);
    $(dropdown1).append(li);
    })
    return array.map((ele,index,arr)=>{
      console.log(ele);
      var li = document.createElement('li')
      var anchor = document.createElement('a')
      anchor.setAttribute('href',('/production.html?id='+ele.id))
      anchor.innerHTML = ele.project_title
      $(li).append(anchor);
      $(dropdown3).append(li);
      })
}


(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.logout_button').on('click', () => {
  console.log("start");
  $.ajax({
    type: "GET",
    url: "/users/logout",
    success: function(res){
        if (res){
          console.log("retrun of logout button", res);
          window.location.replace('/')
        } else{
          console.log('Error');
        }
    }
  })
});
