import React from "react";
import "../../tailwind.generated.css";
import classes from "./Hero.module.css";

function Hero() {
    return (
        <div className={classes.Hero}>
            <div className="font-sans p-6 h-full flex content-between justify-between md:justify-around flex-row md:flex-col">
                <div className="self-center md:text-center p-4">
                    <h1>Eat Healthy</h1>
                    <h2>Live Well</h2>
                </div>
                <div className="self-center md:text-justify max-w-xl p-4">
                    <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum sit sequi nulla ipsa aliquid esse vero veniam qui,
                        repellendus dolor tenetur, sapiente explicabo quod hic
                        reprehenderit. Sapiente doloremque fugit alias at totam.
                        Consectetur, facere natus.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
