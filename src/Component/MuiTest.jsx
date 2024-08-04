import { Container, Typography } from "@mui/material"

function MuiTest() {
    /* make sure use container material not system */

    /* responsive by default */
    return (

    /* like the container in bootstrap*/
    <Container 
    sx={{ 
        bgcolor: "pink", 
        height: "100vh",
        display: "flex",
        flexDirection: "column"}}>
        
        {/* Its like paragraph element*/}
        <Typography>Hello World</Typography>
        
        {/* h1 component*/}
        <Typography variant="h1">Hello World</Typography>

        {/* box - empty div, you can do sx. cool features here you use the 8px based spacing, hover, etc.*/}
        <box></box>
        <Typography sx={{ py: 10 }}>
            py: 10
        </Typography>

        <Typography 

        sx={{ 
            py: 2,
            px: 6, 
            bgcolor: "lightgray",
            borderRadius: "8px",
            ":hover": {bgcolor: "yellow"},
            }}>
            Hover Me
        </Typography>
        
        {/* breakpoint values sm, md */}
        {/* converts sx to normal css class*/}

        {/* customize to create your own theme
        */}
    </Container>

    );
}

export default MuiTest;