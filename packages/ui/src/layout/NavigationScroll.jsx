import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

const NavigationScroll = ({ children }) => {
    const location = useLocation()
    const { pathname } = location
    const customization = useSelector((state) => state.customization)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [pathname])

    useEffect(() => {
        // Set document direction
        document.dir = customization.direction
        document.documentElement.setAttribute('dir', customization.direction)
    }, [customization.direction])

    return children || null
}

NavigationScroll.propTypes = {
    children: PropTypes.node
}

export default NavigationScroll
