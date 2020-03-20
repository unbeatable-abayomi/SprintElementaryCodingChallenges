// function gotoURL (select_element) {
//     location.href = select_element.value;

// }

// select all Element on the document
// alert("jjjdjj")
const txtMessage = document.getElementById('txtMessage');
const txtFeedBack = document.getElementById('txtFeedback');
const countThatRemains = document.getElementById('countThatRemains');
const pageCount = document.getElementById('pageCount');
const countThatRemainsSecond = document.getElementById('countThatRemainsSecond');
console.log(countThatRemains)
txtMessage.addEventListener('keypress', countWords);

// define the event handler function

function countWords() {
	// retrive or get message typed in textarea
	let message = txtMessage.value;

	// sanitize users the retrived message by taking multiplue / repeadted wihte space and replacing them with a single with space

	// message = message.replace(/\s+/g, '');

	// split  and sanitize message into word spaces

	let wordPieces = message.split('');

	// count the total number of words in wordpeices

	let numWords = wordPieces.length;

	let wordsRemaning = eval(1050 - numWords);

	if (wordsRemaning <= 0) {
		txtFeedBack.value = 'Sorry , you have exceed the maxium number of words allowed';
	} else {
        // txtFeedBack.value = `You have ${wordsRemaning} remaining ....`;
        let newNumber = 1050 - wordsRemaning;
        countThatRemains.innerText = newNumber;
        // if(newNumber%160 === 0){

        // }
        if(newNumber === 160){
            countThatRemainsSecond.innerText = 320;
            pageCount.innerText = 2;
        }
        if(newNumber === 320){
            countThatRemainsSecond.innerText = 480;
            pageCount.innerText = 3;
        }
        if(newNumber === 480){
            countThatRemainsSecond.innerText = 640;
            pageCount.innerText = 4;
        }
        // if(newNumber === 160){
        //     pageCount.innerText = 3;
        // }
        switch(true){
        //    case `${wordsRemaning} <= 15`:
           case wordsRemaning <= 10:
            txtFeedBack.style.background = "red";
            break;
            case wordsRemaning <= 50:
                txtFeedBack.style.background = "orange";
                break;
                default:
                    wordsRemaning = wordsRemaning ;
        }
        // if(wordsRemaning <= 50){
        //     txtFeedBack.style.background = "orange";
        //     if(wordsRemaning <= 10)
        //     txtFeedBack.style.background = "red";
        // }
        console.log(wordsRemaning);
	}
}

// function prime(n)
// {
//     if (n < 2)
//     {
//         return false
//     }
//     for (var i = 2; i < n; i++)
//     {
//        if (n % i == 0)
//         return false;
//     }
//     return true
// }

// console.log(prime(1))
