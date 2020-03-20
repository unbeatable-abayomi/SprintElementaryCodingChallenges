const displayBoard = document.querySelector("#displayBoard");
const txtSMS = document.querySelector("#txtSMS");
console.log(displayBoard)
console.log(txtSMS)


var pageCount = 1;
var xtersPerPage = 160;
// var totalCharacters = 160;

txtSMS.addEventListener('keyup', countCharacters);



function countCharacters () {
    let sms = txtSMS.value;
   let smsPieces = sms.split('').length;

//    if(smsPieces - xtersPerPage === 0){
       pageCount = Math.floor(smsPieces / 160) + 1;
      let totalCharacters = 160 * pageCount;
//    }

   displayBoard.innerHTML = `Page Count: ${pageCount} (${smsPieces}/${totalCharacters})`;
}
