import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { LocationSwitch } from '@/components/location-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'

import img_logoFull from '@/assets/logo.png'
import img_logoMini from '@/assets/logo-mini.png'

export function AppTopbar({...props}: React.ComponentProps<any>){
    const {state} = useSidebar();

    const logo = state === 'collapsed' ? img_logoMini : img_logoFull;
    const imgSize = state === 'collapsed' ? 22 : 115;

    return <>
        <div className='app-topbar' data-state={state}>
            <div className="flex items-center justify-center">
                <span className={`inline-flex w-[${imgSize}px] whitespace-nowrap`}><img src={logo} /></span>
            </div>
            <div className="flex items-center justify-between px-4">
                <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
                <div className='ml-auto flex items-center space-x-2'>
                    <Search />
                    <ThemeSwitch />
                    <LocationSwitch />
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    </>;
}