$.get( "data", function(data) {
  console.log(data);
  console.log(data.records[0].fields.Location);
  console.log(data.records.length)
  
//  for (let i = 0; )
//  $( "body" )
//    .append( "Name: " + data.name ) // John
//    .append( "Time: " + data.time ); //  2pm
}, "json" );