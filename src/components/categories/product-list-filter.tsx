'use client'

import { useQueryString } from "hooks/use-querystring";
import { handleClientScriptLoad } from "next/script";
import { ChangeEvent, useState } from "react";
import { FilterGroup } from "./filter-group";
import { ProductList } from "components/product-list";
import { data } from "data";
import { ProductItem } from "components/product-item";

export const ProductListFilter = () =>{
  const queryString = useQueryString();
  const [filterOpened, setFilterOpened] = useState(false);

  const order = queryString.get('order')??'views';

  const handleSelectChanged = (e:ChangeEvent<HTMLSelectElement>) => {
    queryString.set('order',e.target.value);
    console.log(e.target.value);
  }

  return(
    <div>
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-3xl"><strong>{data.products.length} </strong>Produto{data.products.length != 1 ? 's' : ''}</div>
        <div className="w-full md:max-w-70 flex flex-row gap-5">
          <select 
            defaultValue={order}
            onChange={handleSelectChanged} 
            className="h-14 flex-1 px-6 flex items-center bg-white border border-gray-200 rounded-sm text-gray-500">
            <option value="view">Popularidade</option>
            <option value="price">Por preço</option>
            <option value="selling">Mais vendidos</option>
          </select>
          <div 
            onClick={()=>setFilterOpened(!filterOpened)}
            className="h-14 flex-1 px-6 md:hidden flex items-center bg-white border border-gray-200 rounded-sm text-gray-500"
          >
            Filtrar por
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className={`flex-1 max-w-70 ${filterOpened ? 'block' : 'hidden' } md:block`}>
          <FilterGroup id='tech' name='Tecnologias'/>
          <FilterGroup id='color' name='Cores'/>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.products.map(item => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}