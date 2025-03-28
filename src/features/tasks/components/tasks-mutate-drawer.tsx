import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { SelectDropdown } from '@/components/select-dropdown'
import { Task } from '../data/schema'
import { useTranslation } from 'react-i18next'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Task
}

export function TasksMutateDrawer({ open, onOpenChange, currentRow }: Props) {
  const { t } = useTranslation();
  const isUpdate = !!currentRow

  const formSchema = z.object({
    title: z.string().min(1, t('TASK.TaskDialog.Title is required')),
    status: z.string().min(1, t('TASK.TaskDialog.Please select a status')),
    label: z.string().min(1, t('TASK.TaskDialog.Please select a label')),
    priority: z.string().min(1, t('TASK.TaskDialog.Please choose a priority')),
  })
  type TasksForm = z.infer<typeof formSchema>

  const form = useForm<TasksForm>({
    resolver: zodResolver(formSchema),
    defaultValues: currentRow ?? {
      title: '',
      status: '',
      label: '',
      priority: '',
    },
  })

  const onSubmit = (data: TasksForm) => {
    // do something with the form data
    onOpenChange(false)
    form.reset()
    toast({
      title: t('TASK.TaskDialog.You submitted the following values'),
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        form.reset()
      }}
    >
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-left'>
          <SheetTitle>{isUpdate ? t('TASK.TaskDialog.Update Task') : t('TASK.TaskDialog.Create Task')}</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? t('TASK.TaskDialog.Update description')
              : t('TASK.TaskDialog.Create description')}
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id='tasks-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-5'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>{t('TASK.TaskDialog.Title')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('TASK.TaskDialog.Enter a title')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>{t('TASK.TaskDialog.Status')}</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder={t('TASK.TaskDialog.Select dropdown')}
                    items={[
                      { label: t('TASK.Dropdown.In Progress'), value: 'in progress' },
                      { label: t('TASK.Dropdown.Backlog'), value: 'backlog' },
                      { label: t('TASK.Dropdown.Todo'), value: 'todo' },
                      { label: t('TASK.Dropdown.Canceled'), value: 'canceled' },
                      { label: t('TASK.Dropdown.Done'), value: 'done' },
                    ]}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='label'
              render={({ field }) => (
                <FormItem className='relative space-y-3'>
                  <FormLabel>{t('TASK.TaskDialog.Label')}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='documentation' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          {t('TASK.Dropdown.Documentation')}
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='feature' />
                        </FormControl>
                        <FormLabel className='font-normal'>{t('TASK.Dropdown.Feature')}</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='bug' />
                        </FormControl>
                        <FormLabel className='font-normal'>{t('TASK.Dropdown.Bug')}</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='priority'
              render={({ field }) => (
                <FormItem className='relative space-y-3'>
                  <FormLabel>{t('TASK.TaskDialog.Priority')}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='high' />
                        </FormControl>
                        <FormLabel className='font-normal'>{t('TASK.Dropdown.High')}</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='medium' />
                        </FormControl>
                        <FormLabel className='font-normal'>{t('TASK.Dropdown.Medium')}</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='low' />
                        </FormControl>
                        <FormLabel className='font-normal'>{t('TASK.Dropdown.Low')}</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className='gap-2'>
          <SheetClose asChild>
            <Button variant='outline'>{t('TASK.TaskDialog.Close')}</Button>
          </SheetClose>
          <Button form='tasks-form' type='submit'>{t('TASK.TaskDialog.Save changes')}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
