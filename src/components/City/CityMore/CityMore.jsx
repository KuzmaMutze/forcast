import classes from "./CityMore.module.scss";
import React from "react"
import { CircularProgress, Fab } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { BoxDay } from "./BoxDay/BoxDay";

export const CityMore = (props) => {
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{props.name}</div>
      {props.preloader ? <div className={classes.preloader}><CircularProgress style={{width: "100px", height: "100px"}} /></div> : <div>
        <div className={classes.container}>
            <div className={classes.btn_close}><Fab style={{boxShadow: "none"}} color="primary" onClick={() => {props.setEditMode(false)}} color="secondary"><CloseIcon/></Fab></div>
            {props.moreInfoCity.map(day => {
              if(!(day.data.length > 0)) return
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
        </div>}
        
    </div>
  )
};

