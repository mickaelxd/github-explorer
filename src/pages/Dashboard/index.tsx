import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Form, Repositories, Title } from './styles';
import logoImg from '../../assets/github-explorer-logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositórios no Github.</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="/">
        <img
          src="https://avatars2.githubusercontent.com/u/51544205?s=460&u=a6dd600a9a2e7cd101b1e5fc45d9104740f27f8f&v=4"
          alt="mickaelxd/proffy"
        />
        <div>
          <strong>mickaelxd/proffy</strong>
          <p>Repositório feito para conectar professores e alunos.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
