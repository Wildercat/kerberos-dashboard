$.get( "data", function(data) {
  console.log(data);
  console.log(data.records[0].fields.Location);
  console.log(data.records.length);
  
  for (let i = 0; i < data.records.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', data.records[i].id);
    let location = document.createElement('h2');
    location.innerHTML = data.records[i].fields.Location;
    
    
    document.body.appendChild(newDiv);
    
  }
//  $( "body" )
//    .append( "Name: " + data.name ) // John
//    .append( "Time: " + data.time ); //  2pm
}, "json" );