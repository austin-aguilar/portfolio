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
    SiGithub,
    SiDocker,
    SiAwsamplify,
    SiScikitlearn,
    SiJupyter,
    SiPytorch,
 } from 'react-icons/si';
import MyIcon from "./MyIcon"

const Technologies = () => {
    return (
        <div className="favTechnologies">
                <h2 className="techHeader">Tech I've Used</h2>
                <div className="techContainer">
                    <div className="techCols">
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
                        <div className="techCol">
                            <b>Database</b>
                            <MyIcon icon={<SiMongodb/>} caption="MongoDb"/>
                            <MyIcon icon={<SiPostgresql/>} caption="PostgreSql"/>
                        </div>
                        <div className="techCol">
                            <b>Data Stack</b>
                            <MyIcon icon={<SiJupyter/>} caption="Jupyter"/>
                            <MyIcon icon={<SiScikitlearn/>} caption="Scikit-Learn"/>
                            <MyIcon icon={<SiPytorch/>} caption="Pytorch"/>
                        </div>
                        <div className="techCol">
                            <b>Tools</b>
                            <MyIcon icon={<SiGithub/>} caption="Github"/>
                            <MyIcon icon={<SiAwsamplify/>} caption="AWS Amplify"/>
                            <MyIcon icon={<SiDocker/>} caption="Docker"/>
                        </div>
                    </div>
   
    
                </div>
            </div>
    )
}

export default Technologies