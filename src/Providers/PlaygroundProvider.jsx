import { createContext, useState, useEffect } from "react";
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
const defaultCodes = {
    ['cpp']: `cout<<"hello world";`,
    ['javascript']: `console.log("hello world");`,
    ['python']: `print("hello world")`,
    ['java']: `System.out.println("hello world");`,
    ['html']: `<h1>hello world</h1>`,
}

export const PlaygroundProvider = ({children}) => {
    const [folders, setFolders] = useState (initialData);

    const createNewBattlefield = (newBattlefield) => {
        const {fileName, folderName, language} = newBattlefield;
        const newFolders = [...folders];
        newFolders.push({
            id:v4(),
            title: folderName,
            files: [
                {
                    id: v4(),
                    title: fileName,
                    code: defaultCodes[language],
                    language: language
                }
            ],
            // language: language
        })
        localStorage.setItem('data', JSON.stringify(newFolders));
        setFolders(newFolders);
    }

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(folders));

    }, [])
    const battlefieldFeatures = {
        folders,
        createNewBattlefield 
    }
    // const obj = {name: 'nandinee'};
    return (
        <PlaygroundContext.Provider value={battlefieldFeatures}>
            {children}
        </PlaygroundContext.Provider>

    );
}