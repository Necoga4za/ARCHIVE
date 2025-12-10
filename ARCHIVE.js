document.addEventListener('DOMContentLoaded', () => {

    const SECTION_ZERO_HEIGHT = 1080;
    const SCROLL_THRESHOLD = 50; 
    const ANIMATION_DURATION_S1 = SCROLL_THRESHOLD * 4; 
    const TOTAL_ANIMATION_END_S1 = SECTION_ZERO_HEIGHT + ANIMATION_DURATION_S1; 
    const HALF_ANIMATION_DURATION_S1 = ANIMATION_DURATION_S1 / 2; 

    const body = document.body;
    const section1 = document.querySelector('.frame .section1'); 
    const imgElement = document.querySelector('.frame .img');
    const textWrapper = document.querySelector('.frame .text-wrapper');
    const suyeonArchive = document.querySelector('.frame .SUYEON-ARCHIVE'); 
    
    const subsequentContent = document.querySelectorAll(
        '.frame > .dis, .frame > .travel-for-me, .frame > .youth-is-a-journey, .frame > .k-2, .frame > .k-3, .frame > .k-4, .frame > .k-5, .frame > .k-6, .frame > .k-7, .frame > .k-8, .frame > .k-9, .frame > .k-10, .frame > .k-11, .frame > .k-12, .frame > .k-13, .frame > .k-14, .frame > .k-15, .frame > .k-16, .frame > .k-17, .frame > .k-18, .frame > .k-19, .frame > .k-20, .frame > .k-21, .frame > .k-22, .frame > .k-23, .frame > .p-9, .frame > .p-10, .frame > .r-4, .frame > .p-11, .frame > .element-12, .frame > .polygon, .frame > .element-13, .frame > .polygon-2, .frame > .section5, .frame > .section6, .frame > .section7, .frame > .section8, .frame > .section9, .frame > .section10' 
    );

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const relativeScroll = scrollY - SECTION_ZERO_HEIGHT; 
        
        if (suyeonArchive) {
            if (scrollY >= SECTION_ZERO_HEIGHT && scrollY <= TOTAL_ANIMATION_END_S1) {
                 suyeonArchive.style.opacity = 1;
            } else {
                 suyeonArchive.style.opacity = 0; 
            }
        }

        if (scrollY >= SECTION_ZERO_HEIGHT && scrollY <= TOTAL_ANIMATION_END_S1) {

            section1.style.position = 'fixed'; 
            section1.style.top = '0';

            subsequentContent.forEach(el => el.style.display = 'none');

            let newOpacity;
            if (relativeScroll <= HALF_ANIMATION_DURATION_S1) {
                const ratio = relativeScroll / HALF_ANIMATION_DURATION_S1;
                newOpacity = 1.0 - (0.5 * ratio);
            } else {
                const ratio = (relativeScroll - HALF_ANIMATION_DURATION_S1) / HALF_ANIMATION_DURATION_S1;
                newOpacity = 0.5 - (0.5 * ratio);
            }
            if (textWrapper) {
                textWrapper.style.opacity = Math.max(0, Math.min(1, newOpacity));
            }

            if (imgElement) {
                imgElement.classList.remove('scale-1', 'scale-2', 'scale-3', 'scale-4');
                if (relativeScroll >= SCROLL_THRESHOLD * 4) {
                    imgElement.classList.add('scale-4');
                } else if (relativeScroll >= SCROLL_THRESHOLD * 3) {
                    imgElement.classList.add('scale-3');
                } else if (relativeScroll >= SCROLL_THRESHOLD * 2) {
                    imgElement.classList.add('scale-2');
                } else if (relativeScroll >= SCROLL_THRESHOLD) {
                    imgElement.classList.add('scale-1');
                }
            }

        } else if (scrollY < SECTION_ZERO_HEIGHT) {
            
            section1.style.position = 'absolute';
            section1.style.top = SECTION_ZERO_HEIGHT + 'px'; 
            
            if (textWrapper) textWrapper.style.opacity = 0.0; 

            if (imgElement) imgElement.classList.remove('scale-1', 'scale-2', 'scale-3', 'scale-4');
            subsequentContent.forEach(el => el.style.display = 'none');
            
        } else {
            
            if (textWrapper) textWrapper.style.opacity = 0.0; 
            
            if (imgElement) {
                imgElement.classList.remove('scale-1', 'scale-2', 'scale-3'); 
                imgElement.classList.add('scale-4'); 
            }

            section1.style.position = 'absolute';
            section1.style.top = TOTAL_ANIMATION_END_S1 + 'px'; 

            subsequentContent.forEach(el => {
                el.style.display = ''; 
            }); 
        }

        if (scrollY > 0) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

    window.dispatchEvent(new Event('scroll'));
});
///section2
            const section2TextElements = document.querySelectorAll('.section2 .dis, .section2 .travel-for-me, .section2 .youth-is-a-journey');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null, 
                rootMargin: '0px 0px -100px 0px', 
                threshold: 0.1 
            });

            section2TextElements.forEach(element => {
                observer.observe(element);
            });


            //section5/텍스트스크립트
