import { IconCheck } from '@tabler/icons-react'
import {
  DropdownMenuSubContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'
import { langList } from '@/lib/i18n'

export function LocationSwitchSubContent() {
  const { i18n } = useTranslation();
  const selected = i18n.language;

  const onChangeLang = (language: string) => {
    i18n.changeLanguage(language);
  }

  return (
      <DropdownMenuSubContent>
        {langList.map(({key, label}) => {
          const icon = key === selected ? <IconCheck /> : <></>;
          return <DropdownMenuItem inset={true} onClick={() => onChangeLang(key)}>{label}{icon}</DropdownMenuItem>;
        })}
      </DropdownMenuSubContent>
  )
}
