import useDashboardMenu from './dashboard'

// ==============================|| MENU ITEMS ||============================== //

const useMenuItems = () => {
    const dashboard = useDashboardMenu()

    return {
        items: [dashboard]
    }
}
export default useMenuItems
