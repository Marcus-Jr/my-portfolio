import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimatedComponent from "../../../../components/AnimatedComponent/AnimatedComponent";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import { alpha } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import { Divider } from "@mui/material";
import type { JSX } from "react";

const About: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const StyledCardLogo = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   
        width: "110px",
        height: "110px",
        backgroundColor: theme.palette.primary.light,
        boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.2)}`,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const StyledLogo = styled("img")({
        width: "60px",
        height: "60px",
        marginBottom: "5px",
        '&:hover': {
            transform: "scale(1.2)",
            transition: "transform 0.3s ease-in-out"
        }
    });

    const skillLink = (skill: string) => {
        const links: Record<string, JSX.Element> = {
            "PHP": <StyledLogo src="https://logo.svgcdn.com/devicon/php-original.svg" alt="PHP"/>,
            "Javascript": <StyledLogo src="https://logo.svgcdn.com/devicon/javascript-original.svg" alt="Javascript" />,
            "Typescript": <StyledLogo src="https://logo.svgcdn.com/devicon/typescript-original.svg" alt="Typescript" />,
            "React": <StyledLogo src="https://logo.svgcdn.com/devicon/react-original.svg" alt="React" />,
            "Node.Js": <StyledLogo src="https://logo.svgcdn.com/devicon/nodejs-original.svg" alt="Node.Js" />,
            "Vue.js": <StyledLogo src="https://logo.svgcdn.com/devicon/vuejs-original.svg" alt="Vue.js" />,
            "HTML-5": <StyledLogo src="https://logo.svgcdn.com/devicon/html5-original.svg" alt="HTML-5" />,
            "CSS": <StyledLogo src="https://logo.svgcdn.com/devicon/css3-original.svg" alt="CSS" />,
            "Quasar": <StyledLogo src="https://logo.svgcdn.com/devicon/quasar-original.svg" alt="Quasar" />,
            "PostgreSQL": <StyledLogo src="https://logo.svgcdn.com/devicon/postgresql-original.svg" alt="PostgreSQL" />,
            "Bootstrap": <StyledLogo src="https://logo.svgcdn.com/devicon/bootstrap-original.svg" alt="Bootstrap" />,
            "Material UI": <StyledLogo src="https://logo.svgcdn.com/devicon/materialui-original.svg" alt="Material UI" />
        };
        return links[skill] || <Typography>{skill}</Typography>;
    }

    const skillsSet = [
        "PHP", "Javascript", "Typescript", "React", "Node.Js", "Vue.js", "HTML-5", "CSS", "Quasar", "PostgreSQL", "Bootstrap", "Material UI"
    ]

    return (
        <Box sx={{ backgroundColor: "primary.main", color: "primary.contrastText", overflow: "hidden", position: "relative"}}>
            {/* <AnimatedBackground/> */}
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3} position={"relative"} zIndex={1}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimatedComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon sx={{ color: "primary.contrastText" }} />
                                <Typography textAlign="center" fontWeight={600} color="primary.contrastText">Experiência</Typography>
                                <Typography textAlign="center" color="primary.contrastText">1+ ano</Typography>
                                <Typography textAlign="center" color="primary.contrastText">Desenvolvimento Full Stack</Typography>
                            </StyledCard>
                        </AnimatedComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimatedComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon sx={{ color: "primary.contrastText" }} />
                                <Typography textAlign="center" fontWeight={600} color="primary.contrastText">Educação</Typography>
                                <Typography textAlign="center" color="primary.contrastText">Cursando Ensino Médio</Typography>
                                <Typography textAlign="center" color="primary.contrastText">2022 - 2026</Typography>
                            </StyledCard>
                        </AnimatedComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou desenvolvedor full stack com experiência em JavaScript, PHP e bancos de dados, atuando no desenvolvimento e manutenção de sistemas corporativos e integrações com ERP. Gosto de criar soluções práticas e bem estruturadas, com atenção aos detalhes e código limpo. Estou sempre em busca de aprender mais, evoluir nas tecnologias e encarar novos desafios.
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: "primary.contrastText", opacity: 0.3 }} />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
                                <Tooltip title={skill} arrow>
                                    <StyledCardLogo variant="outlined">
                                        {skillLink(skill)}
                                    </StyledCardLogo>
                                </Tooltip>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default About
