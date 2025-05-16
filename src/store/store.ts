import {create} from 'zustand'

interface Meals{
    idMeal:string;
    strMeal:string;
    strMealThumb:string;
}


interface StoreState{
    meals:Meals[],
    searchQuery:string;
    setMeals:(meals:Meals[])=>void;
    setSearchQuery:(query:string)=>void;


}


export const useStore=create<StoreState>((set)=>({

    meals:[],

    searchQuery:'',

    setMeals:(meals)=>set({meals:meals}),

    setSearchQuery:(query)=>set({searchQuery:query}),

}))































