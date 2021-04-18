import classes from "./Search.module.scss";
import React, { useState } from "react"
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import SearchIcon from '@material-ui/icons/Search';
import { Fab } from "@material-ui/core";

export const Search = (props) => {

	let [editMode, setEditMode] = useState(false)
	
  return (
	<>
	{props.isWarning && <div className={classes.info}><span>Воспользуйтесь поиском справа внизу чтобы добавить город.</span></div>}
	  	<div className={`${classes.search_wrapper} ${editMode && classes.anim}`}>
			<div onClick={() => setEditMode(false)} className={classes.blur}></div>
			<div className={classes.form_search}>
				<Formik
				initialValues={{ search: "" }}
				onSubmit={(values, actions) => {
					setTimeout(() => {
					props.getWeatherCity(values.search)
						setEditMode(false)
						actions.setSubmitting(false);
					}, 1000);
				}}
				>
				{({ isSubmitting }) => (
					<Form>
					<Field 
						// disabled={props.error}
						component={TextField}
						id="standard-basic"
						className={classes.search_input}
						placeholder="Введите место..."
						name="search"
					/>
					<Button disabled={isSubmitting} variant="contained" color="primary" className={classes.search_btn} type="submit">
						Поиск
					</Button>
					</Form>
				)}
				</Formik>
			</div>	
		</div>
		{!editMode && <div className={classes.enable_search}>
			<Fab className={props.isPuls ? classes.pulse : ""} color="primary" onClick={editMode ? () => setEditMode(false) : () => setEditMode(true)} >
				<SearchIcon/>
			</Fab>
		</div>}
	</>
  )
};