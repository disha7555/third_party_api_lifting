import React, { useState, useEffect } from 'react';

const FetchApiLifting = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://hn.algolia.com/api/v1/items/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching the data:', error);
            });
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>{data.author}</p>
                    <p>{data.title}</p>
                    <p>{data.points}</p>
                    <p>{data.children[0].id}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FetchApiLifting;
