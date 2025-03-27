import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { submenuItems } from '../data/submenu';

export default function AgChart() {
  return (
    <>
      <Header>
        <TopNav links={submenuItems} />
      </Header>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>AG Chart</h2>
            <p className='text-muted-foreground'>
              Chart Example
            </p>
          </div>
        </div>
      </Main>
    </>
  )
}