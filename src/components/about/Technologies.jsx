import { SiPython, SiReact, SiVuedotjs, SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiNodedotjs } from 'react-icons/si';
import MyIcon from "./MyIcon"

const Technologies = () => {
    return (
        <div className="favTechnologies">
                <h2 className="techHeader">My Technologies</h2>
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
                            <MyIcon icon={<SiMongodb/>} caption="MongoDb"/>
                            <MyIcon icon={<SiPostgresql/>} caption="PostgreSql"/>
                            <MyIcon icon={<SiExpress/>} caption="ExpressJs"/>
                        </div>
                    </div>
   
    
                </div>
            </div>
    )
}

export default Technologies