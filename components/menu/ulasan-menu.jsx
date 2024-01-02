import { Progress } from '@chakra-ui/react'
import React from 'react'
import { MdStar } from 'react-icons/md'

const UlasanMenu = () => {
  return (
    <div className="my-5">
    <h4 className="mb-5">Ulasan User</h4>

    <div className="flex items-center">
        <div>
            <div className="w-[150px] h-[150px] bg-secondary rounded-lg flex justify-center items-center flex-col">
                <span className="text-white text-[50px] font-medium">4.8</span>
                <span className="text-white">100 ulasan</span>
            </div>
        </div>
        <div className="flex flex-col gap-3 ml-4">
            {[1, 2, 3, 4].map((_, key) => (
                <div className="flex items-center" key={key}>
                    <Progress value={80} className="rounded-lg progress-rounded w-[400px] mr-4" colorScheme={'orange'} />
                    <div className="flex items-center gap-2">
                        <div className="stars flex items-center gap-1">
                            <MdStar className='text-stars' />
                            <MdStar className='text-stars' />
                            <MdStar className='text-stars' />
                            <MdStar className='text-stars' />
                            <p className='ml-1'>4.8</p>
                        </div>
                        <p> 100 ulasan </p>
                    </div>
                </div>

            ))}


        </div>

    </div>
</div>
  )
}

export default UlasanMenu
