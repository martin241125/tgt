import icono from '../assets/TGT_Final.png'

const Nav = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex bg-white py-4">
            <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='text-3x1 text-black mr-1 pt-2'>
                    <img width={30} src={icono} alt="icono" className='ml-2'/>
                </span>
                Templarios Del Gintonic
            </div>

        </div>

    </div>
  )
}

export default Nav