const screen = document.querySelector('.calculator__value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((item) => {
    console.log(item.id)
    item.onclick = () => {
        if (item.id == 'ac') {
            screen.innerText = '';
        } else if (item.id == 'arrow-back') {
            let string = screen.innerText.toString();
            screen.innerText = string.substr(0, string.length - 1);
        } else if (screen.innerText != '' && item.id == 'equal') {
            screen.innerText = eval(screen.innerText);
        } else if (screen.innerText == '' && item.id == 'equal') {
            screen.innerText = 'Empty!';
            setTimeout(() => (screen.innerText = ''), 2000);
        } else {
            screen.innerText += item.id;
        }
    }
});



