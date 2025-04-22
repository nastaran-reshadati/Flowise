// assets
import {
    IconUsersGroup,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable,
    IconFiles
} from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
// constant
const icons = { IconUsersGroup, IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot, IconVariable, IconFiles }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const useDashboardMenu = () => {
    const { t } = useTranslation('adminPanel')

    return {
        id: 'dashboard',
        title: '',
        type: 'group',
        children: [
            {
                id: 'chatflows',
                title: t('chatflows'),
                type: 'item',
                url: '/chatflows',
                icon: icons.IconHierarchy,
                breadcrumbs: true
            },
            {
                id: 'agentflows',
                title: t('agentflows'),
                type: 'item',
                url: '/agentflows',
                icon: icons.IconUsersGroup,
                breadcrumbs: true,
                isBeta: true
            },
            {
                id: 'assistants',
                title: t('assistants'),
                type: 'item',
                url: '/assistants',
                icon: icons.IconRobot,
                breadcrumbs: true
            },
            {
                id: 'marketplaces',
                title: t('marketplaces'),
                type: 'item',
                url: '/marketplaces',
                icon: icons.IconBuildingStore,
                breadcrumbs: true
            },
            {
                id: 'tools',
                title: t('tools'),
                type: 'item',
                url: '/tools',
                icon: icons.IconTool,
                breadcrumbs: true
            },
            {
                id: 'credentials',
                title: t('credentials'),
                type: 'item',
                url: '/credentials',
                icon: icons.IconLock,
                breadcrumbs: true
            },
            {
                id: 'variables',
                title: t('variables'),
                type: 'item',
                url: '/variables',
                icon: icons.IconVariable,
                breadcrumbs: true
            },
            {
                id: 'apikey',
                title: t('apiKeys'),
                type: 'item',
                url: '/apikey',
                icon: icons.IconKey,
                breadcrumbs: true
            },
            {
                id: 'document-stores',
                title: t('documentStores'),
                type: 'item',
                url: '/document-stores',
                icon: icons.IconFiles,
                breadcrumbs: true
            }
        ]
    }
}

export default useDashboardMenu
