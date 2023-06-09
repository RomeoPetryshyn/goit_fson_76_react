import { useEffect } from 'react';

const useOutsideClick = (ref, cb) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                cb();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};




function weirdRandomNumGenerator() {
    let randString = '';
    for(i=0; i<1000; ++i) {
        randString += Math.floor(Math.random() * 10);
    }
    let num = 0;
    for(j=0; j<100000000; ++j) {
        num += j;
    }
    randString+=num;
    return randString;
}


  // eslint-disable-next-line react-hooks/exhaustive-deps

useEffect(() => {
    const fetchData = async () => {
        const url = `https://pixabay.com/api/?q=${encodeURIComponent(
            searchQuery
        )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      
        try {
            setLoading(true);
      
            const response = await axios.get(url);
            const { hits } = response.data;
      
            setImages(prevImages => [...prevImages, ...hits]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            if (error.response) {
              setError('Error while fetching images.');
            } else if (error.request) {
              setError('Network error. Please check your internet connection.');
            } else {
              setError('An unexpected error occurred. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 



// function fetchImages() {
    //     // doing something
    // }; - NO

    // const fetchImages = React.useCallback(() => {
    //     // ваш код
    // }, []);