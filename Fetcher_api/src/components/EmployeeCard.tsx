interface EmployeeCardProps {
    employee: {
      name: {
        first: string;
        last: string;
      };
      email: string;
      picture: {
        medium: string;
      };
    };
  }
   
  
  function EmployeeCard({ employee }: EmployeeCardProps) {
    return (
      <figure className='DisplayEmployee'>
        <img src={employee.picture.medium} alt={employee.name.first} />
        <figcaption>
          <strong>{employee.name.first} {employee.name.last}</strong>
          {employee.email}
        </figcaption>
      </figure>
    );
  }
  
  const ConfigurationComponent = ({ config }) => {
    const { key1, key2, key3 } = config;
  
    return (
      <div>
        <p>Key1: {key1}</p>
        <p>Key2: {key2}</p>
        <p>Key3: {key3}</p>
      </div>
    );
  };
  
  export default EmployeeCard;