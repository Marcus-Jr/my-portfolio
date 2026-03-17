import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimatedComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

// Importando os dados dos projetos
import jsonProjects from "../../../../data/projects.json";
import { imagesMap } from "../../../../data/imagesMap";

const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}));

const Projects: React.FC = () => {

    const projects = jsonProjects;

    const projetosOrdenados = [...projects].map((project) => ({
        ...project,
        srcImg: imagesMap[project.srcImg] ?? project.srcImg,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}  alignItems="stretch">
                    {projetosOrdenados.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }} key={index} alignItems="stretch">
                            <AnimatedComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    badges={project.badges}
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
