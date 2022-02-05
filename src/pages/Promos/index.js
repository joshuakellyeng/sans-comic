import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Card from '../../components/Card';

const Promos = () => {

    
	const [promoComics, setPromoComics] = useState([]);
	//list of promo articles
	// https://comicvine.gamespot.com/api/promos/?&filter=api_key=4f8f8990ab1697df27672bcbdf1d0da1b794916b&format=json

	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c
	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c
	const fetchComics = async () => {
		try {
			const res = await axios.get('https://gateway.marvel.com/v1/public/comics?format=comic&startYear=2022&orderBy=onsaleDate&limit=100ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c');
			setPromoComics(res.data.data.results);
			console.log(promoComics)
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
        fetchComics()
    }, []);

	return (
		<div className='flex flex-col items-center'>
			<h1 className='m-4 lg:text-6xl sm:text-2xl font-black'>Pre-Order Latest Releases</h1>
		<div className="flex justify-center flex-wrap my-1 px-1">
		{
			promoComics.map((comic) => {
				return <Card key={comic.id} comic={comic} />
			})
		}
		</div>
		</div>

	);
};

export default Promos;
