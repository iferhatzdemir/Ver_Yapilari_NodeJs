console.log('ilk veri yapıları');
let items=["a","z","b","x"];
items.push(5);
//items.pop(5);
console.log(items);
console.log(items.sort());
document.getElementById('file').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      console.log(this.result);
  
      // By lines
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
       
        items.push(parseInt(lines[line]));
        
      }
    };
    reader.readAsText(file);
  };
  