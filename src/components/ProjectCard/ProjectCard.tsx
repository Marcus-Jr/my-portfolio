import { Grid, Typography, styled, Box} from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const badgeLinks: Record<string, string> = {
    "React": "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
    "TypeScript": "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white",
    "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black",
    "Vite": "https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white",
    "Material UI": "https://img.shields.io/badge/Material%20UI-007FFF?logo=mui&logoColor=white",
    "Next.js": "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
    "Tailwind CSS": "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white",
    "Vue.js": "https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=white",
    "HTML": "https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white",
    "CSS": "https://img.shields.io/badge/CSS-1572B6?logo=css&logoColor=white"
};
export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string;
    technologies: string;
    badges: string[];
    websiteURL: string;
    codeURL: string;
}

const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "80vw",
    padding: "10px 0",
    [theme.breakpoints.up('md')]: {
        height: "45vh",
    },
}));

const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "8px",
    border: `0.2px solid  ${theme.palette.primary.contrastText}`,
    boxShadow: `0 2px 2px 0 ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    '&:hover': {
        backgroundColor: theme.palette.primary.light
    }
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    srcImg,
    description,
    badges,
    websiteURL,
    codeURL
}) => {

    return (
        <StyledCard>
            <StyledImg src={srcImg} />
            <Typography variant="h5" sx={{color: "secondary.main"}}>
                {title}
            </Typography>
            <br />
            <Typography>
                {description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2 }}>
                {badges.map((badge) => (
                    <img
                        key={badge}
                        src={badgeLinks[badge]}
                        alt={badge}
                    />
                ))}
            </Box>
            <Grid container spacing={1} pt={2} sx={{ marginTop: "auto" }}>
                <Grid size={{ xs: 6 }}>
                    <StyledButton onClick={() => window.open(websiteURL)}>
                        <VisibilityOutlinedIcon />
                        Deploy
                    </StyledButton>
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <StyledButton onClick={() => window.open(codeURL)}>
                        <GitHubIcon/>
                        Github
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;
