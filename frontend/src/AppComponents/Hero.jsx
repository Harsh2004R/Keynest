import { useRef, useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";

export default function Hero() {
  const backgroundVideo =
    "https://res.cloudinary.com/djbe55v48/video/upload/v1755673751/memoirra_assets/HomeV1_otg17v.mp4";
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);
  return (
    <Center width="100%" height="100vh">
      <Box
       width="50%"
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
        //   border={"2px solid lime"}
      >
        <video
          ref={videoRef}
          id="background-video"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Center>
  );
}
