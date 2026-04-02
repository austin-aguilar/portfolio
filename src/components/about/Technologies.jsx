import { 
    SiPython, 
    SiReact, 
    SiVuedotjs, 
    SiJavascript, 
    SiMongodb, 
    SiPostgresql, 
    SiExpress, 
    SiNodedotjs, 
    SiFastapi,
    SiPandas,
    SiDocker,
    SiScikitlearn,
    SiJupyter,
    SiLangchain,
    SiHuggingface,
    SiOpenai,

 } from 'react-icons/si';
 import { VscMcp } from "react-icons/vsc";
import MyIcon from "./MyIcon"

const Technologies = () => {
    return (
        <div className="favTechnologies">
                <h2 className="techHeader">Tech Background </h2>
                <div className="techContainer">
                    <div className="techCols">
                        <div className="techCol">
                            <b>AI & LLMs</b>
                            <MyIcon icon={<VscMcp/>} caption="MCP"/>
                            <MyIcon icon={<SiHuggingface/>} caption="Hugging Face"/>
                            <MyIcon icon={<SiLangchain/>} caption="LangChain"/>
                            <MyIcon icon={<SiOpenai/>} caption="OpenAI Api"/>
                        </div>
                        <div className="techCol">
                            <b>Data Stack</b>
                            <MyIcon icon={<SiJupyter/>} caption="Jupyter"/>
                            <MyIcon icon={<SiPandas/>} caption="Pandas"/>
                            <MyIcon icon={<SiScikitlearn/>} caption="Scikit-Learn"/>
                        </div>
                        <div className="techCol">
                            <b>Infrastructure</b>
                            <MyIcon icon={<SiMongodb/>} caption="MongoDb"/>
                            <MyIcon icon={<SiPostgresql/>} caption="PostgreSql"/>
                            <MyIcon icon={<SiDocker/>} caption="Docker"/>
                        </div>
                         <div className="techCol">
                            <b>Languages</b>
                            <MyIcon icon={<SiPython/>} caption="Python"/>
                            <MyIcon icon={<SiJavascript/>} caption="Javascript"/>
                        </div>
                        <div className="techCol">
                            <b>FrontEnd</b>
                            <MyIcon icon = {<SiReact/>} caption = "React" />
                            <MyIcon icon = {<SiVuedotjs/>} caption = "VueJs" />
                        </div>
                        <div className="techCol">
                            <b>Backend</b>
                            <MyIcon icon={<SiNodedotjs/>} caption="NodeJs"/>
                            <MyIcon icon={<SiExpress/>} caption="ExpressJs"/>
                            <MyIcon icon={<SiFastapi/>} caption="FastApi"/>
                        </div>
                    </div> 
                </div>
            </div>
    )
}

export default Technologies