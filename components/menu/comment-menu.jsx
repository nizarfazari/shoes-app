import { Avatar } from "@chakra-ui/react"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { MdStar } from "react-icons/md"


const CommentMenu = () => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-2 gap-4">
                <div className="card-comment">
                    <div className="flex gap-4">
                        <Avatar name='Arya' src='https://bit.ly/tioluwani-kolawole' />
                        <div>
                            <h1>Arya Wiguna <span> | 2 hari yang lalu</span></h1>
                            <div className="stars flex items-center gap-1 mt-1">
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Mantba Jiwa</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <AiOutlineLike className="text-3xl" />
                        <AiOutlineDislike className="text-3xl" />
                    </div>
                </div>
                <div className="card-comment">
                    <div className="flex gap-4">
                        <Avatar name='Arya' src='https://bit.ly/tioluwani-kolawole' />
                        <div>
                            <h1>Arya Wiguna <span> | 2 hari yang lalu</span></h1>
                            <div className="stars flex items-center gap-1 mt-1">
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Mantba Jiwa</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <AiOutlineLike className="text-3xl" />
                        <AiOutlineDislike className="text-3xl" />
                    </div>
                </div>
                <div className="card-comment">
                    <div className="flex gap-4">
                        <Avatar name='Arya' src='https://bit.ly/tioluwani-kolawole' />
                        <div>
                            <h1>Arya Wiguna <span> | 2 hari yang lalu</span></h1>
                            <div className="stars flex items-center gap-1 mt-1">
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Mantba Jiwa</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <AiOutlineLike className="text-3xl" />
                        <AiOutlineDislike className="text-3xl" />
                    </div>
                </div>
                <div className="card-comment">
                    <div className="flex gap-4">
                        <Avatar name='Arya' src='https://bit.ly/tioluwani-kolawole' />
                        <div>
                            <h1>Arya Wiguna <span> | 2 hari yang lalu</span></h1>
                            <div className="stars flex items-center gap-1 mt-1">
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                                <MdStar className='text-stars' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Mantba Jiwa</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <AiOutlineLike className="text-3xl" />
                        <AiOutlineDislike className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentMenu
