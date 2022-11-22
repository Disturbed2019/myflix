import Image from 'next/image'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'

const Movie = ({movie}) => {
  const [like, setLike] = useState(false)
  // const [saved, setSaved] = useState(false)
  
  const movieSaved = () => {
    setLike(!like)
  
  }
  
  return (
    <div className='w-[180px] h-auto inline-block cursor-pointer relative p-2'>
      <Image
        width={180}
        height={270}
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={'image'}
        className={'rounded-md'}
        priority
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {movie?.title}
        </p>
        <p onClick={movieSaved}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
      </div>
    </div>
   // <div>
   //   <div
   //     key={movie.id}
   //     className={'w-[180px] h-[270px] cursor-pointer relative p-2 '}
   //   >
   //     <Image
   //       sizes="(max-width: 768px) 100vw,
   //            (max-width: 1200px) 50vw,
   //            33vw"
   //       src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
   //       fill
   //       alt={'image'}
   //       className={'rounded-md'}
   //
   //     />
   //     <div className={'absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100'}>
   //       <p className={'white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'}>{movie?.original_title
   //       }</p>
   //       <p className={'absolute top-4 left-4'} onClick={movieSaved}>
   //        {like ? <FaHeart className={'text-gray-300'}/> : <FaRegHeart className={'text-gray-300'}/> }
   //       </p>
   //     </div>
   //   </div>
   // </div>
   

 );
};

export default Movie;