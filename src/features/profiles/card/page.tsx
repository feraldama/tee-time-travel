import {
  ProfilePictureIcon,
  ArrowUpUnderlineIcon,
  CreditCardIcon,
  DocumentIcon,
  GlobeIcon,
  LogoutIcon,
  UserIcon
} from '@/components/icons'

export default function ProfilePage() {
  return (
    <main className='font-roboto'>
      <div className='flex flex-col items-center p-6 space-y-4 bg-white max-w-xs mx-auto text-tuiu-gray-500'>
        <div className='flex flex-col items-center space-y-1'>
          <p className='text-xs text-tuiu-gray-300'>Foto de Perfil</p>
          <ProfilePictureIcon />
          <button className='flex items-center space-x-3 px-4 py-2 mt-2 text-white bg-tuiu-green-300 rounded-full text-xs font-bold'>
            <span>Subir foto de perfil</span>
            <ArrowUpUnderlineIcon />
          </button>
        </div>
        <h1 className='text-3xl font-medium self-start'>Hola, Pablo</h1>
        <div className='w-full border-t border-gray-300 my-2'></div>

        <nav className='w-full space-y-4 font-medium text-lg'>
          <div className='flex items-center space-x-3 text-tiui-gray-500 cursor-pointer'>
            <UserIcon />
            <span>Mis beneficiarios</span>
          </div>
          <div className='flex items-center space-x-3 text-tiui-gray-500 cursor-pointer'>
            <DocumentIcon />
            <span>Mis envíos</span>
          </div>
          <div className='flex items-center space-x-3 text-tiui-gray-500 cursor-pointer'>
            <CreditCardIcon />
            <span>Mis medios de pago</span>
          </div>
          <div className='flex items-center space-x-3 text-tiui-gray-500 cursor-pointer'>
            {/* <GlobeIcon /> */}
            <GlobeIcon />
            <span>Ayuda</span>
          </div>
        </nav>

        <div className='w-full border-t border-gray-300 my-2'></div>

        <div className='flex items-center space-x-20 text-red-500 cursor-pointer font-medium text-lg'>
          <span>Cerrar sesión</span>
          <LogoutIcon />
        </div>
      </div>
    </main>
  )
}
