console.log('Welcome to the Landingpage Compiler!');

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function animate(id,anim,time) {
    setTimeout(function(){
        var el = document.getElementById(id);
        el.classList.add(anim); 
    }, time);
}

var elements = [ 'nav', 'header', 'description', 'mid1', 'features', 'mid2', 'commands' ];
var sections = {description:'arrow1', mid1:'arrow2', features:'arrow3', mid2:'arrow4', commands:'arrow5'};

if(window.innerWidth >= 800){
    setTimeout(function(){
        elements.forEach(el => {
            var elem = document.getElementById(el);
            if (isInViewport(elem)) {
                elem.classList.add('fadeIn');
                if(sections[el] !== undefined) {
                    document.getElementById(sections[el]).classList.add('hidden');
                }
            }
        });
    }, 8201);

    window.addEventListener("scroll", function(event) {
        elements.forEach(el => {
            var elem = document.getElementById(el);
            if (isInViewport(elem)) {
                elem.classList.add('fadeIn');
                if(sections[el] !== undefined) {
                    document.getElementById(sections[el]).classList.add('hidden');
                }
            }
        });
    });
}else{
    elements.forEach(el => {
        document.getElementById(el).classList.add('fadeIn');
    });
}

var timeLine = [
    {
        id: "text_1",
        anim: "fadeIn",
        time: 200
    },
    {
        id: "text_1",
        anim: "fadeOut",
        time: 3200
    },
    {
        id: "text_2",
        anim: "fadeIn",
        time: 4200
    },
    {
        id: "text_2",
        anim: "fadeOut",
        time: 7200
    },
    {
        id: "background",
        anim: "fadeOut",
        time: 7200
    },
    {
        id: "container",
        anim: "display",
        time: 8200
    },
    {
        id: "background",
        anim: "hide",
        time: 8200
    },
];

timeLine.forEach(el =>  {
    animate(el['id'],el['anim'],el['time']);
})