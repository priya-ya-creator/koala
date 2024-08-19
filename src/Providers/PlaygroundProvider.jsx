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
    const [folders, setFolders] = useState(() => {
        if(localStorage.getItem('data')){
            return JSON.parse(localStorage.getItem('data'));
        }
        return initialData;
    });
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

    const createNewFolder = (folderName) => {
        const newFolder= {
            id: v4(),
            title: folderName,
            files: []
        }

        const allFolders = [...folders, newFolder];
        folders.push(newFolder);
        localStorage.setItem('data', JSON.stringify(allFolders));
        setFolders(allFolders);
    }

    const deleteFolder = (id) => {
        const updatedFoldersList = folders.filter ((folderItem) => {
            return folderItem.id !== id;
        })

        localStorage.setItem('data', JSON.stringify(updatedFoldersList));
        setFolders(updatedFoldersList);
    }

    const editFolderTitle = (newFolderName, id) => {
        const updatedFoldersList = folders.map ((folderItem) => {
            if(folderItem.id === id) {
                folderItem.title = newFolderName;
            }
            return folderItem;
        })
        localStorage.setItem('data', JSON.stringify(updatedFoldersList));
        setFolders(updatedFoldersList);
    }
    useEffect(() => {

        if(!localStorage.getItem('data')){
            localStorage.setItem('data', JSON.stringify(folders));
        }
    }, [])
    const battlefieldFeatures = {
        folders,
        createNewBattlefield,
        createNewFolder,
        deleteFolder,
        editFolderTitle
    }
    // const obj = {name: 'nandinee'};
    return (
        <PlaygroundContext.Provider value={battlefieldFeatures}>
            {children}
        </PlaygroundContext.Provider>

    );
}