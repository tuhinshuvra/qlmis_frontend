import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - QLMIS`;
    }, [title])
};

export default useTitle;