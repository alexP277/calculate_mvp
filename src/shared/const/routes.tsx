import {ReactNode} from 'react';
import Archive from "../../pages/History";
import Counter from "../../pages/Counter";


export type RoutesType = {
    // Временное решение в связи с неверно сгенерированными ДТО с бэка см ДТО generated.ts 273 строка
    id: number | null | undefined;
    label: string | null | undefined;
    url: string;
    component: ReactNode;
};

export const routes: RoutesType[] = [
    {
        id: 1,
        label: 'Counter',
        url: '/',
        component:<Counter />,
    },
    {
        id: 2,
        label: 'History',
        url: '/history',
        component:<Archive />,
    },

];
