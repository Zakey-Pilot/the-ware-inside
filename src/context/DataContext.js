"use client";

/**
 * @typedef {Object} PageData
 * @property {string} navbarTitle
 * @property {string} pageTitle
 * @property {string} pageDescription
 */

import {createContext, useContext, useState} from "react";


const DataContext = createContext();

export function DataProvider({children,initialData}){
    const [data,setData] = useState(initialData);
    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    );
}

/**
 * @returns {{ data: PageData, setData: (data: PageData) => void }}
 */
export function useData() {
    const context = useContext(DataContext);
    if (!context) {
      throw new Error("useData must be used inside a DataProvider");
    }
    return context;
  }
  