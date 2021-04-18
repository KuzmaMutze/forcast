import React from "react"
import classes from "./BoxDay.module.scss";
//ICONS
import img1 from "../../../../img/01d.png";
import img2 from "../../../../img/01n.png";
import img3 from "../../../../img/02d.png";
import img4 from "../../../../img/02n.png";
import img5 from "../../../../img/03d.png";
import img6 from "../../../../img/03n.png";
import img7 from "../../../../img/04d.png";
import img8 from "../../../../img/04n.png";
import img9 from "../../../../img/09d.png";
import img10 from "../../../../img/09n.png";
import img11 from "../../../../img/10d.png";
import img12 from "../../../../img/10n.png";
import img13 from "../../../../img/11d.png";
import img14 from "../../../../img/11n.png";
import img15 from "../../../../img/13d.png";
import img16 from "../../../../img/13n.png";
import img17 from "../../../../img/50d.png";
import img18 from "../../../../img/50n.png";

export const BoxDay = (props) => {
    let img
    switch (props.item.weather.icon) {
		case "01d":
			img = img1
			break;
		case "01n":
			img = img2
			break;
		case "02d":
			img = img3
			break;
		case "02n":
			img = img4
			break;
		case "03d":
			img = img5
			break;
		case "03n":
			img = img6
			break;
		case "04d":
			img = img7
			break;
		case "04n":
			img = img8
			break;
		case "09d":
			img = img9
			break;
		case "09n":
			img = img10
			break;
		case "10d":
			img = img11
			break;
		case "10n":
			img = img12
			break;
		case "11d":
			img = img13
			break;
		case "11n":
			img = img14
			break;
		case "13d":
			img = img15
			break;
		case "13n":
			img = img16
			break;
		case "50d":
			img = img17
			break;
		case "50n":
			img = img18
			break;
	
		default:
			break;
	}


    return (
        <div>
            <div className={classes.box}>
                <div className={classes.data}>{props.item.time}</div>
                <div className={classes.temp}>
                    <img className={classes.temp__icon} src={img} alt="icon"/>
                    <span className={classes.temp__disc}>{Math.ceil(props.item.temp)}°C</span>
                </div>
                <div className={classes.desc}>
                    <div className={classes.desc_item}>{props.item.weather.description}</div>
                    <div>Ощущается как {Math.ceil(props.item.feels_like)} °C</div>
                </div>
            </div>
        </div>    
  )
};