document.addEventListener('DOMContentLoaded', () => {

    const independentTextSelectors = ['.hongkong-p', '.text-wrapper-15'];
    

    const fadeImageSelectors = '.section5 .k-13, .section5 .p-7, .section5 .k-12, .section5 .k-3, .section6 .p-2, .section6 .k-14, .section6 .k-4';
    const fadeImageElements = document.querySelectorAll(fadeImageSelectors);

    const v1Image = document.querySelector('.v-1'); 
    const v1Text = document.querySelector('.VillaBorghese-2'); 


    const setupWords = (element) => {
        if (!element) return;
        const textContent = element.innerHTML
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        const words = textContent.split(/\s+/);
        element.innerHTML = '';
        words.forEach((word, index) => {
            const mask = document.createElement('span'); 
            mask.className = 'word-mask';
            const wordEl = document.createElement('span');
            wordEl.className = 'word';
            wordEl.textContent = word;
            wordEl.style.transitionDelay = `${index * 0.05}s`; 
            mask.appendChild(wordEl);
            element.appendChild(mask);
            
            if (index < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        });
    };


    [...independentTextSelectors, '.VillaBorghese-2'].forEach(selector => {
        const el = document.querySelector(selector);
        if (el) setupWords(el);
    });


    const generalTextObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    independentTextSelectors.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) generalTextObserver.observe(el);
    });


    const fadeImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeImageElements.forEach(img => {
        img.style.opacity = '0'; 
        img.style.transition = 'opacity 1s ease-out';
        fadeImageObserver.observe(img);
    });


    const v1Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                if (v1Text) {
                    v1Text.classList.add('animate-in');
                }
                setTimeout(() => {
                    entry.target.classList.add('active'); 
                    entry.target.classList.add('fade-in'); 
                }); 

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 

    if (v1Image) {
        v1Image.style.opacity = '0'; 
        v1Observer.observe(v1Image);
    }
});
//section3//
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.frame .section3');

    if (!section) {
        console.error("Error: .frame .section3 요소를 찾을 수 없습니다.");
        return;
    }


    const SCROLL_START = 2800; 
    const SCROLL_END = 5500; 
    const SCROLL_DURATION = SCROLL_END - SCROLL_START;
    
    const MAX_TRANSLATE_X = -800; 

    console.log("JS Loaded. SCROLL_START:", SCROLL_START);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        let translateX = 0;
        
        if (scrollY < SCROLL_START) {
            translateX = 0;
        } else if (scrollY > SCROLL_END) {
            translateX = MAX_TRANSLATE_X;
        } else {
            const progress = (scrollY - SCROLL_START) / SCROLL_DURATION;
            translateX = progress * MAX_TRANSLATE_X;
        }

        section.style.transform = `translateX(${translateX}px)`;
    });

    window.dispatchEvent(new Event('scroll'));
});

//section10

        document.addEventListener('DOMContentLoaded', () => {
    const pElement = document.querySelector('.hongkong-p');

    const section10Images = document.querySelectorAll(
        '.section10 .k-6, .section10 .p-3, .section10 .p-4, .section10 .p-5, .section10 .k-7, .section10 .k-8, .section10 .r-0, .section10 .k-9, .section10 .p-6'
    );
    

    const imageObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
          
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); 
                
                observer.unobserve(entry.target); 
            }
        });
    };

    const imageObserver = new IntersectionObserver(imageObserverCallback, {
        root: null,
        threshold: 0.1
    });


    section10Images.forEach(image => {
        imageObserver.observe(image);
    });
});

