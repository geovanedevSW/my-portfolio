# Portfólio — Geovane Vinicios

Portfólio pessoal desenvolvido com React e TypeScript para apresentar minha trajetória profissional, conhecimentos técnicos e projetos.

Sou estudante de Engenharia de Software e estou direcionando minha carreira para o desenvolvimento full stack, com foco em JavaScript, TypeScript, React, Node.js e Express. Minha experiência também passa por suporte de TI, testes funcionais, análise de sistemas, páginas web e análise de dados.

## Sobre o projeto

O site reúne informações sobre minha experiência e meus estudos em uma interface responsiva, com navegação entre páginas, suporte a português e inglês e alternância entre temas claro e escuro.

O portfólio também é um espaço para colocar em prática o que estou aprendendo. Conforme desenvolvo novos projetos, atualizo os trabalhos apresentados e os conhecimentos descritos.

## Funcionalidades

- Página inicial com apresentação pessoal e acesso ao currículo.
- Card de perfil com fotografia e informações profissionais.
- Seção sobre minha trajetória e objetivos.
- Linha do tempo de experiências profissionais.
- Tecnologias organizadas por área de conhecimento.
- Cards de projetos com imagem, tecnologias, descrição e links.
- Acesso aos repositórios e aos sites dos projetos apresentados.
- Página de contato.
- Alternância entre português e inglês.
- Temas claro e escuro.
- Layout adaptado para celular, tablet e desktop.
- Animações de interface com Motion e GSAP.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| React | Construção da interface em componentes |
| TypeScript | Tipagem do código |
| Vite | Servidor de desenvolvimento e geração do build |
| TanStack Router | Navegação entre páginas |
| Tailwind CSS | Estilização e layout responsivo |
| shadcn/ui | Base para componentes de interface |
| Lucide React | Ícones da interface |
| Motion | Animações e interações |
| GSAP | Animações de texto e efeitos ligados à rolagem |

> Esta tabela descreve as tecnologias do portfólio. As tecnologias apresentadas na página de conhecimentos também incluem ferramentas utilizadas no trabalho e conteúdos em estudo.

## Páginas

| Página | Rota | Conteúdo |
| --- | --- | --- |
| Início | `/` | Apresentação, perfil e acesso ao currículo |
| Sobre | `/sobre` | Trajetória, estudos e objetivos profissionais |
| Experiência | `/experiencia` | Histórico profissional em uma linha do tempo |
| Tecnologias | `/tecnologias` | Conhecimentos em desenvolvimento, dados e ferramentas |
| Projetos | `/projetos` | Trabalhos desenvolvidos e seus links |
| Contato | `/contato` | Informações para contato |

## Projeto apresentado

### Jhenifer Nogueira — Portfólio UGC

Landing page desenvolvida para apresentar o trabalho de uma criadora de conteúdo UGC e facilitar o contato com marcas.

O projeto reúne apresentação profissional, trabalhos e formulário de briefing, com layout responsivo.

**Tecnologias:** React, TypeScript, Tailwind CSS, Vite, Framer Motion e EmailJS.

