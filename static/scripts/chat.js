// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    //let botResponse = getBotResponse(userText);
    $.get("/get", { msg: userText }).done(function(data) {
    if (typeof(data) !== "string"){
       let botHtml = '<p class="botText"><span>' + 'Showing Results' + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        document.querySelector('.cont').innerHTML= getTemplate(userText,data)
    }
    else{
        let botHtml = '<p class="botText"><span>' + data + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
    });
    
}
function getTemplate(userText,data){
    let response = ``
    if (userText.includes('Total Admission for school')){
        response = `<div class="admission">
        <table>
  <tr>
    <th>School ID</th>
    <th>School Name</th>
    <th>Admission Count</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td><td>`+data[0][1]+`</td><td>`+data[0][2]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td><td>`+data[1][1]+`</td><td>`+data[1][2]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td><td>`+data[2][1]+`</td><td>`+data[2][2]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td><td>`+data[3][1]+`</td><td>`+data[3][2]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td><td>`+data[4][1]+`</td><td>`+data[4][2]+`</td>
  </tr>
  <tr>
    <td>`+data[5][0]+`</td><td>`+data[5][1]+`</td><td>`+data[5][2]+`</td>
  </tr>
  <tr>
    <td>`+data[6][0]+`</td><td>`+data[6][1]+`</td><td>`+data[6][2]+`</td>
  </tr>
  <tr>
    <td>`+data[7][0]+`</td><td>`+data[7][1]+`</td><td>`+data[7][2]+`</td>
  </tr>
  <tr>
    <td>`+data[8][0]+`</td><td>`+data[8][1]+`</td><td>`+data[8][2]+`</td>
  </tr>
  <tr>
    <td>`+data[9][0]+`</td><td>`+data[9][1]+`</td><td>`+data[9][2]+`</td>
  </tr>
  <tr>
    <td>`+data[10][0]+`</td><td>`+data[10][1]+`</td><td>`+data[10][2]+`</td>
  </tr>
  <tr>
    <td>`+data[11][0]+`</td><td>`+data[11][1]+`</td><td>`+data[11][2]+`</td>
  </tr>
  <tr>
    <td>`+data[12][0]+`</td><td>`+data[12][1]+`</td><td>`+data[12][2]+`</td>
  </tr>
  <tr>
    <td>`+data[13][0]+`</td><td>`+data[13][1]+`</td><td>`+data[13][2]+`</td>
  </tr>
</table></div>
<div class="admission">
<table>
  <tr>
    <th>School ID</th>
    <th> School Name</th>
    <th>Admission Count</th>
  </tr>
  <tr>
    <td>`+data[14][0]+`</td><td>`+data[14][1]+`</td><td>`+data[14][2]+`</td>
  </tr>
  <tr>
    <td>`+data[15][0]+`</td><td>`+data[15][1]+`</td><td>`+data[15][2]+`</td>
  </tr>
  <tr>
    <td>`+data[16][0]+`</td><td>`+data[16][1]+`</td><td>`+data[16][2]+`</td>
  </tr>
  <tr>
    <td>`+data[17][0]+`</td><td>`+data[17][1]+`</td><td>`+data[17][2]+`</td>
  </tr>
  <tr>
    <td>`+data[18][0]+`</td><td>`+data[18][1]+`</td><td>`+data[18][2]+`</td>
  </tr>
    <tr>
    <td>`+data[19][0]+`</td><td>`+data[19][1]+`</td><td>`+data[19][2]+`</td>
  </tr>
  <tr>
    <td>`+data[20][0]+`</td><td>`+data[20][1]+`</td><td>`+data[20][2]+`</td>
  </tr>
  <tr>
    <td>`+data[21][0]+`</td><td>`+data[21][1]+`</td><td>`+data[21][2]+`</td>
  </tr>
  <tr>
    <td>`+data[22][0]+`</td><td>`+data[22][1]+`</td><td>`+data[22][2]+`</td>
  </tr>
  <tr>
    <td>`+data[23][0]+`</td><td>`+data[23][1]+`</td><td>`+data[23][2]+`</td>
  </tr>
    <tr>
    <td>`+data[24][0]+`</td><td>`+data[24][1]+`</td><td>`+data[24][2]+`</td>
  </tr>
  <tr>
    <td>`+data[25][0]+`</td><td>`+data[25][1]+`</td><td>`+data[25][2]+`</td>
  </tr>
  <tr>
    <td>`+data[26][0]+`</td><td>`+data[26][1]+`</td><td>`+data[26][2]+`</td>
  </tr>
  <tr>
    <td>`+data[27][0]+`</td><td>`+data[27][1]+`</td><td>`+data[27][2]+`</td>
  </tr>
</table></div>`
    } 
    else if (userText === 'Total teachers count in each school'){
        response = `<div class="admission">
        <table>
  <tr>
    <th>School ID</th>
    <th>School Name</th>
    <th>Teachers count</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td><td>`+data[0][1]+`</td><td>`+data[0][2]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td><td>`+data[1][1]+`</td><td>`+data[1][2]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td><td>`+data[2][1]+`</td><td>`+data[2][2]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td><td>`+data[3][1]+`</td><td>`+data[3][2]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td><td>`+data[4][1]+`</td><td>`+data[4][2]+`</td>
  </tr>
  <tr>
    <td>`+data[5][0]+`</td><td>`+data[5][1]+`</td><td>`+data[5][2]+`</td>
  </tr>
  <tr>
    <td>`+data[6][0]+`</td><td>`+data[6][1]+`</td><td>`+data[6][2]+`</td>
  </tr>
  <tr>
    <td>`+data[7][0]+`</td><td>`+data[7][1]+`</td><td>`+data[7][2]+`</td>
  </tr>
  <tr>
    <td>`+data[8][0]+`</td><td>`+data[8][1]+`</td><td>`+data[8][2]+`</td>
  </tr>
  <tr>
    <td>`+data[9][0]+`</td><td>`+data[9][1]+`</td><td>`+data[9][2]+`</td>
  </tr>
    <tr>
    <td>`+data[10][0]+`</td><td>`+data[10][1]+`</td><td>`+data[10][2]+`</td>
  </tr>
  <tr>
    <td>`+data[11][0]+`</td><td>`+data[11][1]+`</td><td>`+data[11][2]+`</td>
  </tr>
  <tr>
    <td>`+data[12][0]+`</td><td>`+data[12][1]+`</td><td>`+data[12][2]+`</td>
  </tr>
  <tr>
    <td>`+data[13][0]+`</td><td>`+data[13][1]+`</td><td>`+data[13][2]+`</td>
  </tr>
</table></div>
<div class="admission">
<table>
  <tr>
    <th>School ID</th>
    <th>School Name</th>
    <th>Teachers count</th>
  </tr>
  <tr>
    <td>`+data[14][0]+`</td><td>`+data[14][1]+`</td><td>`+data[14][2]+`</td>
  </tr>
  <tr>
    <td>`+data[15][0]+`</td><td>`+data[15][1]+`</td><td>`+data[15][2]+`</td>
  </tr>
  <tr>
    <td>`+data[16][0]+`</td><td>`+data[16][1]+`</td><td>`+data[16][2]+`</td>
  </tr>
  <tr>
    <td>`+data[17][0]+`</td><td>`+data[17][1]+`</td><td>`+data[17][2]+`</td>
  </tr>
  <tr>
    <td>`+data[18][0]+`</td><td>`+data[18][1]+`</td><td>`+data[18][2]+`</td>
  </tr>
  <tr>
    <td>`+data[19][0]+`</td><td>`+data[19][1]+`</td><td>`+data[19][2]+`</td>
  </tr>
  <tr>
    <td>`+data[20][0]+`</td><td>`+data[20][1]+`</td><td>`+data[20][2]+`</td>
  </tr>
  <tr>
    <td>`+data[21][0]+`</td><td>`+data[21][1]+`</td><td>`+data[21][2]+`</td>
  </tr>
  <tr>
    <td>`+data[22][0]+`</td><td>`+data[22][1]+`</td><td>`+data[22][2]+`</td>
  </tr>
  <tr>
    <td>`+data[23][0]+`</td><td>`+data[23][1]+`</td><td>`+data[23][2]+`</td>
  </tr>
  <tr>
    <td>`+data[24][0]+`</td><td>`+data[24][1]+`</td><td>`+data[24][2]+`</td>
  </tr>
  <tr>
    <td>`+data[25][0]+`</td><td>`+data[25][1]+`</td><td>`+data[25][2]+`</td>
  </tr>
  <tr>
    <td>`+data[26][0]+`</td><td>`+data[26][1]+`</td><td>`+data[26][2]+`</td>
  </tr>
  <tr>
    <td>`+data[27][0]+`</td><td>`+data[27][1]+`</td><td>`+data[27][2]+`</td>
  </tr>
</table></div>`
    }
        else if (userText === 'Location of the schools'){
        response = `<div class="admission">
        <table>
  <tr>
    <th>School ID</th>
    <th>School Name</th>
    <th>Location</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td><td>`+data[0][1]+`</td><td>`+data[0][2]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td><td>`+data[1][1]+`</td><td>`+data[1][2]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td><td>`+data[2][1]+`</td><td>`+data[2][2]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td><td>`+data[3][1]+`</td><td>`+data[3][2]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td><td>`+data[4][1]+`</td><td>`+data[4][2]+`</td>
  </tr>
  <tr>
    <td>`+data[5][0]+`</td><td>`+data[5][1]+`</td><td>`+data[5][2]+`</td>
  </tr>
  <tr>
    <td>`+data[6][0]+`</td><td>`+data[6][1]+`</td><td>`+data[6][2]+`</td>
  </tr>
  <tr>
    <td>`+data[7][0]+`</td><td>`+data[7][1]+`</td><td>`+data[7][2]+`</td>
  </tr>
  <tr>
    <td>`+data[8][0]+`</td><td>`+data[8][1]+`</td><td>`+data[8][2]+`</td>
  </tr>
  <tr>
    <td>`+data[9][0]+`</td><td>`+data[9][1]+`</td><td>`+data[9][2]+`</td>
  </tr>
    <tr>
    <td>`+data[10][0]+`</td><td>`+data[10][1]+`</td><td>`+data[10][2]+`</td>
  </tr>
  <tr>
    <td>`+data[11][0]+`</td><td>`+data[11][1]+`</td><td>`+data[11][2]+`</td>
  </tr>
  <tr>
    <td>`+data[12][0]+`</td><td>`+data[12][1]+`</td><td>`+data[12][2]+`</td>
  </tr>
  <tr>
    <td>`+data[13][0]+`</td><td>`+data[13][1]+`</td><td>`+data[13][2]+`</td>
  </tr>
</table></div>
<div class="admission">
<table>
  <tr>
    <th>School ID</th>
    <th>School Name</th>
    <th>Location </th>
  </tr>
  <tr>
    <td>`+data[14][0]+`</td><td>`+data[14][1]+`</td><td>`+data[14][2]+`</td>
  </tr>
  <tr>
    <td>`+data[15][0]+`</td><td>`+data[15][1]+`</td><td>`+data[15][2]+`</td>
  </tr>
  <tr>
    <td>`+data[16][0]+`</td><td>`+data[16][1]+`</td><td>`+data[16][2]+`</td>
  </tr>
  <tr>
    <td>`+data[17][0]+`</td><td>`+data[17][1]+`</td><td>`+data[17][2]+`</td>
  </tr>
  <tr>
    <td>`+data[18][0]+`</td><td>`+data[18][1]+`</td><td>`+data[18][2]+`</td>
  </tr>
  <tr>
    <td>`+data[19][0]+`</td><td>`+data[19][1]+`</td><td>`+data[19][2]+`</td>
  </tr>
  <tr>
    <td>`+data[20][0]+`</td><td>`+data[20][1]+`</td><td>`+data[20][2]+`</td>
  </tr>
  <tr>
    <td>`+data[21][0]+`</td><td>`+data[21][1]+`</td><td>`+data[21][2]+`</td>
  </tr>
  <tr>
    <td>`+data[22][0]+`</td><td>`+data[22][1]+`</td><td>`+data[22][2]+`</td>
  </tr>
  <tr>
    <td>`+data[23][0]+`</td><td>`+data[23][1]+`</td><td>`+data[23][2]+`</td>
  </tr>
  <tr>
    <td>`+data[24][0]+`</td><td>`+data[24][1]+`</td><td>`+data[24][2]+`</td>
  </tr>
  <tr>
    <td>`+data[25][0]+`</td><td>`+data[25][1]+`</td><td>`+data[25][2]+`</td>
  </tr>
  <tr>
    <td>`+data[26][0]+`</td><td>`+data[26][1]+`</td><td>`+data[26][2]+`</td>
  </tr>
  <tr>
    <td>`+data[27][0]+`</td><td>`+data[27][1]+`</td><td>`+data[27][2]+`</td>
  </tr>
</table></div>`
    }
    else if (userText.includes('Ranking of school')){
        response = `<div class="admission">
        <table>
  <tr>
    <th>School ID</th>
    <th>Class</th>
    <th>School Name</th>
    <th>Board Passing Percentage</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td><td>`+data[0][1]+`</td><td>`+data[0][2]+`</td><td>`+data[0][3]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td><td>`+data[1][1]+`</td><td>`+data[1][2]+`</td><td>`+data[1][3]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td><td>`+data[2][1]+`</td><td>`+data[2][2]+`</td><td>`+data[2][3]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td><td>`+data[3][1]+`</td><td>`+data[3][2]+`</td><td>`+data[3][3]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td><td>`+data[4][1]+`</td><td>`+data[4][2]+`</td><td>`+data[4][3]+`</td>
  </tr>
  <tr>
    <td>`+data[5][0]+`</td><td>`+data[5][1]+`</td><td>`+data[5][2]+`</td><td>`+data[5][3]+`</td>
  </tr>
  <tr>
    <td>`+data[6][0]+`</td><td>`+data[6][1]+`</td><td>`+data[6][2]+`</td><td>`+data[6][3]+`</td>
  </tr>
  <tr>
    <td>`+data[7][0]+`</td><td>`+data[7][1]+`</td><td>`+data[7][2]+`</td><td>`+data[7][3]+`</td>
  </tr>
  <tr>
    <td>`+data[8][0]+`</td><td>`+data[8][1]+`</td><td>`+data[8][2]+`</td><td>`+data[8][3]+`</td>
  </tr>
  <tr>
    <td>`+data[9][0]+`</td><td>`+data[9][1]+`</td><td>`+data[9][2]+`</td><td>`+data[9][3]+`</td>
  </tr>
  <tr>
    <td>`+data[10][0]+`</td><td>`+data[10][1]+`</td><td>`+data[10][2]+`</td><td>`+data[10][3]+`</td>
  </tr>
  <tr>
    <td>`+data[11][0]+`</td><td>`+data[11][1]+`</td><td>`+data[11][2]+`</td><td>`+data[11][3]+`</td>
  </tr>
  <tr>
    <td>`+data[12][0]+`</td><td>`+data[12][1]+`</td><td>`+data[12][2]+`</td><td>`+data[12][3]+`</td>
  </tr>
  <tr>
    <td>`+data[13][0]+`</td><td>`+data[13][1]+`</td><td>`+data[13][2]+`</td><td>`+data[13][3]+`</td>
  </tr>
</table></div>
<div class="admission">
<table>
  <tr>
    <th>School ID</th>
    <th>Class</th>
    <th>School Name</th>
    <th>Board Passing Percentage</th>
  </tr>
  <tr>
    <td>`+data[14][0]+`</td><td>`+data[14][1]+`</td><td>`+data[14][2]+`</td><td>`+data[14][3]+`</td>
  </tr>
  <tr>
    <td>`+data[15][0]+`</td><td>`+data[15][1]+`</td><td>`+data[15][2]+`</td><td>`+data[15][3]+`</td>
  </tr>
  <tr>
    <td>`+data[16][0]+`</td><td>`+data[16][1]+`</td><td>`+data[16][2]+`</td><td>`+data[16][3]+`</td>
  </tr>
  <tr>
    <td>`+data[17][0]+`</td><td>`+data[17][1]+`</td><td>`+data[17][2]+`</td><td>`+data[17][3]+`</td>
  </tr>
  <tr>
    <td>`+data[18][0]+`</td><td>`+data[18][1]+`</td><td>`+data[18][2]+`</td><td>`+data[18][3]+`</td>
  </tr>
  <tr>
    <td>`+data[19][0]+`</td><td>`+data[19][1]+`</td><td>`+data[19][2]+`</td><td>`+data[19][3]+`</td>
  </tr>
    <tr>
    <td>`+data[20][0]+`</td><td>`+data[20][1]+`</td><td>`+data[20][2]+`</td><td>`+data[20][3]+`</td>
  </tr>
  <tr>
    <td>`+data[21][0]+`</td><td>`+data[21][1]+`</td><td>`+data[21][2]+`</td><td>`+data[21][3]+`</td>
  </tr>
  <tr>
    <td>`+data[22][0]+`</td><td>`+data[22][1]+`</td><td>`+data[22][2]+`</td><td>`+data[22][3]+`</td>
  </tr>
  <tr>
    <td>`+data[23][0]+`</td><td>`+data[23][1]+`</td><td>`+data[23][2]+`</td><td>`+data[23][3]+`</td>
  </tr>
  <tr>
    <td>`+data[24][0]+`</td><td>`+data[24][1]+`</td><td>`+data[24][2]+`</td><td>`+data[24][3]+`</td>
  </tr>
    <tr>
    <td>`+data[25][0]+`</td><td>`+data[25][1]+`</td><td>`+data[25][2]+`</td><td>`+data[25][3]+`</td>
  </tr>
  <tr>
    <td>`+data[26][0]+`</td><td>`+data[26][1]+`</td><td>`+data[26][2]+`</td><td>`+data[26][3]+`</td>
  </tr>
  <tr>
    <td>`+data[27][0]+`</td><td>`+data[27][1]+`</td><td>`+data[27][2]+`</td><td>`+data[27][3]+`</td>
  </tr>
</table></div>`
    }
    else if (userText.includes('Show Students')){
        response = `<div class="admission">
        <table>
  <tr>
    <th>School ID</th>
    <th>Class</th>
    <th>Students Name</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td><td>`+data[0][1]+`</td><td>`+data[0][2]+`</td><td>`+data[0][3]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td><td>`+data[1][1]+`</td><td>`+data[1][2]+`</td><td>`+data[1][3]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td><td>`+data[2][1]+`</td><td>`+data[2][2]+`</td><td>`+data[2][3]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td><td>`+data[3][1]+`</td><td>`+data[3][2]+`</td><td>`+data[3][3]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td><td>`+data[4][1]+`</td><td>`+data[4][2]+`</td><td>`+data[4][3]+`</td>
  </tr>
    <tr>
    <td>`+data[5][0]+`</td><td>`+data[5][1]+`</td><td>`+data[5][2]+`</td><td>`+data[5][3]+`</td>
  </tr>
    <tr>
    <td>`+data[6][0]+`</td><td>`+data[6][1]+`</td><td>`+data[6][2]+`</td><td>`+data[6][3]+`</td>
  </tr>
    <tr>
    <td>`+data[7][0]+`</td><td>`+data[7][1]+`</td><td>`+data[7][2]+`</td><td>`+data[7][3]+`</td>
  </tr>
    <tr>
    <td>`+data[8][0]+`</td><td>`+data[8][1]+`</td><td>`+data[8][2]+`</td><td>`+data[8][3]+`</td>
  </tr>
    <tr>
    <td>`+data[9][0]+`</td><td>`+data[9][1]+`</td><td>`+data[9][2]+`</td><td>`+data[9][3]+`</td>
  </tr>
  <tr>
    <td>`+data[10][0]+`</td><td>`+data[10][1]+`</td><td>`+data[10][2]+`</td><td>`+data[10][3]+`</td>
  </tr>
  <tr>
    <td>`+data[11][0]+`</td><td>`+data[11][1]+`</td><td>`+data[11][2]+`</td><td>`+data[11][3]+`</td>
  </tr>
  <tr>
    <td>`+data[12][0]+`</td><td>`+data[12][1]+`</td><td>`+data[12][2]+`</td><td>`+data[12][3]+`</td>
  </tr>
  <tr>
    <td>`+data[13][0]+`</td><td>`+data[13][1]+`</td><td>`+data[13][2]+`</td><td>`+data[13][3]+`</td>
  </tr>
  <tr>
    <td>`+data[14][0]+`</td><td>`+data[14][1]+`</td><td>`+data[14][2]+`</td><td>`+data[14][3]+`</td>
  </tr>
  <tr>
    <td>`+data[15][0]+`</td><td>`+data[15][1]+`</td><td>`+data[15][2]+`</td><td>`+data[15][3]+`</td>
  </tr>
  <tr>
    <td>`+data[16][0]+`</td><td>`+data[16][1]+`</td><td>`+data[16][2]+`</td><td>`+data[16][3]+`</td>
  </tr>
  <tr>
    <td>`+data[17][0]+`</td><td>`+data[17][1]+`</td><td>`+data[17][2]+`</td><td>`+data[17][3]+`</td>
  </tr>
  <tr>
    <td>`+data[18][0]+`</td><td>`+data[18][1]+`</td><td>`+data[18][2]+`</td><td>`+data[18][3]+`</td>
  </tr>
  <tr>
    <td>`+data[19][0]+`</td><td>`+data[19][1]+`</td><td>`+data[19][2]+`</td><td>`+data[19][3]+`</td>
  </tr>
  <tr>
    <td>`+data[20][0]+`</td><td>`+data[20][1]+`</td><td>`+data[20][2]+`</td><td>`+data[20][3]+`</td>
  </tr>
  <tr>
    <td>`+data[21][0]+`</td><td>`+data[21][1]+`</td><td>`+data[21][2]+`</td><td>`+data[21][3]+`</td>
  </tr>
  <tr>
    <td>`+data[22][0]+`</td><td>`+data[22][1]+`</td><td>`+data[22][2]+`</td><td>`+data[22][3]+`</td>
  </tr>
  <tr>
    <td>`+data[23][0]+`</td><td>`+data[23][1]+`</td><td>`+data[23][2]+`</td><td>`+data[23][3]+`</td>
  </tr>
  <tr>
    <td>`+data[24][0]+`</td><td>`+data[24][1]+`</td><td>`+data[24][2]+`</td><td>`+data[24][3]+`</td>
  </tr>
  <tr>
    <td>`+data[25][0]+`</td><td>`+data[25][1]+`</td><td>`+data[25][2]+`</td><td>`+data[25][3]+`</td>
  </tr>
  <tr>
    <td>`+data[26][0]+`</td><td>`+data[26][1]+`</td><td>`+data[26][2]+`</td><td>`+data[26][3]+`</td>
  </tr>
  <tr>
    <td>`+data[27][0]+`</td><td>`+data[27][1]+`</td><td>`+data[27][2]+`</td><td>`+data[27][3]+`</td>
  </tr>
  <tr>
    <td>`+data[28][0]+`</td><td>`+data[28][1]+`</td><td>`+data[28][2]+`</td><td>`+data[28][3]+`</td>
  </tr>
  <tr>
    <td>`+data[29][0]+`</td><td>`+data[29][1]+`</td><td>`+data[29][2]+`</td><td>`+data[29][3]+`</td>
  </tr>
  <tr>
    <td>`+data[30][0]+`</td><td>`+data[30][1]+`</td><td>`+data[30][2]+`</td><td>`+data[30][3]+`</td>
  </tr>
  <tr>
    <td>`+data[31][0]+`</td><td>`+data[31][1]+`</td><td>`+data[31][2]+`</td><td>`+data[31][3]+`</td>
  </tr>
</table></div>
<div class="admission">
<table>
  <tr>
    <th>School ID</th>
    <th>Class</th>
    <th>First Name</th>
    <th>Last Name</th> 
    <th>Str No.</th>
    <th> Str Name</th>
  </tr>
  <tr>
    <td>`+data[32][0]+`</td><td>`+data[32][1]+`</td><td>`+data[32][2]+`</td><td>`+data[32][3]+`</td><td>`+data[32][4]+`</td><td>`+data[32][5]+`</td>
  </tr>
  <tr>
    <td>`+data[33][0]+`</td><td>`+data[33][1]+`</td><td>`+data[33][2]+`</td><td>`+data[33][3]+`</td><td>`+data[33][4]+`</td><td>`+data[33][5]+`</td>
  </tr>
  <tr>
    <td>`+data[34][0]+`</td><td>`+data[34][1]+`</td><td>`+data[34][2]+`</td><td>`+data[34][3]+`</td><td>`+data[34][4]+`</td><td>`+data[34][5]+`</td>
  </tr>
  <tr>
    <td>`+data[35][0]+`</td><td>`+data[35][1]+`</td><td>`+data[35][2]+`</td><td>`+data[35][3]+`</td><td>`+data[35][4]+`</td><td>`+data[35][5]+`</td>
  </tr>
  <tr>
    <td>`+data[36][0]+`</td><td>`+data[36][1]+`</td><td>`+data[36][2]+`</td><td>`+data[36][3]+`</td><td>`+data[36][4]+`</td><td>`+data[36][5]+`</td>
  </tr>
  <tr>
    <td>`+data[37][0]+`</td><td>`+data[37][1]+`</td><td>`+data[37][2]+`</td><td>`+data[37][3]+`</td><td>`+data[37][4]+`</td><td>`+data[37][5]+`</td>
  </tr>
  <tr>
    <td>`+data[38][0]+`</td><td>`+data[38][1]+`</td><td>`+data[38][2]+`</td><td>`+data[38][3]+`</td><td>`+data[38][4]+`</td><td>`+data[38][5]+`</td>
  </tr>
  <tr>
    <td>`+data[39][0]+`</td><td>`+data[39][1]+`</td><td>`+data[39][2]+`</td><td>`+data[39][3]+`</td><td>`+data[39][4]+`</td><td>`+data[39][5]+`</td>
  </tr>
  <tr>
    <td>`+data[40][0]+`</td><td>`+data[40][1]+`</td><td>`+data[40][2]+`</td><td>`+data[40][3]+`</td><td>`+data[40][4]+`</td><td>`+data[40][5]+`</td>
  </tr>
  <tr>
    <td>`+data[41][0]+`</td><td>`+data[41][1]+`</td><td>`+data[41][2]+`</td><td>`+data[41][3]+`</td><td>`+data[41][4]+`</td><td>`+data[41][5]+`</td>
  </tr>
  <tr>
    <td>`+data[42][0]+`</td><td>`+data[42][1]+`</td><td>`+data[42][2]+`</td><td>`+data[42][3]+`</td><td>`+data[42][4]+`</td><td>`+data[42][5]+`</td>
  </tr>
  <tr>
    <td>`+data[43][0]+`</td><td>`+data[43][1]+`</td><td>`+data[43][2]+`</td><td>`+data[43][3]+`</td><td>`+data[43][4]+`</td><td>`+data[43][5]+`</td>
  </tr>
  <tr>
    <td>`+data[44][0]+`</td><td>`+data[44][1]+`</td><td>`+data[44][2]+`</td><td>`+data[44][3]+`</td><td>`+data[44][4]+`</td><td>`+data[44][5]+`</td>
  </tr>
  <tr>
    <td>`+data[45][0]+`</td><td>`+data[45][1]+`</td><td>`+data[45][2]+`</td><td>`+data[45][3]+`</td><td>`+data[45][4]+`</td><td>`+data[45][5]+`</td>
  </tr>
  <tr>
    <td>`+data[46][0]+`</td><td>`+data[46][1]+`</td><td>`+data[46][2]+`</td><td>`+data[46][3]+`</td><td>`+data[46][4]+`</td><td>`+data[46][5]+`</td>
  </tr>
  <tr>
    <td>`+data[47][0]+`</td><td>`+data[47][1]+`</td><td>`+data[47][2]+`</td><td>`+data[47][3]+`</td><td>`+data[47][4]+`</td><td>`+data[47][5]+`</td>
  </tr>
  <tr>
    <td>`+data[48][0]+`</td><td>`+data[48][1]+`</td><td>`+data[48][2]+`</td><td>`+data[48][3]+`</td><td>`+data[48][4]+`</td><td>`+data[48][5]+`</td>
  </tr>
  <tr>
    <td>`+data[49][0]+`</td><td>`+data[49][1]+`</td><td>`+data[49][2]+`</td><td>`+data[49][3]+`</td><td>`+data[49][4]+`</td><td>`+data[49][5]+`</td>
  </tr>
  <tr>
    <td>`+data[50][0]+`</td><td>`+data[50][1]+`</td><td>`+data[50][2]+`</td><td>`+data[50][3]+`</td><td>`+data[50][4]+`</td><td>`+data[50][5]+`</td>
  </tr>
  <tr>
    <td>`+data[51][0]+`</td><td>`+data[51][1]+`</td><td>`+data[51][2]+`</td><td>`+data[51][3]+`</td><td>`+data[51][4]+`</td><td>`+data[51][5]+`</td>
  </tr>
  <tr>
    <td>`+data[52][0]+`</td><td>`+data[52][1]+`</td><td>`+data[52][2]+`</td><td>`+data[52][3]+`</td><td>`+data[52][4]+`</td><td>`+data[52][5]+`</td>
  </tr>
  <tr>
    <td>`+data[53][0]+`</td><td>`+data[53][1]+`</td><td>`+data[53][2]+`</td><td>`+data[53][3]+`</td><td>`+data[53][4]+`</td><td>`+data[53][5]+`</td>
  </tr>
  <tr>
    <td>`+data[54][0]+`</td><td>`+data[54][1]+`</td><td>`+data[54][2]+`</td><td>`+data[54][3]+`</td><td>`+data[54][4]+`</td><td>`+data[54][5]+`</td>
  </tr>
  <tr>
    <td>`+data[55][0]+`</td><td>`+data[55][1]+`</td><td>`+data[55][2]+`</td><td>`+data[55][3]+`</td><td>`+data[55][4]+`</td><td>`+data[55][5]+`</td>
  </tr>
  <tr>
    <td>`+data[56][0]+`</td><td>`+data[56][1]+`</td><td>`+data[56][2]+`</td><td>`+data[56][3]+`</td><td>`+data[56][4]+`</td><td>`+data[56][5]+`</td>
  </tr>
  <tr>
    <td>`+data[57][0]+`</td><td>`+data[57][1]+`</td><td>`+data[57][2]+`</td><td>`+data[57][3]+`</td><td>`+data[57][4]+`</td><td>`+data[57][5]+`</td>
  </tr>
  <tr>
    <td>`+data[58][0]+`</td><td>`+data[58][1]+`</td><td>`+data[58][2]+`</td><td>`+data[58][3]+`</td><td>`+data[58][4]+`</td><td>`+data[58][5]+`</td>
  </tr>
  <tr>
    <td>`+data[59][0]+`</td><td>`+data[59][1]+`</td><td>`+data[59][2]+`</td><td>`+data[59][3]+`</td><td>`+data[59][4]+`</td><td>`+data[59][5]+`</td>
  </tr>
  <tr>
    <td>`+data[60][0]+`</td><td>`+data[60][1]+`</td><td>`+data[60][2]+`</td><td>`+data[60][3]+`</td><td>`+data[60][4]+`</td><td>`+data[60][5]+`</td>
  </tr>
  <tr>
    <td>`+data[61][0]+`</td><td>`+data[61][1]+`</td><td>`+data[61][2]+`</td><td>`+data[61][3]+`</td><td>`+data[61][4]+`</td><td>`+data[61][5]+`</td>
  </tr>
  <tr>
    <td>`+data[62][0]+`</td><td>`+data[62][1]+`</td><td>`+data[62][2]+`</td><td>`+data[62][3]+`</td><td>`+data[62][4]+`</td><td>`+data[62][5]+`</td>
  </tr>
  <tr>
    <td>`+data[63][0]+`</td><td>`+data[63][1]+`</td><td>`+data[63][2]+`</td><td>`+data[63][3]+`</td><td>`+data[63][4]+`</td><td>`+data[63][5]+`</td>
  </tr>
</table></div>`
    }
    else if (userText.includes('Show Unique Students')){
        response = `<div class="admission">
        <table>
  <tr>
    <th>School ID</th>
    <th>Class</th>
    <th>Students Name</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>`+data[0][0]+`</td><td>`+data[0][1]+`</td><td>`+data[0][2]+`</td><td>`+data[0][3]+`</td>
  </tr>
  <tr>
    <td>`+data[1][0]+`</td><td>`+data[1][1]+`</td><td>`+data[1][2]+`</td><td>`+data[1][3]+`</td>
  </tr>
  <tr>
    <td>`+data[2][0]+`</td><td>`+data[2][1]+`</td><td>`+data[2][2]+`</td><td>`+data[2][3]+`</td>
  </tr>
  <tr>
    <td>`+data[3][0]+`</td><td>`+data[3][1]+`</td><td>`+data[3][2]+`</td><td>`+data[3][3]+`</td>
  </tr>
  <tr>
    <td>`+data[4][0]+`</td><td>`+data[4][1]+`</td><td>`+data[4][2]+`</td><td>`+data[4][3]+`</td>
  </tr>
    <tr>
    <td>`+data[5][0]+`</td><td>`+data[5][1]+`</td><td>`+data[5][2]+`</td><td>`+data[5][3]+`</td>
  </tr>
    <tr>
    <td>`+data[6][0]+`</td><td>`+data[6][1]+`</td><td>`+data[6][2]+`</td><td>`+data[6][3]+`</td>
  </tr>
    <tr>
    <td>`+data[7][0]+`</td><td>`+data[7][1]+`</td><td>`+data[7][2]+`</td><td>`+data[7][3]+`</td>
  </tr>
    <tr>
    <td>`+data[8][0]+`</td><td>`+data[8][1]+`</td><td>`+data[8][2]+`</td><td>`+data[8][3]+`</td>
  </tr>
    <tr>
    <td>`+data[9][0]+`</td><td>`+data[9][1]+`</td><td>`+data[9][2]+`</td><td>`+data[9][3]+`</td>
  </tr>
  <tr>
    <td>`+data[10][0]+`</td><td>`+data[10][1]+`</td><td>`+data[10][2]+`</td><td>`+data[10][3]+`</td>
  </tr>
  <tr>
    <td>`+data[11][0]+`</td><td>`+data[11][1]+`</td><td>`+data[11][2]+`</td><td>`+data[11][3]+`</td>
  </tr>
  <tr>
    <td>`+data[12][0]+`</td><td>`+data[12][1]+`</td><td>`+data[12][2]+`</td><td>`+data[12][3]+`</td>
  </tr>
  <tr>
    <td>`+data[13][0]+`</td><td>`+data[13][1]+`</td><td>`+data[13][2]+`</td><td>`+data[13][3]+`</td>
  </tr>
  <tr>
    <td>`+data[14][0]+`</td><td>`+data[14][1]+`</td><td>`+data[14][2]+`</td><td>`+data[14][3]+`</td>
  </tr>
  <tr>
    <td>`+data[15][0]+`</td><td>`+data[15][1]+`</td><td>`+data[15][2]+`</td><td>`+data[15][3]+`</td>
  </tr>
  <tr>
    <td>`+data[16][0]+`</td><td>`+data[16][1]+`</td><td>`+data[16][2]+`</td><td>`+data[16][3]+`</td>
  </tr>
  <tr>
    <td>`+data[17][0]+`</td><td>`+data[17][1]+`</td><td>`+data[17][2]+`</td><td>`+data[17][3]+`</td>
  </tr>
  <tr>
    <td>`+data[18][0]+`</td><td>`+data[18][1]+`</td><td>`+data[18][2]+`</td><td>`+data[18][3]+`</td>
  </tr>
  <tr>
    <td>`+data[19][0]+`</td><td>`+data[19][1]+`</td><td>`+data[19][2]+`</td><td>`+data[19][3]+`</td>
  </tr>
  <tr>
    <td>`+data[20][0]+`</td><td>`+data[20][1]+`</td><td>`+data[20][2]+`</td><td>`+data[20][3]+`</td>
  </tr>
  <tr>
    <td>`+data[21][0]+`</td><td>`+data[21][1]+`</td><td>`+data[21][2]+`</td><td>`+data[21][3]+`</td>
  </tr>
  <tr>
    <td>`+data[22][0]+`</td><td>`+data[22][1]+`</td><td>`+data[22][2]+`</td><td>`+data[22][3]+`</td>
  </tr>
  <tr>
    <td>`+data[23][0]+`</td><td>`+data[23][1]+`</td><td>`+data[23][2]+`</td><td>`+data[23][3]+`</td>
  </tr>
  <tr>
    <td>`+data[24][0]+`</td><td>`+data[24][1]+`</td><td>`+data[24][2]+`</td><td>`+data[24][3]+`</td>
  </tr>
  <tr>
    <td>`+data[25][0]+`</td><td>`+data[25][1]+`</td><td>`+data[25][2]+`</td><td>`+data[25][3]+`</td>
  </tr>
  <tr>
    <td>`+data[26][0]+`</td><td>`+data[26][1]+`</td><td>`+data[26][2]+`</td><td>`+data[26][3]+`</td>
  </tr>
  <tr>
    <td>`+data[27][0]+`</td><td>`+data[27][1]+`</td><td>`+data[27][2]+`</td><td>`+data[27][3]+`</td>
  </tr>
  <tr>
    <td>`+data[28][0]+`</td><td>`+data[28][1]+`</td><td>`+data[28][2]+`</td><td>`+data[28][3]+`</td>
  </tr>
  <tr>
    <td>`+data[29][0]+`</td><td>`+data[29][1]+`</td><td>`+data[29][2]+`</td><td>`+data[29][3]+`</td>
  </tr>
</table></div>
<div class="admission">
<table>
  <tr>
    <th>School ID</th>
    <th>Class</th>
    <th>First Name</th>
    <th>Last Name</th> 
    <th>Str No.</th>
    <th> Str Name</th>
  </tr>
  <tr>
    <td>`+data[30][0]+`</td><td>`+data[30][1]+`</td><td>`+data[30][2]+`</td><td>`+data[30][3]+`</td><td>`+data[30][4]+`</td><td>`+data[30][5]+`</td>
  </tr>
  <tr>
    <td>`+data[31][0]+`</td><td>`+data[31][1]+`</td><td>`+data[31][2]+`</td><td>`+data[31][3]+`</td><td>`+data[31][4]+`</td><td>`+data[31][5]+`</td>
  </tr>
  <tr>
    <td>`+data[32][0]+`</td><td>`+data[32][1]+`</td><td>`+data[32][2]+`</td><td>`+data[32][3]+`</td><td>`+data[32][4]+`</td><td>`+data[32][5]+`</td>
  </tr>
  <tr>
    <td>`+data[33][0]+`</td><td>`+data[33][1]+`</td><td>`+data[33][2]+`</td><td>`+data[33][3]+`</td><td>`+data[33][4]+`</td><td>`+data[33][5]+`</td>
  </tr>
  <tr>
    <td>`+data[34][0]+`</td><td>`+data[34][1]+`</td><td>`+data[34][2]+`</td><td>`+data[34][3]+`</td><td>`+data[34][4]+`</td><td>`+data[34][5]+`</td>
  </tr>
  <tr>
    <td>`+data[35][0]+`</td><td>`+data[35][1]+`</td><td>`+data[35][2]+`</td><td>`+data[35][3]+`</td><td>`+data[35][4]+`</td><td>`+data[35][5]+`</td>
  </tr>
  <tr>
    <td>`+data[36][0]+`</td><td>`+data[36][1]+`</td><td>`+data[36][2]+`</td><td>`+data[36][3]+`</td><td>`+data[36][4]+`</td><td>`+data[36][5]+`</td>
  </tr>
  <tr>
    <td>`+data[37][0]+`</td><td>`+data[37][1]+`</td><td>`+data[37][2]+`</td><td>`+data[37][3]+`</td><td>`+data[37][4]+`</td><td>`+data[37][5]+`</td>
  </tr>
  <tr>
    <td>`+data[38][0]+`</td><td>`+data[38][1]+`</td><td>`+data[38][2]+`</td><td>`+data[38][3]+`</td><td>`+data[38][4]+`</td><td>`+data[38][5]+`</td>
  </tr>
  <tr>
    <td>`+data[39][0]+`</td><td>`+data[39][1]+`</td><td>`+data[39][2]+`</td><td>`+data[39][3]+`</td><td>`+data[39][4]+`</td><td>`+data[39][5]+`</td>
  </tr>
  <tr>
    <td>`+data[40][0]+`</td><td>`+data[40][1]+`</td><td>`+data[40][2]+`</td><td>`+data[40][3]+`</td><td>`+data[40][4]+`</td><td>`+data[40][5]+`</td>
  </tr>
  <tr>
    <td>`+data[41][0]+`</td><td>`+data[41][1]+`</td><td>`+data[41][2]+`</td><td>`+data[41][3]+`</td><td>`+data[41][4]+`</td><td>`+data[41][5]+`</td>
  </tr>
  <tr>
    <td>`+data[42][0]+`</td><td>`+data[42][1]+`</td><td>`+data[42][2]+`</td><td>`+data[42][3]+`</td><td>`+data[42][4]+`</td><td>`+data[42][5]+`</td>
  </tr>
  <tr>
    <td>`+data[43][0]+`</td><td>`+data[43][1]+`</td><td>`+data[43][2]+`</td><td>`+data[43][3]+`</td><td>`+data[43][4]+`</td><td>`+data[43][5]+`</td>
  </tr>
  <tr>
    <td>`+data[44][0]+`</td><td>`+data[44][1]+`</td><td>`+data[44][2]+`</td><td>`+data[44][3]+`</td><td>`+data[44][4]+`</td><td>`+data[44][5]+`</td>
  </tr>
  <tr>
    <td>`+data[45][0]+`</td><td>`+data[45][1]+`</td><td>`+data[45][2]+`</td><td>`+data[45][3]+`</td><td>`+data[45][4]+`</td><td>`+data[45][5]+`</td>
  </tr>
  <tr>
    <td>`+data[46][0]+`</td><td>`+data[46][1]+`</td><td>`+data[46][2]+`</td><td>`+data[46][3]+`</td><td>`+data[46][4]+`</td><td>`+data[46][5]+`</td>
  </tr>
  <tr>
    <td>`+data[47][0]+`</td><td>`+data[47][1]+`</td><td>`+data[47][2]+`</td><td>`+data[47][3]+`</td><td>`+data[47][4]+`</td><td>`+data[47][5]+`</td>
  </tr>
  <tr>
    <td>`+data[48][0]+`</td><td>`+data[48][1]+`</td><td>`+data[48][2]+`</td><td>`+data[48][3]+`</td><td>`+data[48][4]+`</td><td>`+data[48][5]+`</td>
  </tr>
  <tr>
    <td>`+data[49][0]+`</td><td>`+data[49][1]+`</td><td>`+data[49][2]+`</td><td>`+data[49][3]+`</td><td>`+data[49][4]+`</td><td>`+data[49][5]+`</td>
  </tr>
  <tr>
    <td>`+data[50][0]+`</td><td>`+data[50][1]+`</td><td>`+data[50][2]+`</td><td>`+data[50][3]+`</td><td>`+data[50][4]+`</td><td>`+data[50][5]+`</td>
  </tr>
  <tr>
    <td>`+data[51][0]+`</td><td>`+data[51][1]+`</td><td>`+data[51][2]+`</td><td>`+data[51][3]+`</td><td>`+data[51][4]+`</td><td>`+data[51][5]+`</td>
  </tr>
  <tr>
    <td>`+data[52][0]+`</td><td>`+data[52][1]+`</td><td>`+data[52][2]+`</td><td>`+data[52][3]+`</td><td>`+data[52][4]+`</td><td>`+data[52][5]+`</td>
  </tr>
  <tr>
    <td>`+data[53][0]+`</td><td>`+data[53][1]+`</td><td>`+data[53][2]+`</td><td>`+data[53][3]+`</td><td>`+data[53][4]+`</td><td>`+data[53][5]+`</td>
  </tr>
  <tr>
    <td>`+data[54][0]+`</td><td>`+data[54][1]+`</td><td>`+data[54][2]+`</td><td>`+data[54][3]+`</td><td>`+data[54][4]+`</td><td>`+data[54][5]+`</td>
  </tr>
  <tr>
    <td>`+data[55][0]+`</td><td>`+data[55][1]+`</td><td>`+data[55][2]+`</td><td>`+data[55][3]+`</td><td>`+data[55][4]+`</td><td>`+data[55][5]+`</td>
  </tr>
  <tr>
    <td>`+data[56][0]+`</td><td>`+data[56][1]+`</td><td>`+data[56][2]+`</td><td>`+data[56][3]+`</td><td>`+data[56][4]+`</td><td>`+data[56][5]+`</td>
  </tr>
  <tr>
    <td>`+data[57][0]+`</td><td>`+data[57][1]+`</td><td>`+data[57][2]+`</td><td>`+data[57][3]+`</td><td>`+data[57][4]+`</td><td>`+data[57][5]+`</td>
  </tr>
  <tr>
    <td>`+data[58][0]+`</td><td>`+data[58][1]+`</td><td>`+data[58][2]+`</td><td>`+data[58][3]+`</td><td>`+data[58][4]+`</td><td>`+data[58][5]+`</td>
  </tr>
  <tr>
    <td>`+data[59][0]+`</td><td>`+data[59][1]+`</td><td>`+data[59][2]+`</td><td>`+data[59][3]+`</td><td>`+data[59][4]+`</td><td>`+data[59][5]+`</td>
  </tr>
</table></div>`
    }
    return response
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}


// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
