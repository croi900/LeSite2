function inapoi()
{

    document.getElementById("muian2").hidden = true;
    $('#muian').animate({
        width: "-=240"
    }, 100);
    scrollBy(0,-100000);
    setTimeout(()=>{document.getElementById("button_back").hidden = false;},1000);
    f = 1
}
var f = 100;

function susta()
{
    var x = document.getElementById("muian")
    if(f)
    {
        $('#muian').animate({
            width: "+=240"
        }, 100);
        setTimeout(()=>{document.getElementById("muian2").hidden = false},101);
        document.getElementById("button_back").hidden = true;
        f = 0
    }
}