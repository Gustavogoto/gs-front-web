import { } from 'react';
import "../Home/style/Home.css"
import Imagem1 from "../../assets/imagem1.png"
import Imagem2 from "../../assets/imagem2.png"
import Imagem3 from "../../assets/imagem3.png"
import Imagem4 from "../../assets/imagem4.png"

function Home() {
  return (
    <div className='body'>
      <div className='Home'>
        <main>
          <img alt="Soluções de Estoque Inteligente" className="main_img" src={Imagem2} />
          <section className="main_info">
            <h1 className='main-title'>Transforme sua gestão de estoque com inteligência</h1>
            <p>
              SNODDA oferece soluções inovadoras, personalizando estratégias para otimizar a gestão de estoque farmacêutico. Integrando tecnologia avançada de sensores, nosso sistema detecta automaticamente caixas de medicamentos, fornecendo insights contínuos e colaboração profissional. Proporcionamos uma experiência única e eficaz na administração de medicamentos.
            </p>
          </section>

          <div className='div-button'>
            <button className='btn main-button'><a href='https://www.fiap.com.br/' className='botao-caminho'>Saiba mais</a></button>
          </div>

          

        </main>

        <aside>
          <section className='aside-container'>
            <section className='aside-item'>
              <h1 className='title_int'>O que oferecemos:</h1>
              <p>
                SNODDA é uma solução digital revolucionária desenvolvida para otimizar a gestão de estoque farmacêutico. Utilizando sensores avançados, o sistema identifica automaticamente caixas de medicamentos, proporcionando uma plataforma inovadora projetada para oferecer estratégias personalizadas adaptadas às necessidades específicas de cada farmácia. O objetivo é promover uma administração de medicamentos ativa e eficaz.
              </p>
            </section>
            <hr width='90%' className='aside-separador'></hr>
            <section className='aside-item'>
              <h1 className='title_int'>Como funciona:</h1>
              <p>
                SNODDA funciona como um guia personalizado para a gestão de estoque farmacêutico, iniciando com a análise detalhada das operações e das demandas específicas de cada farmácia. Com base nessas informações, os algoritmos adaptativos do sistema criarão estratégias de estoque específicas. A interatividade será incentivada por meio de recursos que permitirão às farmácias acompanhar seu desempenho e se conectar diretamente com profissionais de saúde para ajustes em tempo real. Essa abordagem dinâmica e personalizada garantirá uma gestão de medicamentos integral e alinhada com as necessidades individuais de cada farmácia.
              </p>
            </section>
            <hr width='90%' className='aside-separador'></hr>
            <section className='aside-item'>
              <h1 className='title_int'>Por que utilizar:</h1>
              <p>
              A empresa Snodda incorpora um estoque inteligente para otimizar operações e enfrentar desafios logísticos. Com tecnologias avançadas de rastreamento e automação, a Snodda garante uma gestão eficiente do inventário em tempo real, reduzindo custos operacionais e liberando recursos para tarefas estratégicas. A inteligência artificial permite análises preditivas, ajustando automaticamente os níveis de estoque e promovendo agilidade diante das mudanças no mercado. Além disso, a segurança e a qualidade dos produtos são reforçadas por sensores que monitoram condições ideais de armazenamento. Ao investir nesse avançado sistema, a Snodda reforça seu compromisso com a excelência operacional e a satisfação do cliente.
              </p>
            </section>
          </section>
        </aside>
      </div>

      <section className="vantagens">
        <h1 className='vantagens-titulo'>Vantagens</h1>
        <div className='cards'>
          <section className='vantagens-section'>
            <img src={Imagem3} alt='gestao' className='section-img' />
            <div className='section-div'>
              <h1 className='vantagens-numero'>01</h1>
              <h1 className='vantagens-vantagem'>Eficiência na gestão de medicamentos</h1>
              <p className='vantagem-texto'>EstoqueSensor visa otimizar a gestão de medicamentos por meio de estratégias inteligentes e personalizadas, utilizando a detecção automática de caixas de medicamentos.</p>
            </div>
          </section>

          <section className='vantagens-section'>
            <img src={Imagem1} alt='Plano de exercicios personalizado' className='section-img' />
            <div className='section-div'>
              <h1 className='vantagens-numero'>02</h1>
              <h1 className='vantagens-vantagem'>Personalização Adaptativa</h1>
              <p className='vantagem-texto'>Estratégias de estoque personalizadas com base nas operações específicas de cada farmácia, aproveitando a tecnologia de sensor para detecção automática de caixas de medicamentos.</p>
            </div>
          </section>

          <section className='vantagens-section'>
            <img src={Imagem4} alt='Acompanhamento médico' className='section-img' />
            <div className='section-div'>
              <h1 className='vantagens-numero'>03</h1>
              <h1 className='vantagens-vantagem'>Colaboração Profissional</h1>
              <p className='vantagem-texto'>Comunique-se diretamente com especialistas para ajustes personalizados em tempo real, otimizando a gestão de medicamentos com o auxílio dos sensores de detecção automática de caixas de medicamentos.</p>
            </div>
          </section>
        </div>
      </section>



    </div>
  )
}

export default Home;