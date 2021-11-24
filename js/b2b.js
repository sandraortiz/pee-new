
const b2b = "../data/B2bPage.json"

fetch(b2b)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  console.log(data.titleSecondCurso)
  const title = document.getElementById("title-1");
  var titleText = document.createElement("div");
  titleText.className = "col "
  titleText.innerHTML= '<p class="title-text-curso">' + data.titleCurso + '</p>'
  title.appendChild(titleText);

  
  for (let i = 0; i < data.cursos.length; i++) {
    var mainContainer = document.getElementById("curso-content");
    console.log(data.cursos[i].section);  
    var div = document.createElement("li");
    div.className = "curso-content-item li-area "
    div.innerHTML =
      '<a target="_blank" href=  ' + data.cursos[i].linkCurso + ' class="text">'
      + '<div style="border-color: '+ data.cursos[i].bgColorCursos +' "  class="box-area">'
      + '<p class="title-curso">' + data.cursos[i].section + '</p>'
      + '<p class="name-curso">' + data.cursos[i].curso + '</p>'
      + '<hr style="border-color: '+ data.cursos[i].lineColorCursos +' " class="new4">' + '</hr>'
      + '<img src=' + data.cursos[i].img + '  alt="">'
      + '<p class="encargado">' + data.cursos[i].teacher + '</p>'
      + '<p class="fecha">' + data.cursos[i].horario + '</p>'
      + '</div>'
      + '</a>'

    // '<div>'
    // + '<h2>' + data.cursos[i].section + '</h2>'

    // + '</div>';


    mainContainer.appendChild(div);

  }

  for (let i = 0; i < data.cursosSecond.length; i++) {
    var mainContainer = document.getElementById("curso-content-2");
    // console.log(data.cursos[i].section);  
    var div = document.createElement("li");
    div.className = "curso-content-item li-area "
    div.innerHTML =
      '<a target="_blank" href=  ' + data.cursos[i].linkCurso + ' class="text">'
      + '<div style="border-color: '+ data.cursos[i].bgColorCursos +' "  class="box-area">'
      + '<p class="title-curso">' + data.cursos[i].section + '</p>'
      + '<p class="name-curso">' + data.cursos[i].curso + '</p>'
      + '<hr style="border-color: '+ data.cursos[i].lineColorCursos +' " class="new4">' + '</hr>'
      + '<img src=' + data.cursos[i].img + '  alt="">'
      + '<p class="encargado">' + data.cursos[i].teacher + '</p>'
      + '<p class="fecha">' + data.cursos[i].horario + '</p>'
      + '</div>'
      + '</a>'
    mainContainer.appendChild(div);

  }
   


}


