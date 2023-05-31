import React, {createContext, FC, useContext, useState} from 'react';

export interface DtoType {
    id: string;
    name: string;
    constructionType: string;
    mass: string;
    team: string;
    peopleCount: string;
    totalPrice: string;
    calculationDate: string;
}

interface StateContextProps {
    data: DtoType[];
    addNewElement: (dto: DtoType) => void;
}

// Создаем контекст для нашего стейта
const StateContext = createContext<StateContextProps>({data: [], addNewElement: () => ({})});

// Создаем провайдер, который будет обеспечивать доступ к состоянию и функции для его обновления
export const StateProvider: FC<any> = ({children}) => {

    const [data, setData] = useState<DtoType[]>([
        {
            id: '1',
            name: 'Первый чертеж.pdf',
            constructionType: 'Ригель',
            mass: '0.15',
            team: 'Номер 3',
            peopleCount: '10',
            totalPrice: '2.6',
            calculationDate: '21-04-2023',
        }
    ]);

    const addNewElement = (dto: DtoType): void => {
        setData((prevState) => [...prevState, dto]);
    };


    return (
        <StateContext.Provider value={{data, addNewElement}}>
            {children}
        </StateContext.Provider>
    );
};

// Создаем кастомный хук для удобного доступа к состоянию и функциям для его обновления
export const useStateContext = () => useContext(StateContext);
