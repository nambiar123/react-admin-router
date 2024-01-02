import React from "react";
import { useState } from "react";
import Select from 'react-select';
import UserTable from "./UserTable";
function UserRegister(){

    const [userName, setUsername] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedState, setSelectedState] = useState(null);

    const options = [
      { id: 1, label: "Option 1" },
      { id: 2, label: "Option 2" },
      { id: 3, label: "Option 3" },
      // Add more options as needed
    ];
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const handleChange = (selectedOption) => {
        // Handle selected option
        console.log(`Selected option:`, selectedOption);
      };

      const users = [
        { id: 1, username: "John", age: 25, department: "IT" },
        { id: 2, username: "Jane", age: 30, department: "HR" },
        { id: 3, username: "Bob", age: 28, department: "Marketing" },
        // Add more data as needed
      ];
    
      const itemsPerPage = 2; // Set the number of items per page

      const handleEdit = (user) => {
        // Set the user data to the state for editing
       
        setUsername(user.username);
        // Set other fields accordingly, e.g., setSelectedOption(user.someOption)
      };
    return(
        <>
        <div>
        <label>Name </label>
        <input value={userName} type="text" onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div style={{marginTop:'10px'}}>
            <label htmlFor="myDropdown">Select an option:</label>
      <select id="myDropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
        </div>

        <div style={{marginTop:'10px', width:'200px'}}>
            <label htmlFor="state">Select an option:</label>
            <Select
        id="myDropdown"
        options={options}
        onChange={handleChange}
        isSearchable={true} // Enable search functionality
        placeholder="Search or select an option"
      />
        </div>
        <div>
        <UserTable data={users} itemsPerPage={itemsPerPage}  onEdit={handleEdit} />
        </div>
        </>
    )
}

export default UserRegister