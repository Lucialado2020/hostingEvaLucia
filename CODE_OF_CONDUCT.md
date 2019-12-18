
<script> 
var img = {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Location_of_London_in_England_and_the_United_Kingdom_%28alternative_version%29.svg/200px-Location_of_London_in_England_and_the_United_Kingdom_%28alternative_version%29.svg.png", id:"localitation"};

function cambiar(imagen) {
    if(img.src=="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Location_of_London_in_England_and_the_United_Kingdom_%28alternative_version%29.svg/200px-Location_of_London_in_England_and_the_United_Kingdom_%28alternative_version%29.svg.png" && img.id=="https://images.pexels.com/photos/2678301/pexels-photo-2678301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"){
        img.src=imagen.src;
        img.id=imagen.id;
    }
    else{ 
        var aux = imagen.src;

        document.getElementById(imagen.id).src = img.src;
        document.getElementById(img.id).src = aux;

        img.src = ""; img.id="";
    }
} 
</script>
