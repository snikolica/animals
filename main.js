const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header')
const navi = document.querySelector('#nav');
const up = document.querySelector('.up');
const ul = document.querySelector('.ul');
const a = ul.querySelectorAll('a');
const boxText = document.querySelector('#box-text')
const section2 = document.querySelector('#section-2')
const imgGalery = document.querySelectorAll('.img-galery img');
const showText = document.querySelectorAll('.show-text');
const show = document.querySelectorAll('.show');
const showMedia = document.querySelectorAll('.showMedia');
const closeText = document.querySelectorAll('.show-text .close')
const sliderBox = document.querySelectorAll('.slider-box');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

a.forEach(e => {
    e.addEventListener('click', function (b) {
        b.preventDefault();
        a.forEach(r => {
            r.classList.remove('underline');
        })
        e.classList.add('underline');
        const id = this.getAttribute('href');
        const section = document.querySelector(id);
        const get = section.getBoundingClientRect();
        window.scrollTo({
            left: get.left + window.pageXOffset,
            top: get.top + window.pageYOffset,
            behavior: 'smooth'
        })
    })
})


menu.addEventListener('click', function () {
    navi.classList.add('hamburger');
    menu.style.opacity = '0';

})
close.addEventListener('click', function () {
    navi.classList.remove('hamburger');
    menu.style.opacity = '1';

});
window.addEventListener('load', e => {
    navi.classList.remove('hamburger');
})
const height = navi.getBoundingClientRect().height;

up.addEventListener('click', e => {
    const headerTop = header.getBoundingClientRect();
    window.scrollTo({
        top: headerTop.top + window.pageYOffset,
        left: headerTop.left + window.pageXOffset,
        behavior: 'smooth'
    });
})

function nav(entries) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) {
        navi.classList.add('sticky');
    } else {
        navi.classList.remove('sticky');
    }

}

const observer = new IntersectionObserver(nav, {
    root: null,
    threshold: 0,
    // rootMargin: `+${height}px`
})
observer.observe(header);

function textPosition(entries) {
    const [entry] = entries;
    // console.log(entry.target);
    if (!entry.isIntersecting) {
        boxText.classList.remove('box-text1');
    } else {
        boxText.classList.add('box-text1');
    }
    // observerText.unobserve(entry.target)
}
const observerText = new IntersectionObserver(textPosition, {
    root: null,
    threshold: .5
})
observerText.observe(section2);

const showBox = function (e) {
    imgGalery.forEach(img => {
        img.removeEventListener('click', showBox)
    })
    imgGalery.forEach(i => {
        i.style.filter = 'blur(10px)'
    })

    const closestShow = e.target.parentElement;
    const lastChild = closestShow.lastElementChild;
    show.forEach(item => {
        item.style.display = 'none';
        closeText.forEach(c => {
            c.style.display = 'block'
        })
    })

    lastChild.style.display = 'block';

}
imgGalery.forEach(img => {
    img.addEventListener('click', showBox);
})
// show.forEach(element => {
//     element.addEventListener('click', function (a) {
//         show.forEach(b => {
//             b.style.display = ' none';

//         })
//         closeText.style.display = 'none';
//         a.target.style.display = 'none';
//         imgGalery.forEach(i => {
//             i.style.filter = 'blur(0px)'
//         })
//         const closestShow = a.target.parentElement;
//         const lastChild = closestShow.lastElementChild;
//         imgGalery.forEach(img => {
//             img.addEventListener('click', showBox)
//             lastChild.style.display = 'block';
//         })
//     })
// });
closeText.forEach(e => {
    e.addEventListener('click', function (b) {
        show.forEach(b => {
            b.style.display = ' none';
        })

        closeText.forEach(c => {
            c.style.display = 'none';
        })

        imgGalery.forEach(i => {
            i.style.filter = 'blur(0px)'
        })

        const closestShow = b.target.parentElement;
        const lastChild = closestShow.lastElementChild;
        imgGalery.forEach(img => {
            img.addEventListener('click', showBox)
            lastChild.style.display = 'block';
        })
    })
})


//  e.target.style.display = 'none';

// const closestShow = e.target.parentElement;
// const lastChild = closestShow.lastElementChild;
// imgGalery.forEach(img => {
//     img.addEventListener('click', showBox)
//     lastChild.style.display = 'block';
let counter = 0;

sliderBox.forEach((slider, i) =>
    (slider.style.transform = `translateX(${100 *i}%)`));

function moveSliderLeft() {
    counter--;
    

    if (counter === -1) {
        counter = sliderBox.length - 1;
    };
    console.log(counter);
    sliderBox.forEach((slider, i) =>
        (slider.style.transform = `translateX(${100 *(i-counter)}%)`))
}

function moveSliderRight() {
    counter++;
    console.log(counter);
    if (counter === sliderBox.length) {
        counter = 0;
    };
    sliderBox.forEach((slider, i) =>
        (slider.style.transform = `translateX(${100 *(i-counter)}%)`))
}


left.addEventListener('click', moveSliderLeft);
right.addEventListener('click', moveSliderRight);