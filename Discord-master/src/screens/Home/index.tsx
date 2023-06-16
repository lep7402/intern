import React from "react"
import { Box, Stack } from "@mui/material"
import { Helmet } from "react-helmet"
import { Outlet } from "react-router-dom"
import ServersList from "../../components/ServersList"
import ServerInfo from "../../components/ServerInfo"
import Chat from "./../../components/Chat/index"
import Register from "../Register"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux-saga/type"
import { State } from "../../redux-saga/reducers"

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: State) => (state.login as any).username);
  console.log(username);
  return (
    <>
    
    {console.log('hi')}
      <Helmet>
        <title>{`Home | Discord`}</title>
      </Helmet>
      <Stack height="100vh" direction="row">
        <Box height="100%" maxWidth={80}>
          <ServersList />
        </Box>

        <Box height="100%" maxWidth={250} bgcolor="rgba(43,45,49,255)">
          <ServerInfo />
        </Box>

        <Box height="100%" width="100%">
          <Chat />
        </Box>

      </Stack>
    </>
  )
}

export default Home
