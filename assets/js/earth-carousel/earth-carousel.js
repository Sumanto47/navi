var radius = 360; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -50; // unit: seconds/360 degrees
var imgWidth = 250; // width of images (unit: px)
var imgHeight = 150; // height of images (unit: px)

// Define your image sources here
var imageSources1 = [

];

var imageSources2 = [

];

function initSpinContainer(containerId, spinContainerId, imageSources) {
    var ospin = document.getElementById(spinContainerId);
    var odrag = document.getElementById(containerId);
    
    imageSources.forEach(function(src, index) {
        var img = document.createElement('img');
        img.src = src;
        ospin.appendChild(img);
    });

    var aImg = ospin.getElementsByTagName('img');
    var aEle = [...aImg]; // only images for now

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    setTimeout(() => init(aEle), 1000);

    var tX = 0, tY = 10;
    var sX, sY, nX, nY, desX = 0, desY = 0;

    // Auto spin
    if (autoRotate) {
        var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    // Event handlers
    odrag.onpointerdown = function(e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        sX = e.clientX;
        sY = e.clientY;

        this.onpointermove = function(e) {
            e = e || window.event;
            nX = e.clientX;
            nY = e.clientY;
            desX = nX - sX;
            desY = nY - sY;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(ospin, tX, tY);
            sX = nX;
            sY = nY;
        };

        this.onpointerup = function() {
            odrag.timer = setInterval(function() {
                desX *= 0.95;
                desY *= 0.95;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTransform(ospin, tX, tY);
                playSpin(ospin, false);
                if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                    clearInterval(odrag.timer);
                    playSpin(ospin, true);
                }
            }, 17);
            this.onpointermove = this.onpointerup = null;
        };

        return false;
    };

    odrag.onmousewheel = function(e) {
        e = e || window.event;
        var d = e.wheelDelta / 20 || -e.detail;
        radius += d;
        init(aEle);
    };
}

function init(aEle) {
    for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = (aEle.length - i) / 4 + "s";
    }
}

function applyTransform(obj, tX, tY) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(ospin, yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

// Initialize both containers
initSpinContainer('drag-container_1', 'spin-container_1', imageSources1);
initSpinContainer('drag-container_2', 'spin-container_2', imageSources2);
