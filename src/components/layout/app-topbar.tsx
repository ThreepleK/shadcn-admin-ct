import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'

import img_logoFull from '@/assets/logo.png'
import img_logoMini from '@/assets/logo-mini.png'


export function AppTopbar({...props}: React.ComponentProps<any>){
    const {state} = useSidebar();

    const logo = (state: string): string => {
        return state === 'collapsed' ? img_logoMini : img_logoFull;
    }

    return <>
        <div className='app-topbar' data-state={state}>
            <div className="at-left">
                <span className='logo'><img src={logo(state)} /></span>
            </div>
            <div className="at-right">
                <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
                <div className='ml-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    </>;
}