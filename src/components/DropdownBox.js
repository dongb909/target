import React from 'react';

const DropdownBox = ({dataList, getData, dataType, title, selectedItem, setSelected}) =>{
  const options = dataList.map(data => <option value={data[0]} key={data[1]}>{data[0]}</option>);
  
 return(
   <div className="">
       <select name={dataType} value={selectedItem} onChange={(e) =>{getData(e.target.key)
        setSelected(e.target.value)} }>
         <option value={`Select a ${title}`}></option>
         {options}
       </select>
   </div>
 )
}

export default DropdownBox;