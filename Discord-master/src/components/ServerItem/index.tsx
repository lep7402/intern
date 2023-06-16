import React, { useState } from "react"
import {
  Box,
  Stack,
  Popover,
  Typography,
  useTheme,
  Menu,
  MenuItem
} from "@mui/material"
import * as colors from "@mui/material/colors"
import PeopleAltTwoTone from "@mui/icons-material/PeopleAltTwoTone"
import { useNavigate } from "react-router"
import { ServerItemProps } from "./ServerItemProps"

function ServerItem({
  isDirect = false,
  serverId,
  name,
  imgUrl
}: ServerItemProps) {
  const theme = useTheme()
  const navigate = useNavigate()
  // get this from server
  const isSelected = false
  const [isHover, setIsHover] = useState(false)
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number
    mouseY: number
  } | null>(null)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsHover(true)
    setAnchorEl(event.currentTarget)
  }

  return (
    <Stack
      width="100%"
      direction="row"
      spacing={1}
      pr={2}
      justifyContent="space-between"
      alignItems="center"
      onClick={() => {
        navigate(`/channels/${serverId}`)
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        setIsHover(false)
        setContextMenu(
          contextMenu === null
            ? {
                mouseX: e.clientX + 2,
                mouseY: e.clientY - 6
              }
            : null
        )
      }}
    >
      <Menu
        open={contextMenu !== null}
        onClose={() => setContextMenu(null)}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem
          onClick={() => {
            // dispatch(getServerInfoAction(serverId))
            // NiceModal.show(ServerSettingDialog)
          }}
        >
          Server Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            // NiceModal.show(CreateInvitationDialog, { serverId })
          }}
        >
          Create invitation
        </MenuItem>
        <MenuItem
          onClick={() => {
            // dispatch(getServerInfoAction(serverId))
            // NiceModal.show(AddChannelDialog, { serverId })
          }}
        >
          Add channel
        </MenuItem>
      </Menu>
      <Box
        height={isSelected ? "40px" : "20px"}
        width="3px"
        sx={{
          bgcolor: isSelected || isHover ? "white" : "transparent",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5
        }}
      ></Box>

      <Box
        onMouseEnter={() => handleMouseEnter}
        onMouseLeave={() => {
          setIsHover(false)
          setAnchorEl(null)
        }}
        height={48}
        width={48}
        borderRadius={isSelected ? "35%" : "50%"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={
          theme.palette.mode === "light" ? colors.grey[300] : colors.grey[800]
        }
        sx={{
          backgroundImage: imgUrl ? `url(${imgUrl})` : "",
          backgroundPosition: "center",
          backgroundSize: "cover",
          ":hover": {
            cursor: "pointer",
            borderRadius: "35%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
          }
        }}
      >
        {isDirect ? (
          <PeopleAltTwoTone />
        ) : imgUrl ? null : (
          <Typography variant="h5" component="h2">
            {name ? name[0]?.toUpperCase() : ""}
          </Typography>
        )}
      </Box>

      <Popover
        sx={{
          pointerEvents: "none",
          ml: 1
        }}
        open={isHover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        onClose={() => {
          setIsHover(false)
          setAnchorEl(null)
        }}
      >
        <Typography sx={{ p: 1 }} variant="body1" component="p">
          {name}
        </Typography>
      </Popover>
    </Stack>
  )
}

export default ServerItem
