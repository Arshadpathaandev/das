import React from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "primereact/tooltip";
import { Calendar } from "primereact/calendar";
import { FloatLabel } from "primereact/floatlabel";
function DatePicker({ 
  type,
  name,
  className,
  respclass,
  id,
  placeholder,
  lable,
  value,
  onKeyDown,
  required,
  onChange,}) {
  
  return (
    <>
     
     <div className="col-xl-3 col-md-4 col-sm-6 col-12" style={{position:"relative"}}>
              {/* <FloatLabel> */}
              <div className="form-group ">
              <Calendar
                inputId={id}
                id={id}
                showIcon
                placeholder={placeholder}
                className={className}
                dateFormat="dd/mm/yy"
              />
              {/* <label htmlFor="birth_date">Birt h Date</label> */}
              <label htmlFor={id} className="label lable truncate ">
            {lable}
          </label>
              </div>
              {/* </FloatLabel> */}
            </div>
      
    </>
  );
}

export default DatePicker;
