let data = [
    {
        id: 1,
        imageurl: 'https://p4.wallpaperbetter.com/wallpaper/880/265/274/4k-oled-plants-fern-green-hd-wallpaper-preview.jpg',
        title: 'Plant 1',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageurl: 'https://c0.wallpaperflare.com/preview/607/859/695/summer-background-green-nature.jpg',
        title: 'Plant 2',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageurl: 'https://i.pinimg.com/originals/4b/a8/28/4ba828367acae72269a6cc55c97d21a4.jpg',
        title: 'Plant 3 ',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageurl: 'https://images5.alphacoders.com/436/436006.jpg',
        title: 'Plant 4',
        url: 'https://google.com'
    }
]



let arrowleft = document.getElementById('arrow-left');
let arrowright = document.getElementById('arrow-right');
let slidercontent = document.getElementById('slider-content');
let dotslist = document.getElementsByClassName('dot');


let sliderindex = 0;

function createatag(item){
    let atag = document.createElement('a');
    atag.setAttribute('href', item.url );
    atag.classList.add('slide');

    return atag;

}


function createimgtag(item){
    slidercontent.style.backgroundImage = 'url('+ item.imageurl +')';
    slidercontent.style.backgroundRepeat = "no-repeat";
    slidercontent.style.backgroundSize = "cover";
}



function createh2tag(item){
    let tagtitle = document.createElement('h2');
    tagtitle.classList.add('slider-title');
    tagtitle.append(item.title);

    return tagtitle;
}


function createdots(item){
    let dots = document.createElement('div');
    dots.classList.add('dots');
    
    data.forEach((element)=>{
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id-1 );

        dot.onclick = function(event){
            let id = event.target.getAttribute('data-id');
            sliderindex = id;
            setslide();
        }
        dots.appendChild(dot);
    })
    return dots;
}



function setslide(){
    slidercontent.innerHTML = ' ';

    createimgtag(data[sliderindex]);
    
    let slideitem = createatag(data[sliderindex]);
    let h2tag = createh2tag(data[sliderindex]);
    let dots = createdots();

    slideitem.appendChild(h2tag);

    slidercontent.appendChild(slideitem);
    slidercontent.appendChild(dots);


    currentdotactive()

}


function currentdotactive(){
    dotslist[sliderindex].classList.add('active')
}



function arrowleftclick(){
    if (sliderindex<= 0){
        sliderindex = data.length - 1;
        setslide();
        return;
    }
    sliderindex --;
    setslide();
}

function arrowrightclick(){
    if(sliderindex >= data.length-1){
        sliderindex = 0;
        setslide();
        return;
    }
    sliderindex++;
    setslide();
}

arrowleft.addEventListener('click', arrowleftclick );
arrowright.addEventListener('click', arrowrightclick );

setInterval( () =>{
    arrowrightclick();
}, 4000)


setslide()