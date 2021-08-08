// get all the keys from documents

var btn = document.querySelectorAll('#calculator span');
var operator = ['+', '-', 'x', '÷'];
var decimaladded = false;


for (var i = 0; i < btn.length; i++) {

    btn[i].onclick = function (e) {
        var input = document.querySelector('.screen');
        var inputval = input.innerHTML;
        var btnval = this.innerHTML;
        if (btnval === 'c') {
            input.innerHTML = '';
            decimaladded = false;

        }
        else if (btnval === '=') {
            var e = inputval;
            var lastchar = e[e.length - 1];
            e = e.replace(/x/g, '*').replace(/÷/g, '/');
            if (operator.indexOf(lastchar) > -1 || lastchar === '.')
                e = e.replace(/.$/, '');

            if (e)
                input.innerHTML = eval(e);
            decimaladded = false;

        }
        else if (operator.indexOf(btnval) > -1) {
            var lastchar = inputval[inputval.length - 1];
            if (inputval !== '' && operator.indexOf(lastchar) === -1) {
                input.innerHTML += btnval;
            }

            else if (inputval === '' && btnval === '-') {
                input.innerHTML += btnval;

            }
            if (operator.indexOf(lastchar) > -1 && inputval.length > 1) {
                input.innerHTML = inputval.replace(/.$/, btnval);
            }
            decimaladded = false;
        }
        else if (btnval === '=') {
            if (!decimaladded) {
                input.innerHTML += btnval;
                decimaladded = true

            }
        } else {
            input.innerHTML += btnval;
        }
        e.preventdefualt();

    }
}
