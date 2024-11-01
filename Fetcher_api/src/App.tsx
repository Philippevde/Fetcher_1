import { useState } from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};


function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Envoyer la requête
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Inspecter les données reçues
        const fetchedEmployee = {
          name: {
            first: data.results[0].name.first,
            last: data.results[0].name.last,
          },
          email: data.results[0].email,
          picture: {
            medium: data.results[0].picture.medium,
          },
        };
        setEmployee(fetchedEmployee);
      })
      .catch(error => console.error('Error fetching data:', error));
  };
  

  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
