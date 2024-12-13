const DisplaySchoolData = ({ schoolData }) => {
    return (
      <div className="p-4 border border-gray-300 rounded-md">
        {schoolData.length > 0 ? (
          schoolData.map((school, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{school.name}</h3>
              <p>{school.description}</p>
            </div>
          ))
        ) : ( 
          <p>No school data available</p>
        )}
      </div>
    );
  };
  
  export default DisplaySchoolData;
  