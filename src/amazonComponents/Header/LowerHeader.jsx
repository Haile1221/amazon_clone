import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li><AiOutlineMenu />
        <p>All</p></li>
        <li>Today's deals</li>
        <li>Customer services</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
