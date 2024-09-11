import {  Stack } from "@mui/material"
import HomeSwiber from "./components/HomeSwiber"
import HomeSearch from "./components/HomeSearch"

const Home = () => {
  return (
    <Stack sx={{minHeight: '70vh',flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <HomeSwiber />
      <HomeSearch />
    </Stack>
  )
}

export default Home