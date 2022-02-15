console.log('ilk veri yapıları');
let items=[1,2,3,4];
items.push(5);
//items.pop(5);
console.log(items);
document.getElementById('file').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      console.log(this.result);
  
      // By lines
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
        console.log(lines[line]);
        items.push(lines[line]);
      }
    };
    reader.readAsText(file);
  };