import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns'
 
import "react-datepicker/dist/react-datepicker.css";
 
 
const Example = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = date => {
    const start = date;
    setStartDate(start);
    props.onfil(format(date, "MMM d yyyy"));
  };
  return (
    <div>
    <p style={{color:"white"}}>Search By Date</p>
    <DatePicker
    placeholderText="ALL"
    dateFormat="MMM dd yyyy"
    selected={startDate} 
    onChange={onChange}
    showMonthDropdown
    showYearDropdown
    scrollableYearDropdown
    scrollableMonthYearDropdown
    className="Datepicker_container"
    />
    </div>

  );
};

export default Example;