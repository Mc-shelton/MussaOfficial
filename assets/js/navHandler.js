// alert('js loaded');
var count = 01
var countNum = document.getElementById('countNum');
var lineSlide = document.getElementById('lineSlide');
var banParLi = document.getElementsByClassName('liPar');

// alert(banParLi[0])

//functions
slideCount = 0;

// setInterval(() => {
//     slideCount = slideCount + 1
//     // if (slideCount = 130){
//     //     slideCount = 0
//     // }
//     lineSlide.style.marginLeft = slideCount + 'px'
// }, 100);


// alert();

function next(){
    // alert('next')
    slideCount = slideCount + 45
    count = count + 1
    if (slideCount > 140){
        slideCount = 0;
    }
    // alert(slideCount)
    lineSlide.style.marginLeft = slideCount + 'px'
    if (count>4){
        count = 1
    }
    countNum.innerHTML = count;
    
    banParLi[0].style.color = 'grey';
    banParLi[1].style.color = 'grey';
    banParLi[2].style.color = 'grey';
    banParLi[3].style.color = 'grey';
    banParLi[count-1].style.color = 'white';
    }
    
    function prev(){
        // alert('prev')
        slideCount = slideCount - 45
        count = count - 1
        if (slideCount<0){
            slideCount = 140
        }
        // alert(slideCount)
        lineSlide.style.marginLeft = slideCount + 'px'
        if (count<1){
            count = 4
        }
        countNum.innerHTML = count;
        
        banParLi[0].style.color = 'grey';
        banParLi[1].style.color = 'grey';
        banParLi[2].style.color = 'grey';
        banParLi[3].style.color = 'grey';
        banParLi[count-1].style.color = 'white';
        
        
        }
    
function test(){
    
    if (slideCount > 140){
        slideCount = 0;
    }
    // alert(slideCount)
    lineSlide.style.marginLeft = slideCount + 'px'
    if (count>4){
        count = 1
    }
    slideCount = slideCount + 45;
    countNum.innerHTML = count;
    
    banParLi[0].style.color = 'grey';
    banParLi[1].style.color = 'grey';
    banParLi[2].style.color = 'grey';
    banParLi[3].style.color = 'grey';
    banParLi[count-1].style.color = 'white';
    
    count = count +1
    
    setTimeout(test,5800)
}

test();