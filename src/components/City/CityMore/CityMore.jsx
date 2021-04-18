import classes from "./CityMore.module.scss";
import React from "react"
import { Fab } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { BoxDay } from "./BoxDay/BoxDay";

export const CityMore = (props) => {
 
  let day = () => {
    let d = new Date().toLocaleString('ru', {weekday: 'long'});
    console.log(d.charAt(0).toUpperCase() + d.slice(1));
  }
  let today = 
  day()
  return (
    <div className={classes.wrapper}>
        <div className={classes.title}>{props.name}</div>
        <div className={classes.container}>
            <div className={classes.btn_close}><Fab style={{boxShadow: "none"}} color="primary" onClick={() => {props.setEditMode(false)}} color="secondary"><CloseIcon/></Fab></div>
            {props.moreInfoCity.map(day => {
              if(!(day.data.length > 0) || day.day === new Date().toLocaleString("ru", { weekday: "long" })) return
              return(
                <div>
                  <div className={classes.box_title}>{day.day}</div>
                  <div className={classes.box_day}>
                    {day.data.map(item => 
                      <BoxDay item={item}></BoxDay>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  )
};