//section7//
document.addEventListener('DOMContentLoaded', () => {
    const imagesToMove = document.querySelectorAll('.move img'); 
    const lensFoggy = document.querySelector('.lens-foggy');
    
    if (!lensFoggy) return;

    const textParallaxSpeed = 0.15; 
    const FOGGY_TEXT_SCROLL_DURATION = 1000; 

    const SCROLL_TRIGGER_POSITION = 11748; 

    let isAnimating = false;
    let lastScrollY = window.scrollY || window.pageYOffset;
    
    let isImageAnimationActive = false;
    
    let triggerScrollPosition = SCROLL_TRIGGER_POSITION; 

    const allStyles = [];
    imagesToMove.forEach(img => {
        const initialStyle = getComputedStyle(img);
        const initialTop = parseFloat(initialStyle.top) || 0;
        const initialLeft = parseFloat(initialStyle.left) || 0;
        
        const targetClass = img.getAttribute('data-target-class');
        const targetElement = document.querySelector(`.${targetClass}`);
        
        let targetLeft = 0;
        let targetTop = 0;
        let targetWidth = 0;
        let targetHeight = 0;

        if (targetElement) {
            const targetStyle = getComputedStyle(targetElement);
            targetTop = parseFloat(targetStyle.top) || 0;
            targetLeft = parseFloat(targetStyle.left) || 0;
            targetWidth = parseFloat(targetStyle.width) || 0;
            targetHeight = parseFloat(targetStyle.height) || 0;
        }

        allStyles.push({
            element: img,
            translateX: targetLeft - initialLeft,
            translateY: targetTop - initialTop,
            target: { width: targetWidth, height: targetHeight },
        });
    });


    const updateAnimation = () => {
        const currentScrollY = lastScrollY;
        
        lensFoggy.style.transform = `translateY(-${currentScrollY * textParallaxSpeed}px)`; 
        
        const scrollDelta = currentScrollY - triggerScrollPosition;
        
        if (scrollDelta >= 0) {
            const opacity = 1 - (scrollDelta / FOGGY_TEXT_SCROLL_DURATION);
            lensFoggy.style.opacity = Math.max(0, Math.min(1, opacity)); 
        } else {
            lensFoggy.style.opacity = 1; 
        }

        isImageAnimationActive = currentScrollY >= SCROLL_TRIGGER_POSITION;
        const shouldBeAnimated = isImageAnimationActive; 

        allStyles.forEach(item => {
            const img = item.element;
            
            if (shouldBeAnimated) {
                img.style.transform = `translate(${item.translateX}px, ${item.translateY}px)`;
                img.style.width = `${item.target.width}px`; 
                img.style.height = `${item.target.height}px`;

            } else {
                img.style.transform = 'translate(0, 0)'; 
                img.style.width = ''; 
                img.style.height = '';
            }
        });
        
        isAnimating = false;
    };


    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY || window.pageYOffset; 
        
        if (!isAnimating) {
            isAnimating = true;
            window.requestAnimationFrame(updateAnimation);
        }
    });


    updateAnimation();
});
////section4/////
const section4 = document.querySelector('.section4'); 
const film1 = document.querySelector('.film1');
const film2 = document.querySelector('.film2');
const section5 = document.querySelector('.section5'); // section5 요소 추가


const titleParis = document.getElementById('main-title');
const titleRoma = document.getElementById('title-roma');
const titleFlorence = document.getElementById('title-florence');
const titleVenice = document.getElementById('title-venice');
const titleHongkong = document.getElementById('title-hongkong');
const titleTokyo = document.getElementById('title-tokyo');
const titleOsaka = document.getElementById('title-osaka');
const titleKyoto = document.getElementById('title-kyoto');
const titleNara = document.getElementById('title-nara');

const descParisMain = document.getElementById('desc-main');
const descParisAlt = document.getElementById('desc-alt');
const descRomaMain = document.getElementById('desc-roma-main');
const descFlorenceAlt = document.getElementById('desc-florence-alt');
const descVeniceAlt = document.getElementById('desc-venice-alt');
const descHongkongMain = document.getElementById('desc-hongkong-main');
const descHongkongAlt = document.getElementById('desc-hongkong-alt'); 
const descJapanMain = document.getElementById('desc-japan-main'); // Tokyo
const descJapanAlt1 = document.getElementById('desc-japan-alt1'); // Osaka
const descJapanAlt2 = document.getElementById('desc-japan-alt2'); // Kyoto
const descJapanAlt3 = document.getElementById('desc-japan-alt3'); // Nara


