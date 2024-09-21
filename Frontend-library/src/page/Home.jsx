import { useEffect, useState } from 'react';
import Libraries from '../components/Libraries';
import Search from '../components/Search';
import LibrariesService from '../services/library.service';
import Swal from 'sweetalert2';




const Home = () => {
  const [libraries, setLibraries] = useState([]);
  const [filteredLibraries, setFilteredLibraries] = useState([]);
  useEffect(() => {
    const getAllLibrary = async () => {
      try {
        const response = await LibrariesService.getAllLibrary();
        if(response.status === 200){
          setLibraries(response.data);
        setFilteredLibraries(response.data);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Get all libraries failed',
          text: error?.response?.data?.message || error.message,
          footer: '<a href="">Why do I have this issue?</a>'
        });
      }
    };
    getAllLibrary();
  }, []);

  return (
    <div className='container flex flex-row flex-wrap items-center justify-center mx-auto'>
      <Search 
      library={libraries}
      setFilteredLibraries={setFilteredLibraries}
      />
      <Libraries libraries={filteredLibraries} />
      
    </div>
  );
}

export default Home