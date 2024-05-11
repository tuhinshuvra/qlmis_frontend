import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './Routes/Router'

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />

    </div>
  );
}

export default App;