const parisImages = document.querySelectorAll('.film1 .image-box-386x489:not(.roma-image):not(.hongkong-image):not(.japan-image), .film2 .image-box-386x489:not(.roma-image):not(.hongkong-image):not(.japan-image)');
const romaImages = document.querySelectorAll('.roma-image');
const hongkongImages = document.querySelectorAll('.hongkong-image');
const japanImages = document.querySelectorAll('.japan-image');


let interactionStep = 0; 
let isAnimating = false;
const filmFastDuration = 1500; 
const MAX_STEP = 10;


if (section4) {
    section4.addEventListener('wheel', (e) => {
        e.preventDefault(); 
        e.stopPropagation();

        if (isAnimating) return; 

        if (e.deltaY > 0) {
            if (interactionStep < MAX_STEP) {
                interactionStep++;
                handleInteraction('down', interactionStep);
            } else if (interactionStep === MAX_STEP) { 
                exitSectionTransition(); 
            }
        } else if (e.deltaY < 0) { 
            if (interactionStep > 0) {
                handleInteraction('up', interactionStep);
                interactionStep--;
            }
        }
    }, { passive: false });
}


function toggleElement(hideElement, showElement) {
    if (hideElement) {
        hideElement.style.opacity = '0';
    }
    if (showElement) {
        showElement.style.opacity = '1';
    }
}


function toggleImageSet(hideSet, showSet) {
    hideSet.forEach(img => img.style.opacity = '0');
    showSet.forEach(img => img.style.opacity = '1');
}


function performFilmRollTransitionDown(hideTitle, hideDesc, showTitle, showDesc, hideImages, showImages) {
    isAnimating = true;

    toggleElement(hideTitle, null);
    toggleElement(hideDesc, null);

    film1.classList.add('film-fast-up');
    film2.classList.add('film-fast-down');

    setTimeout(() => {
        toggleImageSet(hideImages, showImages);
    }, filmFastDuration / 2); 

    setTimeout(() => {

        film1.classList.remove('film-fast-up');
        film2.classList.remove('film-fast-down');

        toggleElement(null, showTitle);
        toggleElement(null, showDesc);

        isAnimating = false;
        
    }, filmFastDuration); 
}

function performFilmRollTransitionUp(hideTitle, hideDesc, showTitle, showDesc, hideImages, showImages) {

    isAnimating = true;

    toggleElement(hideTitle, null);
    toggleElement(hideDesc, null);
    
    film1.classList.add('film-fast-down');
    film2.classList.add('film-fast-up'); 

    setTimeout(() => {
        toggleImageSet(hideImages, showImages);
    }, filmFastDuration / 2); 

    setTimeout(() => {

        film1.classList.remove('film-fast-down');
        film2.classList.remove('film-fast-up');

        toggleElement(null, showTitle);
        toggleElement(null, showDesc);

        isAnimating = false;
        
    }, filmFastDuration); 
}

