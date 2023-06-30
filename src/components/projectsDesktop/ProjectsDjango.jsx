/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './ProjectsDesktop.css';
import ProjectDesktop from '../projectDesktop/ProjectDesktop';
import Agriaraujo from '../../assets/agriaraujo.jpeg';
import Sistemaagendamento from '../../assets/SistemaAgendamento.jpeg';

const ProjectsDjango = () => {
    const AgriAraujo = ['Django', 'Python', 'VPN', 'MySQL', 'Bootstrap', 'Generic Views'];
    const SistemaAgendamento = ['Django', 'Python', 'Generic Views', 'Bootstrap'];

    return (
        <div className="projects-desktop-content">
            <ProjectDesktop
                title="AgriAraujo Grãos e Produtos Agrícolas Ltda"
                img={Agriaraujo}
                description="Sistema de controle de clientes, estoque, vendas, compras, caixa, geração de nota fiscal e relatórios."
                tecnologies={AgriAraujo}
            />
            <ProjectDesktop
                title="Sistema de Agendamento"
                img={Sistemaagendamento}
                description="Sistema de controle de agenda, clientes, caixa e funcionários."
                tecnologies={SistemaAgendamento}
            />
        </div>
    );
};

export default ProjectsDjango;
