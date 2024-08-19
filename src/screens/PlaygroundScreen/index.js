import { useParams } from "react-router-dom"

export const PlaygroundScreen = () => {
    const params = useParams();
    const {fileId, folderId } = params;
    return <h1 className="child">Playground Screen</h1>
}