function handleInteraction(direction, step) {
    isAnimating = true;

    if (direction === 'down') {
        switch (step) {
            case 1:
                toggleElement(descParisMain, descParisAlt);
                isAnimating = false;
                break;
            case 2:
                performFilmRollTransitionDown(
                    titleParis, descParisAlt, 
                    titleRoma, descRomaMain, 
                    parisImages, romaImages
                );
                break;
            case 3:
                toggleElement(titleRoma, titleFlorence);
                toggleElement(descRomaMain, descFlorenceAlt);
                isAnimating = false;
                break;
            case 4:
                toggleElement(titleFlorence, titleVenice);
                toggleElement(descFlorenceAlt, descVeniceAlt);
                isAnimating = false;
                break;
            case 5:
                performFilmRollTransitionDown(
                    titleVenice, descVeniceAlt, 
                    titleHongkong, descHongkongMain, 
                    romaImages, hongkongImages
                );
                break;
            case 6:
                toggleElement(descHongkongMain, descHongkongAlt);
                isAnimating = false;
                break;
            case 7:
                performFilmRollTransitionDown(
                    titleHongkong, descHongkongAlt, 
                    titleTokyo, descJapanMain, 
                    hongkongImages, japanImages
                );
                break;
            case 8:
                toggleElement(titleTokyo, titleOsaka);
                toggleElement(descJapanMain, descJapanAlt1);
                isAnimating = false;
                break;
            case 9:
                toggleElement(titleOsaka, titleKyoto);
                toggleElement(descJapanAlt1, descJapanAlt2);
                isAnimating = false;
                break;
            case 10:
                toggleElement(titleKyoto, titleNara);
                toggleElement(descJapanAlt2, descJapanAlt3);
                isAnimating = false;
                break;
        }

    } else if (direction === 'up') {
        switch (step) {
            case 1:
                toggleElement(descParisAlt, descParisMain);
                isAnimating = false;
                break;
            case 2:
                performFilmRollTransitionUp(
                    titleRoma, descRomaMain, 
                    titleParis, descParisAlt, 
                    romaImages, parisImages
                );
                break;
            case 3:
                toggleElement(titleFlorence, titleRoma);
                toggleElement(descFlorenceAlt, descRomaMain);
                isAnimating = false;
                break;
            case 4:
                toggleElement(titleVenice, titleFlorence);
                toggleElement(descVeniceAlt, descFlorenceAlt);
                isAnimating = false;
                break;
            case 5:
                performFilmRollTransitionUp(
                    titleHongkong, descHongkongMain, 
                    titleVenice, descVeniceAlt, 
                    hongkongImages, romaImages
                );
                break;
            case 6:
                toggleElement(descHongkongAlt, descHongkongMain);
                isAnimating = false;
                break;
            case 7:
                performFilmRollTransitionUp(
                    titleTokyo, descJapanMain, 
                    titleHongkong, descHongkongAlt, 
                    japanImages, hongkongImages
                );
                break;
            case 8:
                toggleElement(titleOsaka, titleTokyo);
                toggleElement(descJapanAlt1, descJapanMain);
                isAnimating = false;
                break;
            case 9:
                toggleElement(titleKyoto, titleOsaka);
                toggleElement(descJapanAlt2, descJapanAlt1);
                isAnimating = false;
                break;
            case 10:
                toggleElement(titleNara, titleKyoto);
                toggleElement(descJapanAlt3, descJapanAlt2);
                isAnimating = false;
                break;
        }
    }
}

function exitSectionTransition() {
    isAnimating = true;

    toggleElement(titleNara, null);
    toggleElement(descJapanAlt3, null);

    section4.style.backgroundColor = '#000000'; 

    film1.classList.add('film-fast-up');
    film2.classList.add('film-fast-down');

    setTimeout(() => {
      
        document.body.style.overflowY = 'auto'; 

        if (section5) {
            section5.scrollIntoView({ behavior: 'smooth' });
        }

        isAnimating = false;
        
    }, filmFastDuration); 
}


///section0///

const hoverContainers = document.querySelectorAll('.hover-trigger');

hoverContainers.forEach(container => {
    const textWrapper = container.querySelector('.scrolling-line-wrapper');
    if (!textWrapper) return;

    const originalText = textWrapper.querySelector('.original-text');
    if (originalText) {
        const calculateScrollDistance = () => {
            const textWidth = originalText.getBoundingClientRect().width;
            const textMargin = parseFloat(originalText.dataset.margin || 40);
            const scrollDistance = textWidth + textMargin;
            textWrapper.style.setProperty('--scroll-dist', `-${scrollDistance}px`);
        };

        calculateScrollDistance();
        window.addEventListener('resize', calculateScrollDistance);
    }

    container.addEventListener('mouseenter', () => {
        textWrapper.classList.add('is-scrolling');
    });

    container.addEventListener('mouseleave', () => {
        const currentTransform = window.getComputedStyle(textWrapper).getPropertyValue('transform');
        textWrapper.classList.remove('is-scrolling');
        textWrapper.style.transform = currentTransform;

        setTimeout(() => {
            textWrapper.style.transform = 'translateX(0)';
        }, 0);
    });
});

