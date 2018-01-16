var FKeyPad = document.cal;
var Accum = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) {
	if (FlagNewNum) {
		FKeyPad.input.value = Num;
		FlagNewNum = false;
	}
	else {
		if (FKeyPad.Read.value == "0")
			FKeyPad.value = Num;
		else
			FKeyPad.input.value += Num;
	}
}
function Operation (Op) {
	var input = FKeyPad.input.value;
	if (FlagNewNum && PendingOp != "=");
	else
	{
		FlagNewNum = true;
		if ( '+' == PendingOp )
			Accum += parseFloat(input);
		else if ( '-' == PendingOp )
			Accum -= parseFloat(input);
		else if ( '/' == PendingOp )
			Accum /= parseFloat(input);
		else if ( '*' == PendingOp )
			Accum = Accum * parseFloat(input);
		else
			Accum = parseFloat(input);
		FKeyPad.input.value = Accum;
		PendingOp = Op;
	}
}