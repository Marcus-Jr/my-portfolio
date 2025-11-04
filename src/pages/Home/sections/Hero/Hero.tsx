import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdf/Open.pdf";
import Background from "../../../../assets/images/paisagem.jpg";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Background})`,        backgroundSize: "cover",            
        backgroundPosition: "center",        
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0px"
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'Marcus Junior.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'marcusfrancajr@gmail.com';
        const subject = 'Assunto';
        const body = 'Olá! Vi seu portfólio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth={"lg"}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position={"relative"} textAlign={"center"}>
                                <StyledImg src={Avatar} />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Marcus Jr</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>Desenvolvedor de Software</Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={() => handleDownload()}>
                                        <DownloadIcon />
                                        <Typography>
                                            Baixar CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={() => handleEmail()}>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contate-me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
