import React from 'react';
import MapComponent from './MapComponent';
import useFetchData from '../hooks/useFetchData';

const Home = () => {
  const { data, isLoading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts'); // Example API

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div>
      <h1>Welcome to Jarurat Care</h1>
      <MapComponent />
      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


// import React from 'react';
// import MapComponent from './MapComponent';
// import useFetchData from '../hooks/useFetchData';

// const Home = () => {
//   const { data, isLoading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts'); // Example API

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Welcome to Jarurat Care</h1>
//       <MapComponent />
//       <h2>Fetched Data:</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
