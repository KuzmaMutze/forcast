import classes from "./City.module.scss";
import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react"
import CloseIcon from '@material-ui/icons/Close';
// ICONS
import img1 from "../../img/01d.png";
import img2 from "../../img/01n.png";
import img3 from "../../img/02d.png";
import img4 from "../../img/02n.png";
import img5 from "../../img/03d.png";
import img6 from "../../img/03n.png";
import img7 from "../../img/04d.png";
import img8 from "../../img/04n.png";
import img9 from "../../img/09d.png";
import img10 from "../../img/09n.png";
import img11 from "../../img/10d.png";
import img12 from "../../img/10n.png";
import img13 from "../../img/11d.png";
import img14 from "../../img/11n.png";
import img15 from "../../img/13d.png";
import img16 from "../../img/13n.png";
import img17 from "../../img/50d.png";
import img18 from "../../img/50n.png";
import { CityMore } from "./CityMore/CityMore";


export const City = (props) => {
	let img
	switch (props.icon) {
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

	let temp = Math.ceil(props.main.temp)
	let feels_like = Math.ceil(props.main.feels_like)

	let [editMode, setEditMode] = useState(false)

	let required = () => {
		props.getWeatherCityMore(props.name)
		setEditMode(true)
	}

	return (
		<>
			<div className={classes.City__wrapper}>
				<div className={classes.btn_close}><IconButton style={{boxShadow: "none"}} onClick={() => {props.deleteCity(props.id)}} color="secondary"><CloseIcon/></IconButton></div>
				<div className={classes.city_name}>{props.name}</div>
				<div className={classes.btn_more}><Button onClick={() => required()}>Нажмите для подробного прогноза</Button></div>
				<div className={classes.box_temp}>
					<img className={classes.icon} src={img} alt=""/>
					<span className={classes.temp}>
						{temp} °C
					</span>
				</div>
				<div className={classes.more_info}>
					<div className={classes.desc}>{props.description}</div>
					<div>Ощущается как: {feels_like} °C</div>
				</div>
				
			</div>
			{editMode && <CityMore
				name={props.name}
				moreInfoCity={props.moreInfoCity}
				setEditMode={setEditMode}
			/>}
		</>
  	)
};

