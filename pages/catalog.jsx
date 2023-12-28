import { NoContainer } from '@/layouts/NoContainer'
import { Select } from '@chakra-ui/react'
import Image from 'next/image'
import { BsCartPlus } from 'react-icons/bs'
import { MdFavoriteBorder, MdStar } from 'react-icons/md'
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'


const Catalog = () => {
    return (
        <div>
            {/* Banner */}
            <div className="h-screen bg-[url('/assets/catalog/banner.png')] bg-local bg-cover">
                <div className='flex justify-center items-center h-full'>
                    <div className="flex flex-col gap-4  items-center max-w-[230px]">
                        <Image src='/assets/catalog/logo-banner.png' width={200} height={200} alt="sepatu " />
                        <h2 className='mb-5 text-center'>Mau cari sepatu di MyShoes? Klik tombol di bawah ini</h2>
                        <div className=''>
                            <a href="" className='button-rounded-none'>Katalog Sepatu</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mx-auto'>
                <div className="grid grid-cols-7 mt-10 gap-8">
                    {/* Sidebar Kategori */}
                    <div className="col-span-2 p-[20px] shadow rounded-lg">
                        <h2 className='mb-4'>Kategori</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            {[1, 2, 3, 4].map(() => (<button className='button-rounded-none rounded-lg'>Sneaker</button>))}
                        </div>

                        <h2>Kisaran Harga</h2>
                        <div>
                            <RangeSlider
                                aria-label={['min', 'max']}
                                colorScheme='pink'
                                defaultValue={[10, 30]}
                            >
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb index={0} />
                                <RangeSliderThumb index={1} />
                            </RangeSlider>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="col-span-5">
                        <div className='flex items-center justify-between'>
                            <h4>200 Produk tersedia</h4>
                            <div className='flex items-center gap-3'>
                                <p className='whitespace-nowrap'>Urut Berdasarkan :</p>
                                <Select maxWidth={234} color='white' bg={'primary'} placeholder='Select option'>
                                    <option value='option1'>Terlaris</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-7 mt-10'>
                            {[1, 2, 3, 4].map(() => (
                                <div className="col-span-1 card-product">
                                    <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
                                    <div className="flex justify-between items-center mt-5">
                                        <p>Nike kyrie flytrap...</p>
                                        <BsCartPlus />
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <p>Rp 1.150.000</p>
                                        <MdFavoriteBorder />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="stars flex items-center gap-1">
                                            <MdStar className='text-stars' />
                                            <MdStar className='text-stars' />
                                            <MdStar className='text-stars' />
                                            <MdStar className='text-stars' />
                                            <p className='ml-1'>4.8</p>
                                        </div>
                                        <p>( 100 ulasan )</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


Catalog.layout = NoContainer


export default Catalog