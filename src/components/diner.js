import Link from "next/link";
import { useState } from "react";
import MoreChevron from '../components/moreChevron';

export default function Diner(props){

    const [mealDisplayed, setMealDisplayed] = useState(0);
    const [imgDescriptionDisplayed, setImgDescriptionDisplayed] = useState(false);
    let touchMoving = false;

    return (<div className="diner">
        <style jsx>{`
            .diner{
                background-color: var(--highlight);
                border-radius: 0.25rem;
                max-width: 35rem;
                width: 100vw;
                margin-top: 1rem;
            }
            .meal {
                position: relative;
                width: 100%;
            }
            .meal > p{
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 1rem;
                width: inherit;
                margin: 0;
                background-color: var(--highlight);
                opacity: 0;
                z-index: 1;
            }
            .meal > p.selected {
                opacity: 0.75;
            }
            img {
                border-radius: 0.25rem 0.25rem 0 0;
                width: 100%;
                height: auto;
            }
            .textual-content-container {
                padding: 1rem;
            }
            h4 {
                margin-top: 0;
            }
            .cycle-button-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                height: min-content;
                width: 100%;
                height: 100%;
                margin-bottom: auto; margin-top: auto;
                top: 0;
                left: 0;
            }
            .left {
                transform: rotate(90deg);
                border-radius: 0.25rem 0.25rem 0 0;
            }
            .right {
                transform: rotate(270deg);
            }
            .cycle-button {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--highlight);
                width: 2rem;
                height: 2rem;
                border-radius: 0.25rem 0.25rem 0 0;
            }
        `}</style>
        <div className="meal"
            onMouseEnter={ e => {setImgDescriptionDisplayed(true)}}
            onMouseLeave={ e => {setImgDescriptionDisplayed(false)}}
            onTouchMove={ e => { touchMoving = true }}
            onTouchEnd={ e => { if(!touchMoving){ setImgDescriptionDisplayed(!imgDescriptionDisplayed) } touchMoving = false; }}>
            <img 
                src={props.meals[mealDisplayed].imgUrl || ""}
            />
            <p className={imgDescriptionDisplayed ? "selected" : ""}>{props.meals[mealDisplayed].name || "sample meal name"}</p>
            <div className="cycle-button-container">
                <div className="left cycle-button"
                    onClick={e => {setMealDisplayed((mealDisplayed - 1) >= 0 ? (mealDisplayed - 1) : (props.meals.length - 1))}}
                    onTouchEnd={e => {if(!touchMoving){setMealDisplayed((mealDisplayed + 1) <= (props.meals.length - 1) ? (mealDisplayed + 1) : 0); touchMoving=false; e.preventDefault();}}}>
                    <MoreChevron />
                </div>
                <div className="right cycle-button"
                    onClick={e => {setMealDisplayed((mealDisplayed + 1) <= (props.meals.length - 1) ? (mealDisplayed + 1) : 0)}}
                    onTouchEnd={e => {if(!touchMoving){e.preventDefault(); setMealDisplayed((mealDisplayed + 1) <= (props.meals.length - 1) ? (mealDisplayed + 1) : 0); touchMoving=false;}}}>
                    <MoreChevron />
                </div>
            </div>
        </div>
        <div className="textual-content-container">
            <Link href={props.url || ""}>
                <h4>{props.title || "sample diner name"}</h4>
            </Link>
            <small>This restaurant typically charges {props.priceRange || "$-0 - $0"} for a meal.</small>
        </div>
    </div>)
}