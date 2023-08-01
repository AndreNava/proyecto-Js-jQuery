$(document).ready(function(){

	//Slider

  if(window.location.href.indexOf('index') >-1 ){

    $('.galeria').bxSlider({ //Esto se saco de la pagina bxslider
      mode: 'fade', //Estos parametros se ven en options desde bxsliders
      captions: true,
      slideWidth: 1200
    });
  }
    //Posts

  if(window.location.href.indexOf('index') >-1 ){

    var posts= [
    	{
    		title:'Prueba de titulo 1',
    		date: 'publicado el dia ' +moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lorem libero. Pellentesque lacinia lacinia mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    	},
    	{
    		title:'Prueba de titulo 2',
    		date: 'publicado el dia ' +moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lorem libero. Pellentesque lacinia lacinia mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    	},
    	{
    		title:'Prueba de titulo 3',
    		date: 'publicado el dia ' +moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lorem libero. Pellentesque lacinia lacinia mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    	},
    	{
    		title:'Prueba de titulo 4',
    		date: 'publicado el dia ' +moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lorem libero. Pellentesque lacinia lacinia mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    	},
    	{
    		title:'Prueba de titulo 5',
    		date: 'publicado el dia ' +moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lorem libero. Pellentesque lacinia lacinia mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    	},
    	{
    		title:'Prueba de titulo 6',
    		date: 'publicado el dia ' +moment().date() + ' de ' + moment().format("MMMM") + " del " + moment().format("YYYY"),
    		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lorem libero. Pellentesque lacinia lacinia mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    	},
    	];
    posts.forEach((item, index)=>{
    	var post= `
    			<article class="post">
						<h2> ${item.title}</h2>
						<span class="date">
							${item.date} 
						</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer mas </a>
				</article>
				`;
				$("#posts").append(post);
    });
  }

    //Selector de tema

    var theme=$("#theme")
    $("#to-green").click(function(){
    	theme.attr("href","css/green.css");
    });
    $("#to-blue").click(function(){
    	theme.attr("href","css/blue.css");
    });
    $("#to-red").click(function(){
    	theme.attr("href","css/red.css");
    });
    
    //Scroll arriba de la web
    $(".subir").click(function(){
      e.preventDefault();

      $('html, body').animate({
        scrollTop:0 //Sube al pixel 0 de la pagina html
      }, 500);
      return false
    });

    //Login falso
    $("#login form").submit(function(){
      var form_name=$("#form_name").val();
      localStorage.setItem("form_name", form_name);
    });
    var for_name=localStorage.getItem("form_name");
    if(for_name !=null && for_name != "undefined"){
      var about_parrafo=$("#about p")
      about_parrafo.html("<br> <strong> Bienvenido, "+ for_name +"<strong>");
      about_parrafo.append("<a href='#' id='logout'> Cerrar sesion </a>");
      
      $("#login").hide();

      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }

    //Para acordeon
    if(window.location.href.indexOf('about') >-1 ){
      $("#acordeon").accordion();
    }

    //Para reloj
    if(window.location.href.indexOf('reloj') >-1 ){

      setInterval(function(){
        var reloj= moment().format('hh:mm:ss ');
        $("#reloj").html(reloj);
      },1000);
      
    }

    //Validacion de datos
    if(window.location.href.indexOf('contact') >-1 ){

      $('#b_date').datepicker({
        dateFormat:'dd-mm-yy'
      });

        $.validate({ //Se saca de la pagina web
          lang:'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true
        });
      }



  });
