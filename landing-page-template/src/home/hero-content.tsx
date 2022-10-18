import { Typewriter } from "@enlear/bit-landing-page-template.widgets.typewriter";
import { Button } from "@enlear/bit-landing-page-template.widgets.button";
import { Typography, Box } from "@mui/material";
import { FC } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroContent: FC = () => (
  <>
    <Typography
      variant="h1"
      fontWeight={600}
      sx={{ color: (theme) => theme.palette.text.primary }}
    >
      Your One Stop{" "}
      <Typewriter typeItems={["Shop", "Store", "Location"]} color="inherit" />
    </Typography>
    <Typography
      variant="h1"
      fontWeight={600}
      sx={{ color: (theme) => theme.palette.text.primary }}
    >
      For all things.
    </Typography>
    <Box sx={{ mt: 3 }}>
      <Button
        hoverTransition
        endIcon={<ArrowForwardIcon />}
        size="large"
        onClick={() => alert("clicked")}
      >
        Get Started For Free
      </Button>
    </Box>
  </>
);

export default HeroContent;
