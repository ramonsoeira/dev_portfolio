import React from 'react';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import Education from '../education/education'
import Skills from '../skills/skills'
// Importando o avatar da empresa 1
import company_avatar from '../../images/Company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/Company2.png';
import school_avatar from '../../images/school.png';
import school_avatar2 from '../../images/school2.png';
import school_avatar3 from '../../images/school3.png';

const Home = () => (
        <div className='row'>
                <div className='col s2 offset-s1'>
                        <UserProfile />
                </div>
                <div className="col s8">
                        <h5 className="subtitle">Sobre mim</h5>
                        <div className="card-panel">
                                <p>Desenvolvedora web com 2 anos de experiência profissional, estudando e aperfeiçoando conhecimentos na área desde 2013. Em busca de uma oportunidade na área de desenvolvimento front-end para agregar e aperfeiçoar meus conhecimentos e habilidades em uma empresa.
                                </p>
                        </div>
                        <h5 className="subtitle">Formação Acadêmica</h5>
                        <Education title="Curso Técnico Integrado ao Ensino médio"
                                company="Etec de Sapopemba"
                                description="Ensino Técnico em Informática Integrado ao Médio – ETIM, ETEC de Sapopemba – De janeiro/2013 até dezembro/ 2015."
                                avatar={school_avatar}
                        />
                        <Education title="Graduação"
                                company="Universidade Cidade de São Paulo"
                                description="Ciência da Computação, Universidade Cidade de São Paulo – Conclusão em dezembro/ 2020"
                                avatar={school_avatar2}
                        />
                        <h5 className="subtitle">Experiências</h5>
                        <Experience title="Estagiária"
                                company="Sainte Marie"
                                description="Empresa Sainte Marie Importação e Exportação LTDA – De outubro/2016 até setembro/2017."
                                avatar={company_avatar2}
                        />
                        <Experience title="Auxiliar de Suporte"
                                company="Sainte Marie"
                                description="Empresa Sainte Marie Importação e Exportação LTDA – De setembro/2017 – até Novembro/2018."
                                avatar={company_avatar}
                        />
                        <Experience title="Desenvolvedora Front-End júnior"
                                company="Advance Telecom"
                                description="Empresa Advance Telecom – De Novembro/2018 – Atualmente."
                                avatar={company_avatar}
                        />
                          <h5 className="subtitle">Cursos Extracurriculares</h5>
                        <Education title="Inglês"
                                company="CNA"
                                description="Inglês, nível Master – 5 anos, Finalizado."
                                avatar={school_avatar3}
                        />
                        <Education title="FCE"
                                company="CNA"
                                description="First Certificate in English of Cambridge - Nível B1"
                                avatar={school_avatar3}
                        />
                             <h5 className="subtitle">Habilidades</h5>
                        <Skills />
         
                </div>
        </div>
)


export default Home;