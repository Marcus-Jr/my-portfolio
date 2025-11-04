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
            title: "Exemplo de Projeto",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Exemplo de Projeto",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-financas.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Projeto Craze Maze",
            subtitle: "Jul 2019 - Mai 2019",
            srcImg: "/src/assets/images/project1-craze-maze.gif",
            description: "Jogo para escapar do labirinto — mas não apenas isso. Foi criado um algoritmo que gera aleatoriamente um novo labirinto a cada vez que o jogo é iniciado. Neste jogo, o usuário pode usar as teclas do teclado para se mover até encontrar a bandeira e vencer o jogo.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Projeto Blotting",
            subtitle: "Jul 2019 - Mai 2019",
            srcImg: "/src/assets/images/project2-blotting.png",
            description: "Jogo para escapar do labirinto — mas não apenas isso. Foi criado um algoritmo que gera aleatoriamente um novo labirinto a cada vez que o jogo é iniciado. Neste jogo, o usuário pode usar as teclas do teclado para se mover até encontrar a bandeira e vencer o jogo.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
    ];

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
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
