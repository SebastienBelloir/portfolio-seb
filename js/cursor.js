//cursor modification
const cursor1 = document.querySelector(".cursor");
const navLinks = document.querySelectorAll("nav")


document.addEventListener('mousemove', e => {
    cursor1.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor1.classList.add('link-grow');
    })
    link.addEventListener('mouseleave', () => {
        cursor1.classList.remove('link-grow');
    })
})

document.addEventListener('click', () => {
    cursor1.classList.add('expand');

    setTimeout(() => {
        cursor1.classList.remove('expand');
    }, 500)
})