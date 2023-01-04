function getBotResponse(input) {
    //This can be performed either by the model or manually in app.py
    //source - 'https://www.youtube.com/watch?v=7BhTcELc9QA'
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        let rawText = input;
        let outText = "";
        $.get("/get", { msg: rawText }).done(function(data) {
            outText =  data;
    });
        console.log(outText)
        return outText;
        }
}
    document.querySelector('.cont').innerHTML= `<table style="float: left">
  <tr>
    <th>School ID</th>
    <th>Admission Count</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td>
    <td>`+data[0][1]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td>
    <td>`+data[1][1]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td>
    <td>`+data[2][1]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td>
    <td>`+data[3][1]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td>
    <td>`+data[4][1]+`</td>
  </tr>
</table>
<table>
  <tr>
    <th>School ID</th>
    <th>Admission Count</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td>
    <td>`+data[0][1]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td>
    <td>`+data[1][1]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td>
    <td>`+data[2][1]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td>
    <td>`+data[3][1]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td>
    <td>`+data[4][1]+`</td>
  </tr>
</table>`