const filmRoll = document.querySelector('.film-roll');
let isDragging = false;
let startY;
let initialY;
let minTranslateY;
const maxTranslateY = 0;

const ACTIVATION_THRESHOLD_RATIO = 0.5;
let activationThreshold;


function dragStart(e) {
    if (e.button !== 0) return;

    filmRoll.classList.add('dragging');
    isDragging = true;

    startY = e.clientY;

    const style = window.getComputedStyle(filmRoll);
    const matrix = new DOMMatrix(style.transform);
    initialY = matrix.m42;

    const filmRollHeight = filmRoll.offsetHeight;

    minTranslateY = filmRollHeight * -0.9;

    activationThreshold = minTranslateY + (filmRollHeight * ACTIVATION_THRESHOLD_RATIO);
}

function dragMove(e) {
    if (!isDragging) return;

    e.preventDefault();

    const dy = e.clientY - startY;
    let newY = initialY + dy;

    newY = Math.min(newY, maxTranslateY);
    newY = Math.max(newY, minTranslateY);

    filmRoll.style.transform = `translateY(${newY}px)`;
}

function dragEnd() {
    if (!isDragging) return;

    filmRoll.classList.remove('dragging');
    isDragging = false;

    const style = window.getComputedStyle(filmRoll);
    const matrix = new DOMMatrix(style.transform);
    const currentY = matrix.m42;

    if (currentY >= activationThreshold) {
        filmRoll.style.transform = `translateY(${maxTranslateY}px)`;
    } else {
        filmRoll.style.transform = `translateY(${minTranslateY}px)`;
    }
}

filmRoll.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', dragMove);
document.addEventListener('mouseup', dragEnd);

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const filmBoxSides = document.querySelector('.film-box-sides');
const filmBoxMiddle = document.querySelector('.film-box-middle');
const middleLines = filmBoxMiddle ? filmBoxMiddle.querySelectorAll('.middle-line') : [];


let CANVAS_WIDTH = 285;
let CANVAS_HEIGHT = 636;

let targetX = CANVAS_WIDTH / 2;
let targetY = CANVAS_HEIGHT / 2;

let currentX = targetX;
let currentY = targetY;

const easing = 0.2;


const points = [
    { x: 0, y: 0 },
    { x: 0, y: 0 }, 
    { x: 0, y: 0, targetY: 0, currentY: 0 },
    { x: 0, y: 0, targetY: 0, currentY: 0 },
];


function updateCanvasDimensions() {

    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        
        
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        
        CANVAS_WIDTH = displayWidth;
        CANVAS_HEIGHT = displayHeight;

        targetX = CANVAS_WIDTH / 2;
        targetY = CANVAS_HEIGHT / 2;
        currentX = targetX;
        currentY = targetY;

        points[1].x = CANVAS_WIDTH;
        points[2].x = CANVAS_WIDTH;
        points[2].y = CANVAS_HEIGHT;
        points[2].targetY = CANVAS_HEIGHT;
        points[2].currentY = CANVAS_HEIGHT;
        points[3].y = CANVAS_HEIGHT;
        points[3].targetY = CANVAS_HEIGHT;
        points[3].currentY = CANVAS_HEIGHT;
    }
}


document.addEventListener('DOMContentLoaded', updateCanvasDimensions);
window.addEventListener('resize', updateCanvasDimensions);


canvas.addEventListener('mousemove', (e) => {
   
    targetX = e.offsetX;
    targetY = e.offsetY;
});


let activeDeltaX = 0;
let activeDeltaY = 0;
let activeLiftOffset = 0;
let activeControlOffsetX = 0;
let activeBottomControlOffsetY = 0;

const decayFactor = 0.85;

