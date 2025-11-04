import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimatedComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

const About: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "PHP", "Javascript", "Typescript", "React", "Node.Js", "Vue.js", "HTML", "CSS", "Quasar", "SQL", "Bootstrap", "Material UI"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimatedComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">1+ ano</Typography>
                                <Typography textAlign="center">Desenvolvimento Full Stack</Typography>
                            </StyledCard>
                        </AnimatedComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimatedComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Cursando Ensino Médio</Typography>
                                <Typography textAlign="center">2022 - 2026</Typography>
                            </StyledCard>
                        </AnimatedComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou desenvolvedor full stack com experiência em JavaScript, PHP e bancos de dados, atuando no desenvolvimento e manutenção de sistemas corporativos e integrações com ERP. Gosto de criar soluções práticas e bem estruturadas, com atenção aos detalhes e código limpo. Estou sempre em busca de aprender mais, evoluir nas tecnologias e encarar novos desafios.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default About
