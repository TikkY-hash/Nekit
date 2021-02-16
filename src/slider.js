function slider({
    container,
    fields,
    slide,
    nextArrow,
    prevArrow,
    interval,
    mouseOverImage,
    slidesToShow,
    arrowsWrapper,
    slidesToScroll,
    speed,
    mouseOverDots,
    responsive
}) {

    responsive.forEach(value => {
        if (document.documentElement.offsetWidth < value.breackpoint) {
            const {
                speedR = 3000,
                    intervalR = true,
                    mouseOverImageR = true,
                    mouseOverDotsR = true,
                    slidesToShowR = 1,
                    slidesToScrollR = 1
            } = value.settings;

            speed = speedR;
            interval = intervalR;
            mouseOverImage = mouseOverImageR;
            mouseOverDots = mouseOverDotsR;
            slidesToShow = slidesToShowR;
            slidesToScroll = slidesToScrollR;
        }
    });

    const wrapper = document.querySelector(container),
        inner = document.querySelector(fields),
        slides = document.querySelectorAll(slide),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        arrows = document.querySelector(arrowsWrapper),
        width = window.getComputedStyle(wrapper).width;


    let offset = 0,
        index = 0,
        userWidth, slidesLength, i;

    console.log(width)
    userWidth = changeWidth(width) * slidesToShow;
    slidesLength = slides.length - slidesToShow - (slidesToScroll - 1);

    wrapper.style.width = `${userWidth}px`;

    wrapper.style.width = `${userWidth}px`;

    wrapper.style.overflow = "hidden";

    inner.style.width = 100 * slides.length + '%';
    inner.style.display = "flex";

    slides.forEach(value => {
        if (document.documentElement.offsetWidth <= 990 && document.documentElement.offsetWidth >= 981 ) {
            value.style.width = `${changeWidth(width) - 100}px`
        } else {
            value.style.width = width;
        }
    });


    arrows.style.maxWidth = `${userWidth}px`;


    //Dots
    // const div = document.createElement('div');
    // div.classList.add('div__dots');
    // div.style.marginTop = "15px";

    // for (let i = 0; i <= slidesLength; i++) {
    //     div.innerHTML += `
    //     <button class="dot__style" data-count = ${i + 1}></button>
    //     `;
    // }

    // wrapper.append(div);

    // const dots = document.querySelectorAll('.dot__style'),
    //     divDots = document.querySelector('.div__dots');

    // changeDots(dots, index);

    // function changeDots(selector, index) {
    //     selector.forEach(value => {
    //         value.classList.remove('dots__active');
    //     });
    //     selector[index].classList.add('dots__active');
    // }

    next.addEventListener('click', () => {
        nextSlide(index);
    });

    function changeWidth(width) {
        // return width.replace(/\D/gi, '');

        return +width.slice(0, width.length - 2);
    }

    function nextSlide() {
        if (offset === (changeWidth(width) * slidesToScroll) * (slides.length - slidesToShow - (slidesToScroll - 1))) {
            offset = 0;
        } else {
            offset += (changeWidth(width) * slidesToScroll);
        }

        inner.style.transform = `translateX(-${offset}px)`;

        index = index === slidesLength ? index = 0 : ++index;

        // changeDots(dots, index);
    }

    prev.addEventListener('click', () => {

        if (offset === 0) {
            offset = (changeWidth(width) * slidesToScroll) * (slides.length - slidesToShow - (slidesToScroll - 1));
        } else {
            offset -= (changeWidth(width) * slidesToScroll);
        }

        inner.style.transform = `translateX(-${offset}px)`;

        index = index === 0 ? index = slidesLength : --index;

        // changeDots(dots, index);
    });

    function mouseOver(selector) {
        selector.addEventListener('mouseover', () => {
            clearInterval(i);
        });
    }

    function mouseOut(selector) {
        let check = true;

        selector.addEventListener('mouseout', interval);

        function interval(e) {
            i = setInterval(() => {
                nextSlide();
            }, speed);

            check = false;

            if (!check && mouseOverDots && e.target.matches('button.dot__style')) {
                selector.removeEventListener('mouseout', interval);
            }
        }
    }

    if (interval) {
        //Animation 
        i = setInterval(() => {
            nextSlide();
        }, speed);

        if (mouseOverImage) {
            mouseOver(inner);
            mouseOut(inner);
        }
    }

    //Dots click
    wrapper.addEventListener('click', (e) => {
        if (e.target && e.target.getAttribute('data-count')) {
            const count = e.target.getAttribute('data-count');
            const arrow = e.target;

            index = count - 1;
            // changeDots(dots, index);

            if (mouseOver) {
                clearInterval(i);
                mouseOut(arrow);
            }

            offset = (changeWidth(width) * slidesToScroll) * (count - 1);
            inner.style.transform = `translateX(-${offset}px)`;
        }
    });
}

export default slider;