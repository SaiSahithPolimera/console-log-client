import { ReactIcon, TailwindIcon, ExpressJSIcon, NodeJSIcon, ArduinoIcon, PrismaIcon, PostgresIcon, MySQLIcon, JestIcon, CppIcon, JavaIcon } from "./Icons";
const Hero = () => {
    const technologies = [
        { Icon: <ReactIcon />, Name: "React" },
        { Icon: <TailwindIcon />, Name: "Tailwind" },
        { Icon: <ExpressJSIcon />, Name: "Express" },
        { Icon: <NodeJSIcon />, Name: "Node" },
        { Icon: <ArduinoIcon />, Name: "Arduino" },
        { Icon: <PrismaIcon />, Name: "Prisma" },
        { Icon: <PostgresIcon />, Name: "PostgreSQL" },
        { Icon: <MySQLIcon />, Name: "MySQL" },
        { Icon: <JestIcon />, Name: "Jest" },
        { Icon: <CppIcon /> },
        { Icon: <JavaIcon />, Name: "Java" }
    ]
    return (
        <section className="p-2 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-extrabold w-96">Hello, This is Sahith</h1>
                <h4 className="text-xl text-slate-200">I like building things for web, this is my personal blog</h4>
            </div>
            <div className="p-1 flex flex-col gap-4">
                <h1 className="text-xl">My tech stack</h1>
                <div className="grid grid-cols-4 items-start gap-3 w-3/5">
                    {
                        technologies.map((technology) => <span key={technology} className="flex items-center gap-2 hover:cursor-pointer"> <div> {technology.Icon}</div> <div> {technology.Name}</div></span>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Hero;
