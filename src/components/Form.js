import React from 'react'
import style from '../css/formc.module.css'

const Form = (props) => {
  return (
	<div className={style.main}>
        <form onSubmit={props.getWeather}>
            <input type="text" name='city'placeholder="City..." />
            <input type="text" name='country'placeholder="Country..." />
			<br/>
            <button >Get Weather</button>
        </form>
    </div>
  )
}

export default Form
