import {  Stack } from "@mui/material"
import HomeSwiber from "./components/HomeSwiber"
import HomeSearch from "./components/HomeSearch"
import HomeBenefits from "./components/HomeBenefits"
import HomeFeelings from "./components/HomeFeelings"
import HomeCategories from "./components/HomeCategories"

const Home = () => {
  return (
    <Stack sx={{minHeight: '70vh',flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <HomeSwiber />
      <HomeSearch />
      <HomeBenefits />
      <HomeFeelings />
      <HomeCategories />
    </Stack>
  )
}

export default Home