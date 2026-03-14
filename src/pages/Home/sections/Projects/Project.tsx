import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimatedComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

const Projects: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));

    const projects = [
        {
            title: "Meu Portfólio",
            subtitle: "Ago 2025 - Ago 2025",
            srcImg: "/src/assets/images/portfolio.png",
            description: "Meu portfólio pessoal, contendo projetos e experiências profissionais.",
            technologies: "Tecnologias: React, TypeScript, Vite, Material UI, HTML, CSS",
            websiteURL: "https://marcusjrdev.netlify.app/",
            codeURL: "https://github.com/Marcus-Jr/my-portfolio",
            date: "2025-08-01",
        },
        {
            title: "Jogo da Cobrinha",
            subtitle: "Mai 2024 - Mai 2024",
            srcImg: "/src/assets/images/snake-game-over.png",
            description: "Jogo divertido e clássico da cobrinha. Você controla a cobra para comer a comida e crescer, mas cuidado para não bater nas paredes ou em si mesmo!",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: " https://bysnakegame.netlify.app/",
            codeURL: "https://github.com/Marcus-Jr/Snake-Game",
            date: "2024-05-01",
        },
        {
            title: "TaskFlow - Gerenciador de Tarefas",
            subtitle: "Set 2026 - Set 2026",
            srcImg: "/src/assets/images/task-flow.png",
            description: "Aplicação de gerenciamento de tarefas desenvolvida em React, permitindo aos usuários criar, editar e excluir tarefas de forma intuitiva.",
            technologies: "Tecnologias: Vue.js, JavaScript, HTML, CSS",
            websiteURL: "https://bytaskflow.netlify.app/",
            codeURL: "https://github.com/Marcus-Jr/to-do-list-pro",
            date: "2025-09-01",
        },
        {
            title: "Projeto de ONG",
            subtitle: "Nov 2025 - Nov 2025",
            srcImg: "/src/assets/images/ong-outubro-rosa.png",
            description: "Projeto de landing page construida em React, visando conscientização e prevenção contra o câncer de mama.",
            technologies: "Tecnologias: React, TypeScript, Vite, HTML, Material UI, CSS",
            websiteURL: "https://outubrorosaong.netlify.app/",
            codeURL: "https://github.com/Marcus-Jr/ong-outubro-rosa",
            date: "2025-11-01",
        },
        {
            title: "Snip.io - Encurtador de URL",
            subtitle: "Mar 2026 - Mar 2026",
            srcImg: "/src/assets/images/snip-io.png",
            description: "Encurtador de URL que transforma links longos em versões compactas para fácil compartilhamento. Armazenamento via cache de servidor utilizando Map em memória persistida no objeto global do Next.js.",
            technologies: "Tecnologias: React, Next.js, TypeScript, HTML, Tailwind CSS",
            websiteURL: "https://snip-io.netlify.app/",
            codeURL: "https://github.com/Marcus-Jr/url-shortner",
            date: "2026-03-01   ",
        },
    ];

    const projetosOrdenados = [...projects].sort((a,b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projetosOrdenados.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimatedComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimatedComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    );
};

export default Projects;
