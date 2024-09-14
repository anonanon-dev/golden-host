import {  Stack } from "@mui/material"
import HomeSearch from "./components/HomeSearch"
import HomeBenefits from "./components/HomeBenefits"
import HomeFeelings from "./components/HomeFeelings"
import HomeCategories from "./components/HomeCategories"
import HomeAdvantages from "./components/HomeAdvantages"
import HomeCities from "./components/HomeCities"
import HomeDownloadApp from "./components/HomeDownloadApp"
import HomeSwiber from "./components/HomeSwiber"

const Home = () => {
  return (
    <Stack sx={{minHeight: '70vh',flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100vw',overflow:'hidden' }}>
      <HomeSwiber />
      <HomeSearch />
      <HomeBenefits />
      <HomeFeelings />
      <HomeCategories />
      <HomeSwiber />
      <HomeAdvantages />
      <HomeCities />
      <HomeDownloadApp />
    </Stack>
  )
}

export default Home