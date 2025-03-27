import { useState } from 'react';
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { AgGridReact } from 'ag-grid-react'
import type { ColDef } from 'ag-grid-community'
import { getSubmenuData } from '../data/submenu';

const SUB_MENUS = getSubmenuData('grid') as any;

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

export default function AgGrid() {
  // 그리드에 보여질 데이터
  const [rowData, setRowData] = useState<IRow[]>([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
      { make: "Mercedes", model: "EQA", price: 48890, electric: true },
      { make: "Fiat", model: "500", price: 15774, electric: false },
      { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // 그리드 열 속성
  const [colDefs, setColDefs] = useState<ColDef[]>([
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" }
  ] as any);

  // 그리드 기본 속성
  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <>
      <Header>
        <TopNav links={SUB_MENUS} />
      </Header>
      <Main fixed>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>AG Grid</h2>
            <p className='text-muted-foreground'>
              Grid Example
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0 h-full'>
          <AgGridReact {...{rowData, columnDefs: colDefs, defaultColDef}} />
        </div>
      </Main>
    </>
  )
}