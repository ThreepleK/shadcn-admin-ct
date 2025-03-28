import { IconDownload, IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useTasks } from '../context/tasks-context'
import { useTranslation } from 'react-i18next'

export function TasksPrimaryButtons() {
  const { setOpen } = useTasks()
  const { t } = useTranslation();

  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('import')}
      >
        <span>{t('TASK.Header.Import')}</span> <IconDownload size={18} />
      </Button>
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>{t('TASK.Header.Create')}</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
