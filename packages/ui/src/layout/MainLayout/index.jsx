import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

// material-ui
import { styled, useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material'

// project imports
import Header from './Header'
import Sidebar from './Sidebar'
import { drawerWidth, headerHeight } from '@/store/constant'
import { SET_MENU } from '@/store/actions'

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'direction' })(({ theme, open, direction }) => {
    const isRtl = direction === 'rtl'

    return {
        ...theme.typography.mainContent,
        ...(!open && {
            backgroundColor: 'transparent',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            marginRight: isRtl ? -drawerWidth : 0,
            marginLeft: isRtl ? 0 : -drawerWidth,
            [theme.breakpoints.up('md')]: {
                marginLeft: isRtl ? 0 : -drawerWidth,
                marginRight: isRtl ? -drawerWidth : 0,
                width: `calc(100% - ${drawerWidth}px)`
            },
            [theme.breakpoints.down('md')]: {
                marginLeft: isRtl ? 0 : '20px',
                marginRight: isRtl ? '20px' : 0,
                width: `calc(100% - ${drawerWidth}px)`,
                padding: '16px'
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: isRtl ? 0 : '10px',
                marginRight: isRtl ? '10px' : 0,
                width: `calc(100% - ${drawerWidth}px)`,
                padding: '16px'
            }
        }),
        ...(open && {
            backgroundColor: 'transparent',
            transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: isRtl ? 0 : `${drawerWidth}px`,
            marginRight: isRtl ? `${drawerWidth}px` : 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            width: `calc(100% - ${drawerWidth}px)`
        })
    }
})

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
    const customization = useSelector((state) => state.customization)
    const isRtl = customization.direction === 'rtl'

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened)
    const dispatch = useDispatch()
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened })
    }

    useEffect(() => {
        setTimeout(() => dispatch({ type: SET_MENU, opened: !matchDownMd }), 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isRtl ? 'row-reverse' : 'row',
                width: '100%',
                position: 'relative'
            }}
        >
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position='fixed'
                color='inherit'
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                    ...(isRtl && {
                        width: '100%'
                    })
                }}
            >
                <Toolbar sx={{ height: `${headerHeight}px`, borderBottom: '1px solid', borderColor: theme.palette.primary[200] + 75 }}>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Main theme={theme} open={leftDrawerOpened} direction={customization.direction}>
                <Outlet />
            </Main>
        </Box>
    )
}

export default MainLayout
