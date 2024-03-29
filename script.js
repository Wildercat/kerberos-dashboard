$.get( "data", function(data) {
  console.log(data);
  console.log(data.records[0].fields.Location);
  console.log(data.records.length);
  
  //create separate divs for each record in the database
  for (let i = 0; i < data.records.length; i++) {
    let newDiv = document.createElement('div');
    
    //set id to id from database - might come in handy
    newDiv.setAttribute('id', data.records[i].id);
    
    //create header from Location field (from database), append to div
    let location = document.createElement('h2');
    location.innerHTML = data.records[i].fields.Location;
    newDiv.appendChild(location);
    
    //create link with href from kerberosURL field
    let link = document.createElement('a');
    link.setAttribute('href', 'http://' + data.records[i].fields.kerberosURL);
    
    //create img tag with src from mpegPort field
    console.log(data.records[i].fields.mpegPort);
    let stream = document.createElement('img');
    stream.setAttribute('src', 'http://10.0.0.43:' + data.records[i].fields.mpegPort)
    stream.setAttribute('alt', 'Click for Kerberos page');
    stream.setAttribute('class', 'r' + data.records[i].fields.Rotation);
    
    // if mirrored attribute is true, set class to mirrored
    if (data.records[i].fields.mirrored) {
      stream.setAttribute('class', 'mirrored');
    }
    // append img to link
    link.appendChild(stream);
    
    //append link to div
    newDiv.appendChild(link);
    
    //append the div to the body
    document.getElementById('camList').appendChild(newDiv);
    
    //create 
  }
}, "json" );