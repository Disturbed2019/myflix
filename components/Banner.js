import Image from 'next/image'
import { useEffect, useState } from 'react'

const Banner = ({ netflixOriginals }) => {
	const [movie, setMovie] = useState([])
	
	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
	}, [netflixOriginals])
	
	
	const truncateString = (str, num) => {
		if (str?.length > num){
			return str.slice(0,num) + '...'
		} else {
			return str
		}
	}
 
	return (
	 <div className={'w-full h-[550px] '}>
		 <div className={'relative w-full h-full'}>
			 <div className={'absolute w-full h-[550px] top-0 left-0 right-0 bg-black/40 bg_backdrop'}></div>
			 <Image
				 className={'w-full h-full object-cover'}
				 src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
				 fill
				 priority
				 alt={'banner'}
			 />
			 <div className={'absolute w-full top-[50%] -translate-y-1/2 p-4 md:p-8 z-10'}>
				 <h1 className={'text-3xl md:text-5xl font-bold'}>{movie?.original_title}</h1>
				 {/*<p className={'max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'}>{movie?.overview}</p>*/}
				 <div className={'my-4'}>
					 <button
						 className={'border bg-gray-300 text-black border-gray-300 py-2 px-5'}>
						 Play
					 </button>
					 <button
						 className={'border  text-white border-gray-300 py-2 px-5 ml-4'}>
						 Watch Letter
					 </button>
				 </div>
				 <p className={'text-gray-400 text-sm'}>Released: {movie?.release_date}</p>
				 <p className={'w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'}>{truncateString(movie?.overview, 200)}</p>
			 </div>
		 </div>
	 </div>
 );
};

export default Banner;