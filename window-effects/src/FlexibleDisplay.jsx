import { useEffect, useState } from "react";

export default function FlexibleDisplay() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const readWindow = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", readWindow);
        // I am returning an empty array, because I want the effect to add the listener only once on first render.
        // If I left it out entirely, I would recreate the listener on every re-render
        return () => window.removeEventListener("resize", readWindow);
    }, []);
    console.log(windowSize);

     const responsiveStyle = {
        backgroundColor: windowSize.width < 768 ? 'orange' : 'blue',
        color: windowSize.width < 768 ? 'blue' : 'orange'
    }

    return (
        <div style={responsiveStyle}>
            <h1>Resolution</h1>
            <br/>
            <p>Width: {windowSize.width}</p>
            <br/>
            <p>Height: {windowSize.height}</p>
        </div>
    );

}