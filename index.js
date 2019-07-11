(() => {
    const $divs = document.querySelectorAll('.wrapper > div'),
        $body = document.body;
    $divs.forEach($div => {
        $div.style.backgroundColor = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${.6})`;
    })
    $body.style.backgroundColor = `#cecece`;
})()