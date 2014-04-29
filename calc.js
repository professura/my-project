window.onload =createCalc();
var str=""; // для временного хранения введеных данных в строке
var arg1=0; // перове введеное число
var arg2=0; // второе введенное число
var res=0; // результат
var tmp=0; // для временного хранения введеных данных числах
var sign="";// арифметический знак
var input_feild;//поле вывода данных
var dot; //кнопка с точкой (нужна чтобы нельзя было ввести две и более точки в числе)

//Блок с функциями событий кнопок
//------------------------------------------------------------------
//***события цифр************
function num1Click(event) {
	str+="1";
	tmp=parseFloat(str);
	input_feild.value=tmp;
}

function num2Click(event) {
	str+="2";
	tmp=parseFloat(str);
	input_feild.value=tmp;
}

function num3Click(event) {
	str+="3";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num4Click(event) {
	str+="4";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num5Click(event) {
	str+="5";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num6Click(event) {
	str+="6";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num7Click(event) {
	str+="7";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num8Click(event) {
	str+="8";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num9Click(event) {
	str+="9";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}

function num0Click(event) {
	str+="0";
	tmp=parseFloat(str);	
	input_feild.value=tmp;
}
//***************************


//деление
function divideClick(event) {
	sign="/";
	arg1=parseFloat(str);
	clearClick();
}

//умножение
function multClick(event) {
	sign="*";
	arg1=parseFloat(str);
	clearClick();
}

//сложение
function plusClick(event) {
	sign="+";	
	arg1=parseFloat(str);
	clearClick();
}

//разность
function minusClick(event) {
	sign="-";	
	arg1=parseFloat(str);
	clearClick();
}

//очистить поле
function clearClick(event) {
	dot.disabled=false;
	str="";
	input_feild.value=str;
	res=0;
}

//точка
function dotClick(event) {
	str+=".";
	input_feild.value=str;	
	dot.disabled=true;
}

//результат
function resultClick(event) {
	dot.disabled=false;
	if(sign.toString()=="/"){
		arg2=parseFloat(str);
		res=arg1/arg2;
	}
	
	if(sign=="*"){
		arg2=parseFloat(str);
		res=arg1*arg2;
	}	
	
	if(sign=="+"){
		arg2=parseFloat(str);
		res=arg1+arg2;
	}
	
	if(sign=="-"){
		arg2=parseFloat(str);
		res=arg1-arg2;
	}
	input_feild.value=res;
}
//-------------------------------------------------------------------

//Создание визуального интрерфейса калькулятора
function createCalc()
{	
	//создание дива для калькулятора
	var div = document.createElement("div");
	div.id = "div_calc";
	div.className = "divCalc";
	div.align = "center";
	document.body.appendChild(div);
	
	//поле вывода данных
	var inp = document.createElement("input");
	input_feild=inp;
	inp.id="inpCalc";	
	inp.type = "text";
	inp.size="35";	
	inp.className="calcInput";
	div.appendChild(inp);
	
	//num 1
	var btn = document.createElement("input");
	btn.id="num1";	
	btn.type = "button";	
	btn.addEventListener("click",num1Click,false);
	btn.value="1";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//num 2
	var btn = document.createElement("input");
	btn.id="num2";	
	btn.type = "button";	
	btn.addEventListener("click",num2Click,false);
	btn.value="2";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//num 3
	var btn = document.createElement("input");
	btn.id="num3";	
	btn.type = "button";	
	btn.addEventListener("click",num3Click,false);
	btn.value="3";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//деление
	var btn = document.createElement("input");
	btn.id="divide";	
	btn.type = "button";	
	btn.addEventListener("click",divideClick,false);
	btn.value="/";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//num 4
	var btn = document.createElement("input");
	btn.id="num4";	
	btn.type = "button";	
	btn.addEventListener("click",num4Click,false);
	btn.value="4";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//num 5
	var btn = document.createElement("input");
	btn.id="num5";	
	btn.type = "button";	
	btn.addEventListener("click",num5Click,false);
	btn.value="5";
	btn.className="calcNum";
	div.appendChild(btn);

	//num 6
	var btn = document.createElement("input");
	btn.id="num6";	
	btn.type = "button";	
	btn.addEventListener("click",num6Click,false);
	btn.value="6";
	btn.className="calcNum";
	div.appendChild(btn);

	//умножение
	var btn = document.createElement("input");
	btn.id="mult";	
	btn.type = "button";	
	btn.addEventListener("click",multClick,false);
	btn.value="*";
	btn.className="calcNum";
	div.appendChild(btn);
		
	//num 7
	var btn = document.createElement("input");
	btn.id="num7";	
	btn.type = "button";	
	btn.addEventListener("click",num7Click,false);
	btn.value="7";
	btn.className="calcNum";
	div.appendChild(btn);	
	
	//num 8
	var btn = document.createElement("input");
	btn.id="num8";	
	btn.type = "button";	
	btn.addEventListener("click",num8Click,false);
	btn.value="8";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//num 9
	var btn = document.createElement("input");
	btn.id="num9";	
	btn.type = "button";	
	btn.addEventListener("click",num9Click,false);
	btn.value="9";
	btn.className="calcNum";
	div.appendChild(btn);

	//сложение
	var btn = document.createElement("input");
	btn.id="plus";	
	btn.type = "button";	
	btn.addEventListener("click",plusClick,false);
	btn.value="+";
	btn.className="calcNum";
	div.appendChild(btn);	
	
	//num 0
	var btn = document.createElement("input");
	btn.id="num0";	
	btn.type = "button";	
	btn.addEventListener("click",num0Click,false);
	btn.value="0";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//очистить поле
	var btn = document.createElement("input");
	btn.id="clear";	
	btn.type = "button";	
	btn.addEventListener("click",clearClick,false);
	btn.value="С";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//точка
	var btn = document.createElement("input");
	dot=btn;
	btn.id="dot";	
	btn.type = "button";	
	btn.addEventListener("click",dotClick,false);
	btn.value=".";
	btn.className="calcNum";
	div.appendChild(btn);

	//вычитание
	var btn = document.createElement("input");
	btn.id="minus";	
	btn.type = "button";	
	btn.addEventListener("click",minusClick,false);
	btn.value="-";
	btn.className="calcNum";
	div.appendChild(btn);
	
	//равно
	var btn = document.createElement("input");
	btn.id="result";	
	btn.type = "button";	
	btn.addEventListener("click",resultClick,false);
	btn.value="=";
	btn.className="calcNum";
	div.appendChild(btn);
}
