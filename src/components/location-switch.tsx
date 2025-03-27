import { IconCheck, IconLanguage } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'
import { langList } from '@/i18n'

export function LocationSwitch() {
  const { i18n } = useTranslation();
  const selected = i18n.language;

  const onChangeLang = (language: string) => {
    i18n.changeLanguage(language);
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='scale-95 rounded-full theme-switch'>
          <IconLanguage className='size-[1.2rem] rotate-0 scale-100 transition-all' />
          <span className='sr-only'>Toggle Languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {langList.map(({key, label}) => {
          const icon = key === selected ? <IconCheck /> : <></>;
          return <DropdownMenuItem inset={true} onClick={() => onChangeLang(key)}>{label}{icon}</DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
