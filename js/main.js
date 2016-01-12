var temp = [];
var result = [];
var numbers = [0,1,2,3,4,5,6,7,8,9];
$(".btn-1").click(function () {
    temp.push(($(this).text()));
    console.log(temp);
});

$(".btn-equal").click(function(){
    temp = temp.join("");
    result = eval(temp);
    $("#scrtext").text(result);
    temp = [];
});

$("#ac").click(function(){
    temp = [];
    $("#scrtext").text("");
})