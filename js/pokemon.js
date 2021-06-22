    //Obtiene los métodos del objeto etiqueta especificando el nombre de dicha etiqueta
    titleThree = document.getElementsByTagName("h3");

    window.onload = () =>{
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Mi primer title en la página web");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
    }