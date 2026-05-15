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

const Badge = ({ icon, label }) => (
    <span className="techBadge">
        {icon}
        {label}
    </span>
);

const TechGroup = ({ name, badges }) => (
    <div className="techGroup">
        <span className="techGroupName">{name}</span>
        <div className="techBadges">
            {badges.map(b => <Badge key={b.label} icon={b.icon} label={b.label} />)}
        </div>
    </div>
);


const groups = [
    {
        name: "AI & LLMs",
        badges: [
            { icon: <SiLangchain />, label: "LangChain" },
            { icon: <SiHuggingface />, label: "Hugging Face" },
            { icon: <SiOpenai />, label: "OpenAI API" },
            { icon: <VscMcp />, label: "MCP" },
        ]
    },
    {
        name: "Data Stack",
        badges: [
            { icon: <SiPython />, label: "Python" },
            { icon: <SiJupyter />, label: "Jupyter" },
            { icon: <SiPandas />, label: "Pandas" },
            { icon: <SiScikitlearn />, label: "Scikit-Learn" },
        ]
    },
    {
        name: "Infrastructure",
        badges: [
            { icon: <SiDocker />, label: "Docker" },
            { icon: <SiPostgresql />, label: "PostgreSQL" },
            { icon: <SiMongodb />, label: "MongoDB" },
        ]
    },
    {
        name: "Frontend",
        badges: [
            { icon: <SiReact />, label: "React" },
            { icon: <SiVuedotjs />, label: "Vue.js" },
            { icon: <SiJavascript />, label: "JavaScript" },
        ]
    },
    {
        name: "Backend",
        badges: [
            { icon: <SiFastapi />, label: "FastAPI" },
            { icon: <SiNodedotjs />, label: "Node.js" },
            { icon: <SiExpress />, label: "Express" },
        ]
    },
];

const Technologies = () => (
    <div className="techSection">
        <p className="techSectionLabel">Tech Background</p>
        <div className="techGroups">
            {groups.map(g => <TechGroup key={g.name} name={g.name} badges={g.badges} />)}
        </div>
    </div>
);

export default Technologies;