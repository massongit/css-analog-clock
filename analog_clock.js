function onLoad() {
    const now = new Date();
    const hourHandDeg = 360.0 * (now.getHours() % 12 + (now.getHours() + now.getSeconds() / 60) / 60) / 12;
    const minuteHandDeg = 360.0 * (now.getMinutes() + now.getSeconds() / 60) / 60;
    const secondHandDeg = 360.0 * now.getSeconds() / 60;
    const css = document.createElement('style');
    css.appendChild(document.createTextNode(`
    @keyframes hour_rotation {
        from {
           transform: rotate(${hourHandDeg}deg);
        }
        to {
            transform: rotate(${hourHandDeg + 360}deg);
        }
    }
    
    @keyframes minute_rotation {
        from {
            transform: rotate(${minuteHandDeg}deg);
        }
        to {
            transform: rotate(${minuteHandDeg + 360}deg);
        }
    }
    
    @keyframes second_rotation {
        from {
            transform: rotate(${secondHandDeg}deg);
        }
        to {
            transform: rotate(${secondHandDeg + 360}deg);
        }
    }
    `));
    document.head.appendChild(css);
}
