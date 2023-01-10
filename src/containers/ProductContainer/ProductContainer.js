import React from 'react';
import Button from '../../components/UI/Button';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';

const ProductContainer = () => {
  return (
    <div>
      <div className={'border-b border-semiwhite pb-8 flex justify-between items-center'}>
        <h1>Liste des produits</h1>
        <Button variant={'blue'}>Ajouter</Button>
      </div>

      <div className="border border-semiwhite p-4 rounded-default flex flex-col md:space-x-4 shadow-lg w-full mt-8">
        <div className={'flex justify-between w-full '}>
          <form className={'relative'}>
            <input
              type="search"
              placeholder={'Rechercher'}
              className={'border border-semiwhite rounded-default py-[10px] px-[10px] shadow '}
            />
            <SearchIcon className={'absolute top-[13px] right-[13px]'} />
          </form>
          <Button variant={'blue'}>Trier par</Button>
        </div>
        <div className="w-full">
          <table className="table-auto">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Date de création</th>
                <th>Catégorie</th>
                <th>Prix</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
