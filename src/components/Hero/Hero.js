import React from "react";
import "../../tailwind.generated.css";
import classes from "./Hero.module.css";

function Hero() {
    return (
        <div className={classes.Hero}>
            <div className="font-sans py-6 px-12 h-full flex content-between justify-between md:justify-around flex-row md:flex-col">
                <div className="self-center md:text-center p-4">
                    <h1>Eat Healthy</h1>
                    <h2>Live Well</h2>
                </div>
                <div className="self-center md:text-justify max-w-xl p-4">
                    <p className="text-base">
                        Eating healthy is important for everyone especially
                        teens. A healthy diet is the key to being fit. It is
                        unlike any diet. You will feel so pure, balanced, and
                        alert. It even prevents some health issues. You will
                        love your body and your body will love you if you start
                        eating healthy. There are so many different reasons why
                        eating healthy is important.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
