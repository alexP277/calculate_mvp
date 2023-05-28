import {UploadOutlined} from "@ant-design/icons";
import {Button, Card, Upload as UploadFile} from "antd";
import {useState} from "react";
import './style.css';

const FileViewer: React.FC = () => {
    const [file, setFile] = useState<string | null>(null);

    const handleFileChange = (info: any) => {
        const {file} = info;

        if (file?.status === "removed") {
            setFile(null);
            return;
        }

            const reader = new FileReader();
            reader.onload = (e: any) => {
                const fileUrl = e.target.result;
               setFile(fileUrl);// Открытие файла в новой вкладке
            };
            reader.readAsDataURL(file);
    };
    const renderPDF = () => {
        if (file) {
            return <embed src={file} type="application/pdf" className="pdf-embed" />;
        }
        return null;
    };

    return (
        <div className="pdf-viewer">
                <UploadFile
                    style={{marginBottom: '10px'}}
                    onChange={handleFileChange}
                    accept=".pdf"
                    action="URL_ДЛЯ_ЗАГРУЗКИ"
                    beforeUpload={() => false}
                    listType="text"
                >
                    <Button icon={<UploadOutlined/> }>
                        Выберите файл
                    </Button>
                </UploadFile>
            {!file &&<Card  style={{marginTop: "10px", height: '800px', width: '100%', display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p>Выберите файл</p>
                </Card>}
            {renderPDF()}
        </div>
    );
};

export default FileViewer;
