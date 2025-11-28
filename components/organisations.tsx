import Image from 'next/image'
import asset1 from '../public/org.svg'

interface Org {
    name: string;
    website: string;
}
const orgsData: Org[] = [];

const OrgCard = ({ org }: { org: Org }) => {
    return (
        <a className="relative w-[45%] sm:w-[20%] m-[2%] sm:m-[1%] hover:scale-105 duration-700" href={org.website} rel="noopener noreferrer" target="_blank" >
            <Image className="backdrop-blur" src={asset1} alt="org card" />
            <div className='absolute bottom-[4%] left-[10%] w-[80%] align-middle font-chakra font-bold text-scale-40-4 text-center text-orgs text-nowrap overflow-hidden'>
                {org.name}
            </div>
            <div className="absolute left-[10%] bottom-[15%] w-[80%] h-[80%] items-center flex">
                <Image src={`/orgs/${org.name}.png`} width="500" height="500" alt={org.name} />
            </div>

        </a>
    );
};


const Organisations = () => {
    var TBA = false;
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="orgs">
            <div className='text-center text-orgs font-kleemax text-scale-40 drop-shadow-gold'>
                ORGANISATIONS
            </div>
            {TBA ?
                <div className="pt-[5%] flex w-full justify-center text-[#C23B30] drop-shadow-red font-kleemax text-scale-30 font-semibold">
                    TO BE ANNOUNCED
                </div>
                :
                <>
                    <div className='w-full p-[10%] sm:p-[5%] gap-[2%] flex justify-center flex-wrap'>
                        {orgsData.map((org, index) =>
                            <OrgCard key={index} org={org} />
                        )}
                    </div>
                    <div className="flex w-full justify-center mt-[5%] px-4">
                        <a href="https://www.notion.so/Organisation-s-Application-Guide-Winter-of-Code-5-0-2ad489c63bf480d0a423d3ce5aceb69d?source=copy_link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center">
                            <button
                                className="glow-button w-full sm:w-auto"
                                style={{
                                    '--glow-color': '#44A7F0',
                                    '--glow-spread-color': 'rgba(68, 167, 240, 0.781)',
                                    '--enhanced-glow-color': 'rgb(100, 186, 245)',
                                    '--btn-color': 'rgb(25, 80, 120)',
                                } as React.CSSProperties}
                            >
                                COLLABORATE AS AN ORGANIZATION
                            </button>
                        </a>
                    </div>
                    <style jsx>{`
                .glow-button {
                    border: 0.25em solid var(--glow-color);
                    padding: 0.8em 1.5em;
                    color: var(--glow-color);
                    font-size: 12px;
                    font-weight: bold;
                    font-family: 'Chakra Petch', sans-serif;
                    cursor: pointer;
                    background-color: var(--btn-color);
                    border-radius: 1em;
                    outline: none;
                    box-shadow: 0 0 1em 0.25em var(--glow-color),
                        0 0 4em 1em var(--glow-spread-color),
                        inset 0 0 0.74em 0.25em var(--glow-color);
                    text-shadow: 0 0 0.5em var(--glow-color);
                    position: relative;
                    transition: all 0.3s;
                }
                
                @media (min-width: 640px) {
                    .glow-button {
                        padding: 1em 3em;
                        font-size: 15px;
                    }
                }
                
                .glow-button::after {
                    pointer-events: none;
                    content: "";
                    position: absolute;
                    top: 120%;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background-color: var(--glow-spread-color);
                    filter: blur(2em);
                    opacity: 0.7;
                    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
                }
                
                .glow-button:hover {
                    color: var(--btn-color);
                    background-color: var(--glow-color);
                    box-shadow: 0 0 1em 0.25em var(--glow-color),
                        0 0 4em 2em var(--glow-spread-color),
                        inset 0 0 0.75em 0.25em var(--glow-color);
                }
                
                .glow-button:active {
                    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
                        0 0 2.5em 2em var(--glow-spread-color),
                        inset 0 0 0.5em 0.25em var(--glow-color);
                }
            `}</style>
                </>
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
        </section>
    );

}

export default Organisations;