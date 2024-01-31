var currentNumber = "";
var firstNumber = [];
var isClick = false;

$(document).keydown(function(event){
    if(event.key === '-' || event.key === '.'){
        currentNumber += event.key;
    }
     for(var i = 0; i <=9; i++){
        if(event.key === i.toString()){
            currentNumber +=i.toString();
            $(".result").text(currentNumber); 
        }
     }

     if(['-'].includes(currentNumber) === false){
     if(['+','-','*','/'].includes(event.key)){
        number = event.key;
       test();
     }
    }

     if(['Enter'].includes(event.key)){
        $(".equal").click();
     }
       
     if(['Backspace', 'Delete'].includes(event.key)){
        var value = $(".result").text(); 
        currentNumber = value;
        if($(".result") === ""){
            firstNumber = "";
            currentNumber = "";
        }
        currentNumber = currentNumber.slice(0, -1);
        $(".result").text(currentNumber); 
    }

});

$(".button").click(function() {
    var number = $(this).html();
    if(number === '-'){
       currentNumber +=number;
       $(".result").text(currentNumber);
    }

    if(!isNaN(number) || number === '.'){
        isClick  = false;
    currentNumber += number;
    $(".result").text(currentNumber);
 
    }

    if(number === 'AC'){
        $(".result").text("");
        number = "";
        firstNumber = [];
        currentNumber = "";
        isClick = false;
    }

    if(['-'].includes(currentNumber) === false){
        if(['+','-','*','/'].includes(number)){
        firstNumber.push(currentNumber, number);
    if(firstNumber.length > 2){
        var result = compute(firstNumber);
        $(".result").text(result);
        currentNumber = result;
        firstNumber = [];
        firstNumber.push(currentNumber, number);
} 
currentNumber = "";

}
    }

   
    if(number === '='){
        firstNumber.push(currentNumber);
        var result = compute(firstNumber);
        $(".result").text(result);
        currentNumber = result;
        firstNumber = [];
        isClick = true;
}
    animation(this);
    
});

function animation(num){
    $(num).addClass("pressed");
    setTimeout(function() {
        $(num).removeClass("pressed");
    }, 100);
}



 function test(){
        firstNumber.push(currentNumber, number);
    if(firstNumber.length > 2){
        var result = compute(firstNumber);
        $(".result").text(result);
        currentNumber = result;
        firstNumber = [];
        firstNumber.push(currentNumber, number);
} 
currentNumber = "";

}

function compute(numbers){
    var num1 = parseFloat(numbers[0]);
    var operator = numbers[1];
    var num2 = parseFloat(numbers[2]);

    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default: 
            return "NaN";
    }
}