- [Repositório](https://github.com/geovanedevSW/portfolio-jn-ugc)
- [Site](https://jhenifernogueira.com.br)

Novos projetos serão adicionados conforme forem desenvolvidos.

## Executando localmente

### Pré-requisitos

- Node.js em uma versão compatível com as dependências do projeto.
- npm.
- Git.

Caso o `package.json` declare uma versão de Node.js em `engines`, utilize uma versão que atenda a esse requisito.

### 1. Clone o repositório

```bash
git clone https://github.com/geovanedevSW/my-portfolio.git
```

### 2. Acesse a pasta

```bash
cd my-portfolio
```

### 3. Instale as dependências

Para instalar as versões registradas no `package-lock.json`:

```bash
npm ci
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço informado pelo terminal.

Para acessar o servidor por outro dispositivo na mesma rede:

```bash
npm run dev -- --host
```

Utilize o endereço de rede exibido pelo Vite.

## Build

Para gerar a versão de produção:

```bash
npm run build
```

A configuração do projeto determina a localização e o formato dos arquivos gerados. Em aplicações Vite, a pasta de saída normalmente é `dist/`.

Antes da publicação, confira o resultado do build e verifique as páginas, imagens e links.

## Scripts disponíveis

Para consultar todos os comandos definidos no projeto:

```bash
npm run
```

Scripts de testes, lint e pré-visualização dependem das entradas presentes no `package.json`.

## Organização do projeto

Os principais arquivos e diretórios são:

| Caminho | Responsabilidade |
| --- | --- |
| `src/` | Código-fonte da aplicação |
| `src/assets/` | Imagens e recursos importados pelos componentes |
| `src/components/` | Componentes e páginas da interface |
| `src/components/ui/` | Componentes básicos de interface |
| `src/context/` | Contextos compartilhados, como preferências de idioma e tema |
| `public/` | Arquivos públicos servidos diretamente |
| `index.html` | Documento HTML de entrada |
| `package.json` | Dependências e scripts |
| `package-lock.json` | Versões registradas das dependências |
| `components.json` | Configuração do shadcn/ui |
| `vite.config.ts` | Configuração do Vite e dos plugins |
| `tsconfig.json` | Configuração do TypeScript |
| `eslint.config.js` | Configuração de análise estática |
| `vitest.config.ts` | Configuração do ambiente de testes |
| `.gitignore` | Arquivos e pastas excluídos do versionamento |

## Conteúdo e personalização

### Textos e idiomas

Os textos da interface são organizados em um objeto de traduções, com versões em português e inglês, e acessados pelo contexto de preferências.

Ao alterar um texto ou adicionar uma informação, atualize as duas versões para manter o conteúdo consistente.

### Projetos

Os cards de projetos são configurados na página `ProjectsPage`.

Para adicionar um projeto, informe:

- Nome.
- Imagem de apresentação.
- Tecnologias utilizadas.
- Descrição em português e inglês.
- Link do repositório.
- Link do site, quando disponível.

### Imagens

Imagens utilizadas por componentes podem ficar em `src/assets/` e ser importadas:

```tsx
import projectPreview from "@/assets/portfolio-jn-ugc.webp";

<img
  src={projectPreview}
  alt="Prévia do portfólio de Jhenifer Nogueira"
/>
```

Arquivos colocados em `public/` são referenciados pelo caminho a partir da raiz:

```tsx
<img
  src="/projects/portfolio-jn-ugc.webp"
  alt="Prévia do portfólio de Jhenifer Nogueira"
/>
```

O nome, a extensão e o uso de letras maiúsculas e minúsculas devem corresponder ao arquivo.

### Currículo

Ao atualizar o PDF do currículo, confira os links de download na página inicial e no cabeçalho.

Os dois devem apontar para a versão atual do documento.

## Variáveis de ambiente

Caso alguma integração precise de variáveis de ambiente, utilize um arquivo local e documente os nomes necessários em `.env.example`, sem incluir credenciais reais.

Arquivos `.env` não devem ser enviados ao repositório.

Em aplicações Vite, variáveis com o prefixo `VITE_` podem ser incluídas no código enviado ao navegador. Por isso, não devem armazenar segredos, senhas ou chaves privadas.

## Versionamento

As seguintes pastas são geradas pelas ferramentas e ficam fora do repositório:

- `node_modules/`
- `dist/`
- `dist-ssr/`
- `.output/`
- `.vinxi/`
- `.tanstack/`
- `.nitro/`

O `package-lock.json` é mantido no Git para permitir instalações consistentes das dependências.

## Publicação

A forma de publicação depende da configuração presente no `vite.config.ts` e dos plugins utilizados.

Para um build estático, utilize uma hospedagem compatível com aplicações web estáticas e configure o tratamento das rotas. Acessar diretamente `/sobre` ou `/projetos`, por exemplo, deve carregar a aplicação sem retornar um erro 404.

Caso a configuração gere um servidor, utilize uma hospedagem compatível com esse formato.

## Verificações antes de publicar

- Executar o build sem erros.
- Conferir todas as rotas, incluindo acesso direto pela URL.
- Testar o layout em diferentes tamanhos de tela.
- Verificar os temas claro e escuro.
- Conferir os textos em português e inglês.
- Testar o download do currículo.
- Verificar imagens e links dos projetos.
- Conferir a navegação por teclado e a indicação de foco.

## Próximas melhorias

- Adicionar novos projetos full stack.
- Incluir mais detalhes sobre as decisões técnicas dos projetos.
- Revisar acessibilidade e navegação por teclado.
- Otimizar imagens e carregamento das páginas.
- Ampliar os testes das principais interações.

## Contato

**Geovane Vinicios**  
Belo Horizonte — MG

- [GitHub](https://github.com/geovanedevSW)
- [LinkedIn](https://www.linkedin.com/in/geovanevinicios)
- [E-mail](mailto:gviniciossalesp@gmail.com)