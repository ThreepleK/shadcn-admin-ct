import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { LocationSwitch } from '@/components/location-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'

import img_logoFull from '@/assets/logo.png'
import img_logoMini from '@/assets/logo-mini.png'
import { AppsSwitch } from '../apps-switch'

export function AppTopbar({...props}: React.ComponentProps<any>){
    const {state} = useSidebar();

    const logo = state === 'collapsed' ? img_logoMini : img_logoFull;
    const imgSize = state === 'collapsed' ? 12 : 115;
    const logoArea = state === 'collapsed' ? 'justify-start pl-5' : 'justify-center';

    return <>
        <div className='app-topbar' data-state={state}>
            <div className={`flex items-center ${logoArea}`}>
                <span className={`inline-flex whitespace-nowrap`}><img src={logo} style={{width: `${imgSize}px`}} /></span>
            </div>
            <div className="flex items-center justify-between px-4">
                <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
                <div className='ml-auto flex items-center space-x-2'>
                    <AppsSwitch />
                    <Search />
                    <ThemeSwitch />
                    <LocationSwitch />
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    </>;
}