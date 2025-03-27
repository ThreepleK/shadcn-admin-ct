import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { AgCharts } from 'ag-charts-react'
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";
import { getSubmenuData } from '../data/submenu';
import { useState } from 'react';

const SUB_MENUS = getSubmenuData('chart') as any;

interface IData {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}

export default function AgChart() {
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState<AgChartOptions>({
    // Data: Data to be displayed in the chart
    data: [
      { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
      { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
      { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
      { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
      { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
    ] as IData[],
    // Series: Defines which chart type and data to use
    series: [
      { type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }
    ] as AgBarSeriesOptions[],
  });

  return (
    <>
      <Header>
        <TopNav links={SUB_MENUS} />
      </Header>
      <Main fixed>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>AG Chart</h2>
            <p className='text-muted-foreground'>
              Chart Example
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0 h-full'>
          <AgCharts options={chartOptions} className='w-full h-full' />
        </div>
      </Main>
    </>
  )
}