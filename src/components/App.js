
import React from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = React.useState('')

  React.useState(() => {
    fetch('https://dummyjson.com/products')
    .then(e => e.text())
    .then(e => setData(e))
  }, [])

  return (
    <div>
        {/* Do not remove the main div */}
        <pre>{data}</pre>
    </div>
  )
}

export default App
