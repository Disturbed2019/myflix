
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, allMovies, rowID }) => {
	
	const slideLeft = () => {
		const slider = document.getElementById('slider' + rowID)
		slider.scrollLeft = slider.scrollLeft - 500
		
	}
	const slideRight = () => {
		const slider = document.getElementById('slider' + rowID)
		slider.scrollLeft = slider.scrollLeft + 500
		
	}
	
	
	return (
		<section>
			<h2 className={'text-white font-bold md:text-xl p-4'}>
				{title}
			</h2>
			
			<div className='relative flex items-center group'>
				<MdChevronLeft
					onClick={slideLeft}
					className='bg-black/50 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
					size={40}
				/>
				<div
					id={'slider' + rowID}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
				>
					{allMovies.map((item, id) => (
						<Movie key={id} movie={item} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className='bg-black/50 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
					size={40}
				/>
			</div>
		</section>
	
	)
}

export default Row