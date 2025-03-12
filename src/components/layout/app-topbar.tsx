import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'


export function AppTopbar({...props}: React.ComponentProps<any>){
    const {state} = useSidebar();

    const logo = (state: string): string => {
        return state === 'collapsed' ? '🍉' : '🍉 MAINLOGO';
    }

    return <>
        <div className='app-topbar' data-state={state}>
            <div className="at-left">
                <span className='logo'>{logo(state)}</span>
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