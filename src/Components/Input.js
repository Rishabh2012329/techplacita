import React from 'react'
import {Form,Col} from 'react-bootstrap'
import './Input.css'

export default function Input({text}){
	return(
		 <Form.Group as={Col}>
					<Form.Control style={{height:"40px",borderRadius:"0px",outline:"none !important",border:"none",borderBottom:"solid grey 1px"}}  type="text" placeholder={text}/>
		 </Form.Group>
	)
}