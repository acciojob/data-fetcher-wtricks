
import React from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = React.useState('loading...')

  React.useState(() => {
    fetch('https://dummyjson.com/products')
    .then(e => e.text())
    .then(e => setData(e))
    .catch((e) => setData('No data found'))
  }, [])

  return (
    <div>
        {/* Do not remove the main div */}
        {data != 'loading...' && <h1>Data Fetched from API</h1>}
        <pre>{data}</pre>
    </div>
  )
}

export default App
