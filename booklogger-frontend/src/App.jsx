import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  // Esta función forzará el refresco de BookList cuando se agregue un nuevo libro
  const triggerRefresh = () => {
    setRefreshFlag(!refreshFlag); // cambiar el valor de refreshFlag para forzar el reload
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>📚 Book Logger</h1>
      <BookForm onNewBook={triggerRefresh} />
      <hr />
      <BookList key={refreshFlag} />
    </div>
  );
}

export default App;