function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    const center = CANVAS_WIDTH / 2;
    const vCenter = CANVAS_HEIGHT / 2;

    const deltaX = currentX - center;
    const deltaY = currentY - vCenter;

    const X_TOLERANCE = 130;
    const Y_TOLERANCE = 100;

    if (Math.abs(deltaX) <= X_TOLERANCE && Math.abs(deltaY) <= Y_TOLERANCE) {

        const sideBendFactor = 0.35;
        const bottomBendFactor = 0.4;
        const liftFactor = Math.abs(deltaY) * 0.005;

        activeDeltaX = deltaX;
        activeDeltaY = deltaY;
        activeControlOffsetX = activeDeltaX * sideBendFactor;
        activeBottomControlOffsetY = activeDeltaY * bottomBendFactor;
        activeLiftOffset = liftFactor * CANVAS_HEIGHT;

    } else {

        activeDeltaX *= decayFactor;
        activeDeltaY *= decayFactor;
        activeControlOffsetX *= decayFactor;
        activeBottomControlOffsetY *= decayFactor;
        activeLiftOffset *= decayFactor;

        if (Math.abs(activeDeltaX) < 0.1) {
            activeDeltaX = 0;
            activeDeltaY = 0;
        }
    }


    if (filmBoxSides) {
        const rotateY_Deg = activeDeltaX * 0.11;
        const translateZ_Px = activeDeltaX * 0.05;

        filmBoxSides.style.transform = `
            translateZ(${translateZ_Px}px)
            rotateY(${rotateY_Deg}deg)
        `;
    }

    if (middleLines.length > 0) {
        const totalLines = middleLines.length;
        const halfLines = totalLines / 2;

        middleLines.forEach((line, index) => {
            const normalizedY = (index - halfLines + 0.5) / halfLines;

            const bendRotation = normalizedY * activeDeltaX * 0.005;
            const bendShiftX = Math.cos(normalizedY * Math.PI / 2) * activeControlOffsetX * 0.05;
            const rotateX_Deg = activeDeltaY * 0.05;

            line.style.transform = `
                translateX(${bendShiftX}px)
                rotateX(${rotateX_Deg}deg)
                rotateZ(${bendRotation}deg)
            `;
        });
    }

    points[2].targetY = CANVAS_HEIGHT + activeLiftOffset;
    points[3].targetY = CANVAS_HEIGHT + activeLiftOffset;

    points[2].currentY += (points[2].targetY - points[2].currentY) * easing;
    points[3].currentY += (points[3].targetY - points[3].currentY) * easing;


    ctx.shadowColor = 'rgba(0, 0, 0, 1)';
    ctx.shadowBlur = 17;
    ctx.shadowOffsetX = activeDeltaX * 0.05;
    ctx.shadowOffsetY =10 + activeLiftOffset * 0.5;


    ctx.beginPath();

    ctx.moveTo(points[0].x, points[0].y);

    ctx.quadraticCurveTo(CANVAS_WIDTH / 2, 0, points[1].x, points[1].y);

    const rightControlX = points[1].x + activeControlOffsetX;
    ctx.quadraticCurveTo(rightControlX, currentY, points[2].x, points[2].currentY);

    const bottomControlY = points[2].currentY + activeBottomControlOffsetY;
    ctx.quadraticCurveTo(currentX, bottomControlY, points[3].x, points[3].currentY);

    const leftControlX = points[3].x + activeControlOffsetX;
    ctx.quadraticCurveTo(leftControlX, currentY, points[0].x, points[0].y);

    ctx.closePath();

    ctx.fillStyle = '#1E1F21';
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
}

draw();


const customCursor = document.getElementById('custom-cursor');
const clickableElements = document.querySelectorAll('.hover-trigger, #monoToggleButton');


const clickSound = new Audio('img/audio/click-sound.mp3');
clickSound.volume = 0.6;

function playClickSound() {
    clickSound.pause();
    clickSound.currentTime = 0;

    clickSound.play().catch(error => {
    });
}


document.addEventListener('mousemove', (e) => {
    const offset = 16;

    customCursor.style.left = e.clientX - offset + 'px';
    customCursor.style.top = e.clientY - offset + 'px';
});


clickableElements.forEach(element => {

    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('expand');
    });

    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('expand');
    });

    element.addEventListener('click', () => {
        playClickSound();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const monoToggle = document.getElementById('monoToggleButton');
    const body = document.body;

    if (monoToggle) {

        monoToggle.addEventListener('click', function() {
            body.classList.toggle('film-active');

            if (typeof playClickSound === 'function') {
                playClickSound();
            }
        });

        const customCursor = document.getElementById('custom-cursor');

        if (customCursor) {
            monoToggle.addEventListener('mouseenter', () => {
                customCursor.classList.add('expand');
            });

            monoToggle.addEventListener('mouseleave', () => {
                customCursor.classList.remove('expand');
            });
        }
    }
});


/////

