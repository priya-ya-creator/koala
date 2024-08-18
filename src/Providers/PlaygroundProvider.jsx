import { createContext, useContext, useState, useEffect } from "react";
import {v4} from 'uuid';
export const PlaygroundContext = createContext();
const initialData = [
    {
        id: v4(),
        title: 'Hello World',
        files: [
            {
                id: v4(),
                title: 'index',
                code: `cout<<"hello world";`,
                language: 'cpp',
            }
        ]

    },
    {
        id: v4(),
        title: 'Full Stack',
        files: [
            {
                id: v4(),
                title: 'test',
                code: `console.log("hello world");`,
                language: 'javascript',
            }
        ]

    }
];

export const PlaygroundProvider = ({children}) => {
    const [folders, setFolders] = useState (initialData);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(folders));

    }, [])
    const obj = {name: 'nandinee'};
    return (
        <PlaygroundContext.Provider value={folders}>
            {children}
        </PlaygroundContext.Provider>

    );
}