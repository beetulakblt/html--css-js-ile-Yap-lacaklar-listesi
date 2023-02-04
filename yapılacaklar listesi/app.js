//jq
$("#ekle").on("click", function() {
	let title = $("#baslık").val();
	let acıklama = $("#acıklama").val();
	let date = $("#date").val();
	if(!title || !acıklama || !date) return alert("Boş alan bırakmayın.");
	let join = date + " <br> " + title + " <br> " + acıklama;
	let bekleyenlerParent = $(".bekleyenler")[0];
	let p = document.createElement('p')
	p.innerHTML = join;
	p.draggable= "true";
	p.ondragstart ="event.dataTransfer.setData('text/plain',null)";
	bekleyenlerParent.appendChild(p);
	clearForm();
});
function clearForm() {
	$("#formTasks").find("input[type='text'], textarea, input[type='date']").val("");
}
//js 
var surukle;
  document.addEventListener("dragstart", function( e ) {
      surukle = e.target;
  });
  document.addEventListener("dragover", function( e ) {
      e.preventDefault();
  });
  document.addEventListener("drop", function( e ) {
      e.preventDefault();
      if ( e.target.className == "bekleyenler" ) {
          surukle.parentNode.removeChild( surukle );
          e.target.appendChild( surukle );
      }
     if (e.target.className == "tekliSil" ){
		surukle.parentNode.removeChild( surukle );
	 }
  });